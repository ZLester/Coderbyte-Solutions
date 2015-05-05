function PalindromeTwo(str) { 

  
  return str.replace(/[^a-zA-Z]/g, "").toLowerCase() === str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase(); 
         
}
