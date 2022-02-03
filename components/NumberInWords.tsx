const a = [
  '',
  'One ',
  'Two ',
  'Three ',
  'Four ',
  'Five ',
  'Six ',
  'Seven ',
  'Eight ',
  'Nine ',
  'Ten ',
  'Eleven ',
  'Twelve ',
  'Thirteen ',
  'Fourteen ',
  'Fifteen ',
  'Sixteen ',
  'Seventeen ',
  'Eighteen ',
  'Nineteen ',
];
const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function inWords(num: string) {
  if ((num = num.toString()).length > 9 || num === '') return '';
  const n = num.padStart(9, '0').match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  let str = '';
  str += n[1] != '00' ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
  str += n[2] != '00' ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
  str += n[3] != '00' ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
  str += n[4] != '0' ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
  str +=
    n[5] != '00'
      ? (str != '' ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])
      : '';
  return str;
}

function NumberInWords({ value, className = '' }: { value: string; className?: string }) {
  return <div className={className}>{inWords(value)}</div>;
}

export default NumberInWords;
