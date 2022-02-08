import FullPageForm from '@/components/full-page-forms/FullPageForm';
import { PageSEO } from '@/components/SEO';
import appsData from '@/data/appsData';
import siteMetadata from '@/data/siteMetadata';
import { useCallback, useState } from 'react';
import { AgeFrame, DeductionsFrame, IncomeFrame, Result } from './components';
import { createResetAction, useItRegimeReducer } from './reducer';

function ItCalculator() {
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [formState, dispatch] = useItRegimeReducer();

  const onSubmit = useCallback(() => {
    setShowForm(false);
    setShowResult(true);
  }, []);
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
              onSubmit={onSubmit}
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

export { ItCalculator };
