//Lab 1

console.log("=== Exercise 1: Capitalize First Letter of Each Word ===");

function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}


console.log(capitalizeWords("the quick brown fox"));
console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("javascript is awesome")); 



function max(a, b, c) {
    return Math.max(a, b, c);
}


console.log(max(1, 0, 1));
console.log(max(0, -10, -20)); 
console.log(max(1000, 510, 440)); 


function right(str) {
    if (str.length < 3) {
        return str;
    }
    const lastThree = str.slice(-3);
    const remaining = str.slice(0, -3);
    return lastThree + remaining;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi")); 


function angle_Type(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid angle";
    } else if (angle === 0) {
        return "Zero angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}


console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145)); 
console.log(angle_Type(180)); 
console.log(angle_Type(0));
console.log(angle_Type(200));
