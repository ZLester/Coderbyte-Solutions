// Step By Step
function MeanMode(arr) {
    
    // First we declare a few variables:
    // An empty array to hold our mode counts.
    var modeArr = [];
    // A variable to hold the actual mode.
    var mode = 0;
    // A variable to hold the number of times the mode occurs.
    var modeCount = 0;
    // A variable to hold the sum of the items in the array (to calculate the mean).
    var sum = 0;
    
    // Next, we loop through each item in the array and... 
    for (var i = 0; i < arr.length; i++) {
        
        // ...add each value to our sum variable
        sum += arr[i];
        
        // ...check if each value is present in our mode array
        if (modeArr[arr[i]]) {
            // If it is, we increase its value by 1.
            modeArr[arr[i]]++;
        } else {
            // If it isn't, we set its value to 1.
            modeArr[arr[i]] = 1;
        }
        
        // ...and finally, we check if the count for the item's position in our mode array is greater than our current mode's count.
        if (modeArr[arr[i]] > modeCount) {
            // If it is, we set the mode to the current item in our input array
            mode = arr[i];
            // And set the number of times the mode has occured to the current item's value in our mode array.
            modeCount = modeArr[arr[i]];
        }
    }
    
    // Next, calculate the mean by dividing the sum by the total number of items in the array
    var mean = sum / arr.length;
    
    // Finally, if the mean and the mode are the same, we return 1, otherwise we return 0.
    if (mean == mode) {
        return 1;
    } else {
        return 0;
    }

}

// Best Practices
function MeanMode(arr) {

    var modeArr = [];
    var mode = 0;
    var modeCount = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];

        if (modeArr[arr[i]]) {
            modeArr[arr[i]]++;
        } else {
            modeArr[arr[i]] = 1;
        }
        if (modeArr[arr[i]] > modeCount) {
            mode = arr[i];
            modeCount = modeArr[arr[i]];
        }
    }

    var mean = sum / arr.length;

    if (mean == mode) {
        return 1;
    } else {
        return 0;
    }

}
