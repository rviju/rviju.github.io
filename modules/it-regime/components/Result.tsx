function Result({
  income,
  deductions,
  age,
  taxInOldRegime,
  taxInNewRegime,
  locale,
}: {
  income: number;
  deductions: number;
  age: string;
  taxInOldRegime: number;
  taxInNewRegime: number;
  locale: string;
}) {
  const taxSavings = Math.abs(taxInNewRegime - taxInOldRegime);
  const betterRegime =
    taxInOldRegime < taxInNewRegime ? 'Old' : taxInOldRegime === taxInNewRegime ? 'Same' : 'New';
  return (
    <div className="border border-gray-400 dark:border-gray-500 rounded p-2">
      <div className="p-2">
        <div>
          Annual Income:
          <span className="font-semibold">₹{Math.round(income).toLocaleString(locale)}</span>
        </div>
      </div>
      <div className="p-2">
        <div>
          Total Deductions:
          <span className="font-semibold">₹{Math.round(deductions).toLocaleString(locale)}</span>
        </div>
      </div>
      <div className="p-2">
        <div>
          Age:
          <span className="font-semibold">{age}</span>
        </div>
      </div>
      <hr className="my-2 border-gray-400 dark:border-gray-500" />
      {betterRegime === 'Same' ? (
        <div className="p-2 font-semibold">Tax outgo is same in both old and new regime.</div>
      ) : (
        <div className="p-2">
          You can save approximately{' '}
          <span className="font-semibold">₹{Math.abs(taxSavings).toLocaleString(locale)}</span> as
          tax outgo by choosing <span className="font-semibold underline">{`${betterRegime}`}</span>{' '}
          regime.
        </div>
      )}
      <div className="p-2">
        Tax Outgo as per Old Regime ~
        <span className="font-semibold">₹{taxInOldRegime.toLocaleString(locale)}</span>
      </div>
      <div className="p-2">
        Tax Outgo as per New Regime ~
        <span className="font-semibold">₹{taxInNewRegime.toLocaleString(locale)}</span>
      </div>
    </div>
  );
}

export { Result };
