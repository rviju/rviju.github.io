import Big from 'big.js';
import { DrTableRowType } from './types';

class DrTableRow implements DrTableRowType {
  public dateIndex: number;
  //  public from: number;
  public upTo: number;
  public baseIndex: number;
  public factor: number;
  public exGratia: number;

  constructor(
    dateIndex: number,
    upTo: number,
    baseIndex: number,
    factor: number,
    exGratia: number
  ) {
    this.dateIndex = dateIndex;
    //this.from = from;
    this.upTo = upTo;
    this.baseIndex = baseIndex;
    this.factor = factor;
    this.exGratia = exGratia;
  }
}

export const AverageIndex = {
  current: 9122.33,
  onOct2022: 8456.00 
};

const truthTable2023: Array<DrTableRow> = [
  new DrTableRow(1, 1250, 600, 0.67, 800),
  new DrTableRow(1, 2000, 600, 0.67, 450),
  new DrTableRow(1, 2130, 600, 0.67, 0),
  new DrTableRow(1, 1_00_00_000, 600, 0.67, 0),
  new DrTableRow(2, 2400, 1148, 0.35, 800),
  new DrTableRow(2, 3850, 1148, 0.35, 450),
  new DrTableRow(2, 4100, 1148, 0.35, 0),
  new DrTableRow(2, 1_00_00_000, 1148, 0.35, 0),
  new DrTableRow(3, 3550, 1684, 0.24, 800),
  new DrTableRow(3, 5650, 1684, 0.24, 450),
  new DrTableRow(3, 6010, 1684, 0.24, 0),
  new DrTableRow(3, 1_00_00_000, 1684, 0.24, 0),
  new DrTableRow(4, 1_00_00_000, 2288, 0.18, 0),
  new DrTableRow(5, 1_00_00_000, 2836, 0.15, 0),
  new DrTableRow(6, 1_00_00_000, 4440, 0.1, 0),
  new DrTableRow(7, 1_00_00_000, 6352, 0.07, 0),
];

const truthTableOct2022: Array<DrTableRow> = [
  new DrTableRow(1, 1250, 600, 0.67, 0),
  new DrTableRow(1, 2000, 600, 0.55, 0),
  new DrTableRow(1, 2130, 600, 0.33, 0),
  new DrTableRow(1, 1_00_00_000, 600, 0.17, 0),
  new DrTableRow(2, 2400, 1148, 0.35, 0),
  new DrTableRow(2, 3850, 1148, 0.29, 0),
  new DrTableRow(2, 4100, 1148, 0.17, 0),
  new DrTableRow(2, 1_00_00_000, 1148, 0.09, 0),
  new DrTableRow(3, 3550, 1684, 0.24, 0),
  new DrTableRow(3, 5650, 1684, 0.2, 0),
  new DrTableRow(3, 6010, 1684, 0.12, 0),
  new DrTableRow(3, 1_00_00_000, 1684, 0.06, 0),
  new DrTableRow(4, 1_00_00_000, 2288, 0.18, 0),
  new DrTableRow(5, 1_00_00_000, 2836, 0.15, 0),
  new DrTableRow(6, 1_00_00_000, 4440, 0.1, 0),
  new DrTableRow(7, 1_00_00_000, 6352, 0.07, 0),
];

const exGratiaFactorMar2024 = [
  0.17,
  0.15,
  0.12,
  0.07,
  0.05,
  0.03,
  0.02
]

function calculateDrPercentage(drInfo: DrTableRow, avgIndex: number) {
  const avg = Big(avgIndex);
  const numberOfSlabs = Big(avg.minus(drInfo.baseIndex).div(4).toFixed(0, Big.round));
  //console.log('Number of Slabs:', numberOfSlabs.toString());
  const result = numberOfSlabs.mul(drInfo.factor).toFixed(2, Big.round);
  //console.log('DR %', result);
  return result;
}

function calculateDrImpl(filteredRecords: DrTableRow[], basicPension: number, avgIndex: number) {
  const numberOfRecords = filteredRecords.length;
  if (numberOfRecords === 1) {
    const pension = Big(basicPension);
    const dr = pension
      .mul(calculateDrPercentage(filteredRecords[0], avgIndex))
      .div(100)
      .toFixed(2, Big.roundDown);
    return { dr, exGratia: filteredRecords[0].exGratia };
  } else {
    let index = 0;
    let dr = Big(0);

    while (filteredRecords[index].upTo < basicPension) {
      index++;
    }
    const num = Big(basicPension);
    const drValue = num.mul(calculateDrPercentage(filteredRecords[index], avgIndex)).div(100);
    dr = dr.plus(drValue);
    const exGratia = filteredRecords[index].exGratia;
    return { dr: dr.toFixed(2, Big.roundDown), exGratia };
  }
}

function calculateCurrentDr(dateIndex: number, basicPension: number) {
  const avgIndex = AverageIndex.current;
  const filteredRecords = truthTable2023.filter((val) => val.dateIndex === dateIndex);
  return calculateDrImpl(filteredRecords, basicPension, avgIndex);
}

function calculateOct2022Dr(dateIndex: number, basicPension: number) {
  const avgIndex = AverageIndex.onOct2022;
  const filteredRecords = truthTableOct2022.filter((val) => val.dateIndex === dateIndex);
  return calculateDrImpl(filteredRecords, basicPension, avgIndex);
}

export function calculateDr(dateIndex: number, basicPension: number) {
  const currentDr = calculateCurrentDr(dateIndex, basicPension)
  const oct2022Dr = calculateOct2022Dr(dateIndex, basicPension)
  const exGratiaFactorMar2024BasedOnDateIndex = exGratiaFactorMar2024[dateIndex-1]
  const exGratiaIncreasePerMonth = Math.round((basicPension + oct2022Dr.dr)*exGratiaFactorMar2024BasedOnDateIndex /100)*100
  return { dr: currentDr.dr, exGratia: currentDr.exGratia + exGratiaIncreasePerMonth, additionalExgratia: exGratiaIncreasePerMonth }
}


