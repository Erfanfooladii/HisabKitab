export const toPersianNumber = (num) => {
  if (num == null) return '';
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return String(num).split('').map(digit => {
    const index = digit.charCodeAt(0) - '0'.charCodeAt(0);
    return index >= 0 && index <= 9 ? persianDigits[index] : digit;
  }).join('');
};
