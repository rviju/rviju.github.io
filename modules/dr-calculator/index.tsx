import FullPageForm from '@/components/full-page-forms/FullPageForm';
import { PageSEO } from '@/components/SEO';
import appsData from '@/data/appsData';
import siteMetadata from '@/data/siteMetadata';
import { useCallback, useState } from 'react';
import { BasicPensionFrame } from './components/BasicPensionFrame';
import { ClericalOrOfficerFrame } from './components/ClericalOrOfficerFrame';
import { CommutationsFrame } from './components/CommutationsFrame';
import { Result } from './components/Result';
import { RetirementYearFrame } from './components/RetirementYearFrame';
import { createResetAction, useDrReducer } from './reducer';

function DrCalculator() {
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [formState, dispatch] = useDrReducer();

  const onSubmit = useCallback(() => {
    setShowForm(false);
    setShowResult(true);
  }, []);
  return (
    <>
      <PageSEO
        title={`Know your Dearness Relief (DR) - ${siteMetadata.author}`}
        description={appsData[0].description}
      />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Dearness Relief Calculator
          </h1>
          {!showResult && !showForm && (
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Calculate your deareness relief with effect from Feb
              2022, your gross pension, net pension and increase in DR per month
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
              <BasicPensionFrame value={formState.basicPension} dispatch={dispatch} />
              <ClericalOrOfficerFrame value={formState.cadre} dispatch={dispatch} />
              <RetirementYearFrame
                value={formState.retirementYearIndex}
                options={formState.yearOptions}
                dispatch={dispatch}
              />
              <CommutationsFrame value={formState.commutation} dispatch={dispatch} />
            </FullPageForm>
          )}
          {showResult && formState.drCalculated && (
            <Result
              basicPension={parseFloat(formState.basicPension.value)}
              retirementYear={formState.yearOptions[formState.retirementYearIndex]}
              commutation={parseFloat(formState.commutation.value)}
              currentDr={formState.dearnessRelief}
              grossPension={formState.grossPension}
              netPension={formState.netPension}
              increaseInDr={formState.netIncreaseInDr}
              locale="EN-IN"
            />
          )}
          {!showForm && (
            <div className="w-full flex justify-center pt-4">
              <button type="button" className="primary-button" onClick={() => setShowForm(true)}>
                {showResult ? 'Re-Calculate' : 'Calculate'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export { DrCalculator };
