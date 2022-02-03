import FullPageForm from '@/components/full-page-forms/FullPageForm';
import { PageSEO } from '@/components/SEO';
import appsData from '@/data/appsData';
import siteMetadata from '@/data/siteMetadata';
import { useState } from 'react';
import { DeductionsFrame, IncomeFrame } from './frames';
import { AgeFrame } from './frames/AgeFrame';
import { createResetAction, useItRegimeReducer } from './reducer';

export default function ItCalculator() {
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [formState, dispatch] = useItRegimeReducer();

  return (
    <>
      <PageSEO
        title={`Compare IT Regime for FY 2021-2022 & FY 2022-2023 - ${siteMetadata.author}`}
        description={appsData[0].description}
      />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Compare Old and New IT Regime
          </h1>
          {!showResult && !showForm && (
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              You can compare and pick which IT (new or old) regime will help save you tax outgo
              using this simple app. Key in your total income, annual deductions and your age group
              to find out if you can save tax with new IT regime or the old IT regime.
            </p>
          )}
        </div>
        <div className="">
          {showForm && (
            <FullPageForm
              onSubmit={() => {
                setShowForm(false);
                setShowResult(true);
              }}
              title="Nice"
              onClose={() => {
                setShowForm(false);
                setShowResult(false);
                dispatch(createResetAction());
              }}
              className="text-black bg-white dark:bg-gray-900 dark:text-white text-4xl"
            >
              <IncomeFrame value={formState.income} dispatch={dispatch} />
              <DeductionsFrame value={formState.deductions} dispatch={dispatch} />
              <AgeFrame
                value={formState.ageIndex}
                dispatch={dispatch}
                options={formState.ageOptions}
              />
            </FullPageForm>
          )}
          {showResult && formState.taxComputations.taxComputed && (
            <Result
              income={parseInt(formState.income.value, 10)}
              deductions={parseInt(formState.deductions.value, 10)}
              age={formState.ageOptions[formState.ageIndex]}
              taxInOldRegime={formState.taxComputations.taxUnderOldRegime}
              taxInNewRegime={formState.taxComputations.taxUnderNewRegime}
              locale="EN-IN"
            />
          )}
          {!showForm && (
            <div className="w-full flex justify-center pt-4">
              <button type="button" className="primary-button" onClick={() => setShowForm(true)}>
                {showResult ? 'Try Another' : 'Start Comparing'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

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
