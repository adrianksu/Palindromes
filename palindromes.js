function palindrome(str) {
  var lowerString = str.toLowerCase(str);
  var cleanString = lowerString.match(/[a-zA-Z0-9]/gi); 
  catcleanString = cleanString.join('');
  
  catreversedString = cleanString.reverse().join('');
  
  if (catcleanString === catreversedString) {
  return true;
  }
  return false;
}



palindrome("0_0 (: /-\ :) 0-0");
