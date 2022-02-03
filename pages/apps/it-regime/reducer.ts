import { useReducer } from 'react';
import {
  AgeChangedAction,
  DeductionsChangedAction,
  FieldValidation,
  IncomeChangedAction,
  ItRegimeActionPayLoad,
  ItRegimeFormState,
  ResetAction,
} from './types';

const ValidationSuccess: FieldValidation = {
  isValid: true,
};

const thirtyPercent = 0.3;
const twentyFivePercent = 0.25;
const twentyPercent = 0.2;
const fifteenPercent = 0.15;
const tenPercent = 0.1;
const fivePercent = 0.05;
const fourPercent = 0.04;

function calculateTaxUnderOldRegime(annualIncome: number, deduction: number, age: number) {
  const incomeToBeTaxed = annualIncome - deduction;

  let tax = 0;
  if (incomeToBeTaxed < 500001) {
    tax = 0; //Rebate under 87a
  } else if (incomeToBeTaxed > 1000000) {
    tax = 112500 + (incomeToBeTaxed - 1000000) * thirtyPercent;
  } else if (incomeToBeTaxed > 500000) {
    tax = 12500 + (incomeToBeTaxed - 500000) * twentyPercent;
  } else if (incomeToBeTaxed > 250000) {
    tax = (incomeToBeTaxed - 250000) * fivePercent;
  } else {
    tax = 0;
  }
  let taxAfterAgeConsideration = tax;
  if (age === 1) {
    taxAfterAgeConsideration = Math.max(0, tax - 2500);
  } else if (age === 2) {
    taxAfterAgeConsideration = Math.max(0, tax - 12500);
  }

  const taxWithCess = taxAfterAgeConsideration + taxAfterAgeConsideration * fourPercent;

  return taxWithCess;
}

function calculateTaxUnderNewRegime(income: number) {
  const incomeToBeTaxed = income;

  let tax = 0;
  if (incomeToBeTaxed < 500001) {
    tax = 0; //Rebate under 87a
  } else if (incomeToBeTaxed > 1500000) {
    tax = 187500 + (incomeToBeTaxed - 1500000) * thirtyPercent;
  } else if (incomeToBeTaxed > 1250000) {
    tax = 125000 + (incomeToBeTaxed - 1250000) * twentyFivePercent;
  } else if (incomeToBeTaxed > 1000000) {
    tax = 75000 + (incomeToBeTaxed - 1000000) * twentyPercent;
  } else if (incomeToBeTaxed > 750000) {
    tax = 37500 + (incomeToBeTaxed - 750000) * fifteenPercent;
  } else if (incomeToBeTaxed > 500000) {
    tax = 12500 + (incomeToBeTaxed - 500000) * tenPercent;
  } else if (incomeToBeTaxed > 250000) {
    tax = (incomeToBeTaxed - 250000) * fivePercent;
  } else {
    tax = 0;
  }
  const taxWithCess = tax + tax * fourPercent;

  return taxWithCess;
}

function computeTax(state: ItRegimeFormState): ItRegimeFormState {
  if (state.income.isValid && state.deductions.isValid) {
    const income = parseInt(state.income.value, 10);
    const deductions = parseInt(state.deductions.value, 10);
    return {
      ...state,
      taxComputations: {
        taxUnderOldRegime: calculateTaxUnderOldRegime(income, deductions, state.ageIndex),
        taxUnderNewRegime: calculateTaxUnderNewRegime(income),
        taxComputed: true,
      },
    };
  } else {
    return {
      ...state,
      taxComputations: { taxComputed: false },
    };
  }
}

function numberChanged(payload: string, fieldName: 'Income' | 'Deductions') {
  let isInValid: FieldValidation = null;
  const value = parseInt(payload, 10);
  isInValid =
    !isInValid && isNaN(value)
      ? { isValid: false, error: `${fieldName} should be a valid number` }
      : isInValid;

  isInValid =
    !isInValid && payload.length > 9
      ? { isValid: false, error: `We support ${fieldName} less than 999 Crores only` }
      : isInValid;
  return { value: payload, ...(isInValid ?? ValidationSuccess) };
}

function incomeChanged(action: IncomeChangedAction): Partial<ItRegimeFormState> {
  return { income: numberChanged(action.payload, 'Income') };
}

function deductionsChanged(action: DeductionsChangedAction): Partial<ItRegimeFormState> {
  return { deductions: numberChanged(action.payload, 'Deductions') };
}

const initial_state: ItRegimeFormState = {
  income: { value: '', isValid: false, error: '' },
  deductions: { value: '', isValid: false, error: '' },
  ageIndex: 0,
  taxComputations: {
    taxComputed: false,
  },
  ageOptions: ['Below 60 years', '60 to 80 years', 'Above 80 years'],
};

function ItRegimeFormReducer(
  state: ItRegimeFormState,
  action: ItRegimeActionPayLoad
): ItRegimeFormState {
  let returnState: ItRegimeFormState;
  switch (action.type) {
    case 'income_changed':
      returnState = { ...state, ...incomeChanged(action) };
      break;
    case 'age_changed':
      returnState = { ...state, ageIndex: action.payload.ageIndex };
      break;
    case 'deductions_changed':
      returnState = { ...state, ...deductionsChanged(action) };
      break;
    case 'reset':
      returnState = { ...initial_state };
  }

  return computeTax(returnState);
}

export const useItRegimeReducer = () => useReducer(ItRegimeFormReducer, initial_state);

export function createIncomeChangedAction(value: string): IncomeChangedAction {
  return { type: 'income_changed', payload: value };
}

export function createDeductionsChangedAction(value: string): DeductionsChangedAction {
  return { type: 'deductions_changed', payload: value };
}

export function createAgeChangedAction(value: number): AgeChangedAction {
  return { type: 'age_changed', payload: { ageIndex: value } };
}

export function createResetAction(): ResetAction {
  return { type: 'reset' };
}
