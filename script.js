function calculateAverage() {
    var numberInput = document.getElementById("numberInput").value;
    var numbersArray = numberInput.split(",").map(Number);
    var sum = 0;
    for (var i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    var average = sum / numbersArray.length;
    document.getElementById("averageOut").innerHTML = "Průměr je: " + average;
}

function findMinMax() {
    var numberInput = document.getElementById("numberInput").value;
    var numbersArray = numberInput.split(",").map(Number);
    var min = Math.min.apply(null, numbersArray);
    var max = Math.max.apply(null, numbersArray);
    document.getElementById("minmaxOut").innerHTML = "Nejmenší číslo  je: " + min + "<br> Nejvyšší číslo je: " + max;
}

function convertToUpperCase() {
    var textInput = document.getElementById("textInput").value;
    var upperCaseText = textInput.toUpperCase();
    document.getElementById("convertOut").innerHTML = "Text velkými písmeny: " + upperCaseText;
}

function convertToLowerCase() {
    var textInput = document.getElementById("textInput").value;
    var lowerCaseText = textInput.toLowerCase();
    document.getElementById("convertOut").innerHTML = "Text malými písmeny: " + lowerCaseText;
}

function combineArrays() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var array1 = input1.split(",");
    var array2 = input2.split(",");
    var combinedArray = array1.concat(array2);
    document.getElementById("combineOut").innerHTML = "Spojeno: " + combinedArray;
}

function displayAnimalCount() {
    var animals = {
        "Velbloud": 2,
        "Ryba": 5,
        "Pták": 1,
        "Krtek": 8
    };
    var result = "Seznam zvířat:<br>";
    for (var animal in animals) {
        result += animal + ": " + animals[animal] + "<br>";
    }
    document.getElementById("displayOut").innerHTML = result;
}

function checkElement() {
    var elementToCheck = document.getElementById("elementInput").value;

    var set = new Set();
    set.add("HESLO");
    set.add("jmeno");
    set.add("pes");

    if (set.has(elementToCheck)) {
        document.getElementById("checkOut").innerHTML = "Prvek " + elementToCheck + " zde existuje";
    } else {
        document.getElementById("checkOut").innerHTML = "Prvek " + elementToCheck + " zde neexistuje";
    }
}