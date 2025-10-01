export type AsinStatus = {
  checked: boolean;
  updatedAt: string | null;
};

export type AsinStatusData = Record<string, AsinStatus>;
