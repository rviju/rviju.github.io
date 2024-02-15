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

function calculateDrPercentage(drInfo: DrTableRow, avgIndex: number) {
  const avg = Big(avgIndex);
  const numberOfSlabs = Big(avg.minus(drInfo.baseIndex).div(4).toFixed(0, Big.round));
  console.log('Number of Slabs:', numberOfSlabs.toString());
  const result = numberOfSlabs.mul(drInfo.factor).toFixed(2, Big.round);
  console.log('DR %', result);
  return result;
}

export function calculateDr(dateIndex: number, basicPension: number, avgIndex: number) {
  const filteredRecords = truthTable2023.filter((val) => val.dateIndex === dateIndex);
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
