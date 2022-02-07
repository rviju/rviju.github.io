import Big from 'big.js';
import { DrTableRowType } from './types';

class DrTableRow implements DrTableRowType {
  public dateIndex: number;
  //  public from: number;
  public upTo: number;
  public baseIndex: number;
  public factor: number;

  constructor(dateIndex: number, upTo: number, baseIndex: number, factor: number) {
    this.dateIndex = dateIndex;
    //this.from = from;
    this.upTo = upTo;
    this.baseIndex = baseIndex;
    this.factor = factor;
  }
}

export const AverageIndex = {
  Q12022: 8239,
  Q42021: 7941,
};

const truthTable: Array<DrTableRow> = [
  new DrTableRow(1, 1250, 600, 0.67),
  new DrTableRow(1, 2000, 600, 0.55),
  new DrTableRow(1, 2130, 600, 0.33),
  new DrTableRow(1, 1_00_00_000, 600, 0.17),
  new DrTableRow(2, 2400, 1148, 0.35),
  new DrTableRow(2, 3850, 1148, 0.29),
  new DrTableRow(2, 4100, 1148, 0.17),
  new DrTableRow(2, 1_00_00_000, 1148, 0.09),
  new DrTableRow(3, 3550, 1684, 0.24),
  new DrTableRow(3, 5650, 1684, 0.2),
  new DrTableRow(3, 6010, 1684, 0.12),
  new DrTableRow(3, 1_00_00_000, 1684, 0.06),
  new DrTableRow(4, 1_00_00_000, 2288, 0.18),
  new DrTableRow(5, 1_00_00_000, 2836, 0.15),
  new DrTableRow(6, 1_00_00_000, 4440, 0.1),
  new DrTableRow(7, 1_00_00_000, 6352, 0.07),
];

function calculateDrPercentage(drInfo: DrTableRow, avgIndex: number) {
  const avg = Big(avgIndex);
  const numberOfSlabs = Big(avg.minus(drInfo.baseIndex).div(4).toFixed(0, Big.roundDown));
  //console.log('Number of Slabs:', numberOfSlabs.toString());
  const result = numberOfSlabs.mul(drInfo.factor).toFixed(2, Big.roundDown);
  //console.log('DR %', result);
  return result;
}

export function calculateDr(dateIndex: number, basicPension: number, avgIndex: number) {
  const filteredRecords = truthTable.filter((val) => val.dateIndex === dateIndex);
  const numberOfRecords = filteredRecords.length;
  //console.log('Number of records', numberOfRecords);
  if (numberOfRecords === 1) {
    const pension = Big(basicPension);
    return pension
      .mul(calculateDrPercentage(filteredRecords[0], avgIndex))
      .div(100)
      .toFixed(2, Big.roundDown);
  } else {
    let index = 0;
    let dr = Big(0);
    let lastTo = 0;
    while (filteredRecords[index].upTo <= basicPension) {
      const num = Big(filteredRecords[index].upTo);
      const drValue = num
        .minus(lastTo)
        .mul(calculateDrPercentage(filteredRecords[index], avgIndex))
        .div(100);
      dr = dr.plus(drValue);
      lastTo = filteredRecords[index].upTo;
      index++;
    }
    const num = Big(basicPension);
    const drValue = num
      .minus(lastTo)
      .mul(calculateDrPercentage(filteredRecords[index], avgIndex))
      .div(100);
    dr = dr.plus(drValue);
    return dr.toFixed(2, Big.roundDown);
  }
}
