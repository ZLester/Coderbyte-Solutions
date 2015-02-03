// Changed filetype to .js so syntax highlighting works.

// I see function names suggested on CoderByte as
// starting with a capital letter, but the 
// Google style-guide for javascript suggests
// functionNameLikeThis
// https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Naming#Naming

function simpleAdding(num) { 

  // The styleguide also suggests always using 'var'
  // with declarations.
  // https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=var#var
  var sum = 0;
  
  if (num < 0){
    throw "Number must be non-negative.";
  }

  for (var i = 0; i <= num; i++) {
    sum += i;
  } 
  
  return sum; 

}

// We're going to put the fun in functions
// by solving this recursively!

// Just messing around with github forks and
// pull requests. Trying to learn and familiarize
// myself with the process.

function recursiveAdding(num, curSum) {
  curSum = curSum | 0;
  if (num == 0){
    return curSum;
  }
  curSum += num;
  num--;
  return recursiveAdding(num, curSum);
}