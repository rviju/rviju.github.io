import Link from "@/components/Link";
import { ItCalculator } from "modules/it-regime";

const yearMapping = {
  "2021-2022": "2021_2022",
  "2022-2023": "2022_2023",
  "2023-2024": "2023_2024",
  "2024-2025": "2024_2025",
} as const;

const ItRegimeFooter = ({ fy }: { fy: string }) => {
  const otherYears = Object.keys(yearMapping)
    .reverse()
    .filter((val) => val !== fy);
  const otherLinks = otherYears.map((val, index) => (
    <>
      <Link
        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        href={`/apps/it-regime-comparison/for-financial-year-${val}`}
        aria-label={`Link to FY ${val}`}
      >
        <>FY {val}</>
      </Link>
      {index !== otherYears.length - 1 && <span className="px-2">|</span>}
    </>
  ));
  return <div className="pt-12">Calculators for : {otherLinks}</div>;
};

const ItRegimePage = ({ fy }: { fy: string }) => {
  switch (fy) {
    case "2024-2025":
    case "2023-2024":
    case "2021-2022":
    case "2022-2023":
      return (
        <>
          <ItCalculator year={yearMapping[fy]} fy={fy} />
          <ItRegimeFooter fy={fy} />
        </>
      );
    default:
      return <></>;
  }
};

export default ItRegimePage;
