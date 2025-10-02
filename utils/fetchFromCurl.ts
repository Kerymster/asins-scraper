export interface ParsedCurlRequest {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: string;
}

function tokenizeCurlCommand(curlCommand: string): string[] {
  const tokens: string[] = [];
  let current = "";
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < curlCommand.length; i += 1) {
    const char = curlCommand[i];
    const prev = i > 0 ? curlCommand[i - 1] : "";
    if (char === "'" && !inDouble) {
      if (inSingle && prev === "\\") {
        current = `${current.slice(0, -1)}'`;
      } else {
        inSingle = !inSingle;
      }
      continue;
    }
    if (char === '"' && !inSingle) {
      if (inDouble && prev === "\\") {
        current = `${current.slice(0, -1)}\"`;
      } else {
        inDouble = !inDouble;
      }
      continue;
    }
    if (!inSingle && !inDouble && /\s/.test(char)) {
      if (current.length > 0) {
        tokens.push(current);
        current = "";
      }
      continue;
    }
    if (char === "\\" && i + 1 < curlCommand.length) {
      const next = curlCommand[i + 1];
      // Handle line continuation or escaped space/quote
      if (next === "\n") {
        i += 1;
        continue;
      }
    }
    current += char;
  }
  if (current.length > 0) tokens.push(current);
  return tokens.filter((t) => t.length > 0);
}

function parseHeader(header: string): { name: string; value: string } | null {
  const idx = header.indexOf(":");
  if (idx === -1) return null;
  const name = header.slice(0, idx).trim();
  const value = header.slice(idx + 1).trim();
  if (!name) return null;
  return { name, value };
}

export function parseCurl(curlCommand: string): ParsedCurlRequest {
  const tokens = tokenizeCurlCommand(curlCommand).filter((t) => t !== "\\");
  if (tokens.length === 0) {
    throw new Error("Empty cURL command");
  }
  // Drop leading "curl"
  const startIndex = tokens[0].toLowerCase() === "curl" ? 1 : 0;
  let method = "GET";
  const headers: Record<string, string> = {};
  let body: string | undefined;
  let url = "";

  for (let i = startIndex; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token === "-X" || token === "--request") {
      i += 1;
      method = (tokens[i] || "GET").toUpperCase();
      continue;
    }
    if (token === "-H" || token === "--header") {
      i += 1;
      const headerStr = tokens[i] || "";
      const parsed = parseHeader(headerStr);
      if (parsed) headers[parsed.name] = parsed.value;
      continue;
    }
    if (
      token === "--data" ||
      token === "--data-raw" ||
      token === "--data-binary" ||
      token === "--data-ascii" ||
      token === "-d"
    ) {
      i += 1;
      body = tokens[i] || "";
      if (!method || method === "GET") method = "POST";
      if (
        !Object.keys(headers).some((h) => h.toLowerCase() === "content-type")
      ) {
        // Assume JSON if it looks like JSON, else default to form
        const looksJson =
          body.trim().startsWith("{") || body.trim().startsWith("[");
        headers["Content-Type"] = looksJson
          ? "application/json"
          : "application/x-www-form-urlencoded";
      }
      continue;
    }
    if (token === "-A" || token === "--user-agent") {
      i += 1;
      headers["User-Agent"] = tokens[i] || "";
      continue;
    }
    if (token === "-e" || token === "--referer" || token === "--referrer") {
      i += 1;
      headers["Referer"] = tokens[i] || "";
      continue;
    }
    if (token === "-b" || token === "--cookie") {
      i += 1;
      headers["Cookie"] = tokens[i] || "";
      continue;
    }
    if (token === "--compressed") {
      // No-op for fetch; compression is handled automatically
      continue;
    }
    if (token === "-k" || token === "--insecure") {
      // No direct equivalent in fetch; ignore
      continue;
    }
    if (token.startsWith("http://") || token.startsWith("https://")) {
      url = token;
      continue;
    }
    // If not a recognized flag and url not set, treat as URL
    if (!token.startsWith("-") && !url) {
      url = token;
    }
  }

  if (!url) throw new Error("cURL command missing URL");

  return { url, method, headers, body };
}

export async function fetchFromCurl(
  curlCommand: string,
  initOverrides?: RequestInit
): Promise<Response> {
  const { url, method, headers, body } = parseCurl(curlCommand);
  const init: RequestInit = {
    method,
    headers,
    body,
    ...initOverrides,
  };
  return fetch(url, init);
}
