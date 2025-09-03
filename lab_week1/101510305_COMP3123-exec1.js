// Matthew Macalalad, 101510305, COMP3123, Lab Week 1

// Exercise 2: Write a JavaScript program to find the largest of three given integers.

function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Exercise 2 output given 10, 20, and 15: \n" + largestOfThree(10, 20, 15)); // Output: 20


// Exercise 3: Write a JavaScript program to move last three characters to the start of a given string.
// The string length must be greater or equal to three.

function moveLastThreeToFront(str) {
    if (str.length < 3) {
        return "String length must be at least 3";
    }
    else {
        return str.slice(-3) + str.slice(0, -3)
    }
}

console.log("\nExercise 3 output given 'JavaScript': \n" + moveLastThreeToFront("JavaScript")); // Output: "iptJavaScr"


// Exercise 4: Write a JavaScript program to find the types of a given angle.

function angleType(angle) {
    if (angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}

console.log("\nExercise 4 outputs given 45, 90, 135, and 180: ");
console.log(angleType(45));  // Output: Acute angle
console.log(angleType(90));  // Output: Right angle
console.log(angleType(135)); // Output: Obtuse angle
console.log(angleType(180)); // Output: Straight angle


// Exercise 5: Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers 
// (numbers that follow each other in order.) of a given array of positive integers.

function maxSumOfConsecutive(arr, k) {
    if (k > arr.length) {
        return "Invalid input; k cannot be greater than the length of the array."
    }

    let max_sum = 0;
    for (let i = 0; i <= arr.length - k; i++) {
        let curr_sum = 0;
        for (let j = 0; j < k; j++) {
            curr_sum += arr[i + j];
        }
        if (curr_sum > max_sum) {
            max_sum = curr_sum;
        }
    }
    return max_sum;
}

console.log("\nExercise 5 output given [1, 7, 31, 4, 11, 20] and k = 3:");
console.log(maxSumOfConsecutive([1, 7, 31, 4, 11, 20], 3)); // Output: 46