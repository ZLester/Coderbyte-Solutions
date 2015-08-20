// Step By Step
function LongestWord(sen) {

    // First, we declare a variable to hold the longest word and initialize it to an empty string...
    var longestWord = "";
    // ...along with another variable to hold the length of the longest word, initializing it to 0.
    var longestLength = 0;

    // Next, we "prep" the input sentence by removing all non-alphanumeric characters
    sen = sen.replace(/[^a-zA-Z0-9\s]/g, "");
    // Note that /[^a-zA-Z0-9\s]/g is a regex expression that matches all characters that are not lowercase letter (a-z), an uppercase letter (A-Z), a number (0-9), and a space (\s)
    // The ^ character negates the set that follows it (think of it like ! in Javascript)
    // http://www.regexr.com/ is a good place to play around with regex expressions and see what each character does

    // Next, we use the split method to turn our input string into an array of its individual words
    // Note that we pass a single space into the method (" ") to split the string at each space
    sen = sen.split(" ");

    // After that, we declare a for loop that iterates through each item in our new array...
    for (var i = 0; i < sen.length; i++) {
        // ...and check if the length of the word we're currently looking at is longer than the longestLength variable
        if (sen[i].length > longestLength) {
            // If it is, we set the longestLength variable to the length of the newly-longest word...
            longestLength = sen[i].length;
            // ...and set the longestWord variable to the string itself
            longestWord = sen[i];
        }
    }
    // Note that since we initialized the longestLength variable to 0, the first word in our array will always become the longest word
    // As per coderbyte's prompt, all ties go to the earliest occuring word, which is why we use > in our if statement and not >=
    
    // Finally, we our answer
    return longestWord;
}

// Without comments
function LongestWord(sen) {
    var longestWord = "";
    var longestLength = 0;
    sen = sen.replace(/[^a-zA-Z0-9\s]/g, "").split(" ");

    for (var i = 0; i < sen.length; i++) {
        if (sen[i].length > longestLength) {
            longestLength = sen[i].length;
            longestWord = sen[i];
        }
    }
    return longestWord;
}
