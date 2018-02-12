function FormattedDivision (num1, num2) {
  var result = (num1 / num2).toFixed(4);
  if (result >= 1000) {
    result = result.split('');
    for (var i = result.length - 8; i > 0; i -= 3) {
      result.splice(i, 0, ',');
    }
    result = result.join('');
  }
  return result;
}
