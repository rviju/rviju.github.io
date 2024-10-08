function Result({
  basicPension,
  retirementYear,
  commutation,
  currentDr,
  grossPension,
  netPension,
  additionalExgratia,
  locale,
}: {
  basicPension: number;
  retirementYear: string;
  commutation: number;
  currentDr: number;
  grossPension: number;
  netPension: number;
  additionalExgratia: number;
  locale: string;
}) {
  return (
    <div className="border border-gray-400 dark:border-gray-500 rounded p-2">
      <div className="p-2">
        <div>
          Basic Pension :{" "}
          <span className="font-semibold">
            ₹ {Math.round(basicPension).toLocaleString(locale)}
          </span>
        </div>
      </div>
      <div className="p-2">
        <div>
          Retirement Year :{" "}
          <span className="font-semibold">{retirementYear}</span>
        </div>
      </div>
      <div className="p-2">
        <div>
          Commuted Portion :{" "}
          <span className="font-semibold">{commutation}</span>
        </div>
      </div>
      <hr className="my-2 border-gray-400 dark:border-gray-500" />

      <div className="p-2">
        Dearness Relief :{" "}
        <span className="font-semibold">
          ₹{" "}
          {currentDr.toLocaleString(locale, {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
      <div className="p-2">
        Additional exgratia :{" "}
        <span className="font-semibold">
          ₹{" "}
          {additionalExgratia.toLocaleString(locale, {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
      <div className="p-2">
        Gross Pension :{" "}
        <span className="font-semibold">
          ₹{" "}
          {grossPension.toLocaleString(locale, {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
      <div className="p-2">
        Net Pension :{" "}
        <span className="font-semibold">
          ₹{" "}
          {netPension.toLocaleString(locale, {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}

export { Result };
