import SearchSection from "./search";
import AsinsTable from "./asins";

export default function ScraperPage() {
  return (
    <div className="flex-1 p-6 space-y-8">
      <SearchSection />
      <AsinsTable />
    </div>
  );
}
