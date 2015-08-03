// Step By Step
function ArithGeo(arr) {

    // First, we declare two empty arrays to hold the differences and quotients of each item in our input array
    var arrDif = [];
    var arrQuo = [];

    // Next, we declare two booleans as "flags" for whether or not our array follows an arithmetic or geometric pattern
    // As we're going to turn these false if the input array doesn't follow an arithmetic or geometric pattern, we initialize them to true.
    var ariFlag = true;
    var geoFlag = true;

    // Next, we loop through each item in our input array and use the .push method to send...
    for (var i = 0; i < arr.length - 1; i++) {
        // ...the difference of each item to our arrDif array.
        arrDif.push(arr[i + 1] - arr[i]);
        // ...the  quotient of each item to our arrQuo array. 
        arrQuo.push(arr[i + 1] / arr[i]);
    }
    // Note that since this loop "looks ahead" one item during each pass, we end it 1 iteration earlier than we normally would (i < arr.length - 1 instead of i < arr.length)

    // After that, we use a single loop to check if each item in our newly populated arrDif and arrQuo arrays are equal to each other.
    // Note that we can set the loop length using the length of arrDif because we know both arrDif and arrQuo are the same length.
    for (var j = 0; j < arrDif.length - 1; j++) {
        // This if statement checks to see if each item in our array of differences is equal to the next item in the array, and if not, sets our ariFlag to false.
        if (arrDif[j] != arrDif[j + 1]) {
            ariFlag = false;
        }
        // We do the same thing for our array of quotients.
        if (arrQuo[j] != arrQuo[j + 1]) {
            geoFlag = false;
        }
    }

    // Finally, we return "Arithmetic" if the ariFlag is set to true, "Geometric" if the geoFlag is set to true, and -1 if neither are set to true.
    if (ariFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }

}

// Best Practices
function ArithGeo(arr) {

    var arrDif = [];
    var arrQuo = [];
    var ariFlag = true;
    var geoFlag = true;

    for (var i = 0; i < arr.length - 1; i++) {
      arrDif.push(arr[i + 1] - arr[i]);
      arrQuo.push(arr[i + 1] / arr[i]);
      if (i > 0) {
        if (arrDif[i-1] != arrDif[i]) {
          ariFlag = false;
        }
        if (arrQuo[i-1] != arrQuo[i]) {
          geoFlag = false;
        }
      }
    }

    if (ariFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }

}
