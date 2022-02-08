import { useReducer } from 'react';
import { AverageIndex, calculateDr } from './dr-calculator';
import {
  BasicPensionChangedAction,
  Cadre,
  CadreChangedAction,
  CommutationChangedAction,
  DrActionPayLoad,
  DrCalculatorFormState,
  FieldValidation,
  ResetAction,
  RetirementYearChangedAction,
} from './types';

export function createBasicPensionChangedAction(value: string): BasicPensionChangedAction {
  return { type: 'basic_pension_changed', payload: value };
}

export function createCommutationChangedAction(value: string): CommutationChangedAction {
  return { type: 'commutation_changed', payload: value };
}

export function createRetirementYearChangedAction(value: number): RetirementYearChangedAction {
  return { type: 'retirement_year_changed', payload: { retirementYearIndex: value } };
}

export function createCadreChangedAction(value: Cadre): CadreChangedAction {
  return { type: 'cadre_changed', payload: value };
}

export function createResetAction(): ResetAction {
  return { type: 'reset' };
}

const ValidationSuccess: FieldValidation = {
  isValid: true,
};

function numberChanged(payload: string, fieldName: string) {
  let isInValid: FieldValidation = null;
  const value = parseInt(payload, 10);
  isInValid =
    !isInValid && isNaN(value)
      ? { isValid: false, error: `${fieldName} should be a valid number` }
      : isInValid;

  isInValid =
    !isInValid && payload.length > 7
      ? { isValid: false, error: `We support ${fieldName} less than 99 Lakhs only` }
      : isInValid;
  return { value: payload, ...(isInValid ?? ValidationSuccess) };
}

function basicPensionChanged(action: BasicPensionChangedAction): Partial<DrCalculatorFormState> {
  return { basicPension: numberChanged(action.payload, 'Basic Pension') };
}

function deductionsChanged(action: CommutationChangedAction): Partial<DrCalculatorFormState> {
  return { commutation: numberChanged(action.payload, 'Commuted Portion') };
}

const clericalYearOption = [
  'Before 01-Nov-1992',
  'Between 01-Nov-1992 and 31-Mar-1998',
  'Between 01-Apr-1998 and 31-Oct-2002',
  'Between 01-Nov-2002 and 31-Oct-2007',
  'Between 01-Nov-2007 and 31-Oct-2012',
  'Between 01-Nov-2012 and 31-Oct-2017',
  'On or After 01-Nov-2017',
];
const officerYearOption = [
  'Before 01-July-1993',
  'Between 01-July-1993 and 31-Mar-1998',
  'Between 01-Apr-1998 and 31-Oct-2002',
  'Between 01-Nov-2002 and 31-Oct-2007',
  'Between 01-Nov-2007 and 31-Oct-2012',
  'Between 01-Nov-2012 and 31-Oct-2017',
  'On or After 01-Nov-2017',
];

const initial_state: DrCalculatorFormState = {
  basicPension: { value: '', isValid: false, error: '' },
  retirementYearIndex: 1,
  commutation: { value: '0', isValid: false, error: '' },
  dearnessRelief: 0,
  grossPension: 0,
  netPension: 0,
  cadre: 'Clerical',
  yearOptions: clericalYearOption,
  drCalculated: false,
};

function DrCalculatorFormReducer(
  state: DrCalculatorFormState,
  action: DrActionPayLoad
): DrCalculatorFormState {
  let returnState: DrCalculatorFormState;
  switch (action.type) {
    case 'basic_pension_changed':
      returnState = { ...state, ...basicPensionChanged(action) };
      break;
    case 'retirement_year_changed':
      returnState = { ...state, retirementYearIndex: action.payload.retirementYearIndex };
      break;
    case 'commutation_changed':
      returnState = { ...state, ...deductionsChanged(action) };
      break;
    case 'cadre_changed':
      returnState = {
        ...state,
        cadre: action.payload,
        yearOptions: action.payload === 'Clerical' ? clericalYearOption : officerYearOption,
      };
      break;
    case 'reset':
      returnState = { ...initial_state };
      break;
  }

  return computeDr(returnState);
}

export const useDrReducer = () => useReducer(DrCalculatorFormReducer, initial_state);

function computeDr(state: DrCalculatorFormState): DrCalculatorFormState {
  if (state.basicPension.isValid && state.commutation.isValid) {
    const basicPension = parseInt(state.basicPension.value, 10);
    const currentDr = calculateDr(
      state.retirementYearIndex,
      parseInt(state.basicPension.value, 10),
      AverageIndex.Q12022
    );

    const previousDr = calculateDr(state.retirementYearIndex, basicPension, AverageIndex.Q42021);
    const grossPension = parseFloat(currentDr) + basicPension;
    const netPension = grossPension - parseFloat(state.commutation.value);
    return {
      ...state,
      drCalculated: true,
      dearnessRelief: currentDr,
      grossPension,
      netPension,
      netIncreaseInDr: parseFloat(currentDr) - parseFloat(previousDr),
    };
  }
  return {
    ...state,
    drCalculated: false,
    dearnessRelief: null,
    grossPension: null,
    netPension: null,
    netIncreaseInDr: null,
  };
}
