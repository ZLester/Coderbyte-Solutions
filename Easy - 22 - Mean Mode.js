// Step By Step
function MeanMode(arr) {
    
    // First, we declare an empty array to hold the number of times each item in the input array occurs,
    var modeMap = [];
    // a variable to hold the actual mode,
    var mode = 0;
    // a variable to hold the number of times the mode occurs,
    var modeCount = 0;
    // and a variable to hold the sum of the items in the array (to calculate the mean),
    var sum = 0;
    
    // Next, we loop through each item in the input array and... 
    for (var i = 0; i < arr.length; i++) {
        
        // ...add each value to our sum variable
        sum += arr[i];
        
        // ...check if each value is present in our frequency count array
        if (modeMap[arr[i]]) {
            // If it is, we increase its value by 1.
            modeMap[arr[i]]++;
        } else {
            // If it isn't, we set its value to 1.
            modeMap[arr[i]] = 1;
        }
        
        // ...and check if the count for the item's position in our mode array is greater than our current mode's count.
        if (modeMap[arr[i]] > modeCount) {
            // If it is, we set the mode to the current item in our input array...
            mode = arr[i];
            // ...and set the number of times the mode has occured to the current item's value in our mode array.
            modeCount = modeMap[arr[i]];
        }
    }
    
    // Next, we calculate the mean by dividing the sum by the total number of items in the array.
    var mean = sum / arr.length;
    
    // If the mean and the mode are the same, we return 1, otherwise we return 0.
    if (mean === mode) {
        return 1;
    } else {
        return 0;
    }

}

// Without Comments
function MeanMode(arr) {

    var modeMap = [];
    var mode = 0;
    var modeCount = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];

        if (modeMap[arr[i]]) {
            modeMap[arr[i]]++;
        } else {
            modeMap[arr[i]] = 1;
        }
        if (modeMap[arr[i]] > modeCount) {
            mode = arr[i];
            modeCount = modeMap[arr[i]];
        }
    }

    var mean = sum / arr.length;

    if (mean === mode) {
        return 1;
    } else {
        return 0;
    }

}
