function Result({
  basicPension,
  retirementYear,
  commutation,
  currentDr,
  grossPension,
  netPension,
  increaseInDr,
  locale,
}: {
  basicPension: number;
  retirementYear: string;
  commutation: number;
  currentDr: number;
  grossPension: number;
  netPension: number;
  increaseInDr: number;
  locale: string;
}) {
  return (
    <div className="border border-gray-400 dark:border-gray-500 rounded p-2">
      <div className="p-2">
        <div>
          Basic Pension:
          <span className="font-semibold">₹ {Math.round(basicPension).toLocaleString(locale)}</span>
        </div>
      </div>
      <div className="p-2">
        <div>
          Retirement Year:
          <span className="font-semibold">{retirementYear}</span>
        </div>
      </div>
      <div className="p-2">
        <div>
          Commuted Portion: <span className="font-semibold">{commutation}</span>
        </div>
      </div>
      <hr className="my-2 border-gray-400 dark:border-gray-500" />

      <div className="p-2">
        Dearness Relief as per 7th pay commision :
        <span className="font-semibold">₹ {currentDr.toLocaleString(locale)}</span>
      </div>

      <div className="p-2">
        Gross Pension :{' '}
        <span className="font-semibold">₹ {grossPension.toLocaleString(locale)}</span>
      </div>
      <div className="p-2">
        Net Pension : <span className="font-semibold">₹ {netPension.toLocaleString(locale)}</span>
      </div>
      <div className="p-2">
        Increate in Dearness Relief :{' '}
        <span className="font-semibold">₹ {increaseInDr.toLocaleString(locale)}</span>
      </div>
    </div>
  );
}

export { Result };
