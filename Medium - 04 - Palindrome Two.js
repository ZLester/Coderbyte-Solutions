function PalindromeTwo(str) { 
  var strFor = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  var strRev =  str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase();
  return strFor === strRev;
}

function PalindromeTwo(str) { 
  return str.replace(/[^a-zA-Z]/g, "").toLowerCase() === str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase();
}
