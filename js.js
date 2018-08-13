var arrayOfNames = ["John","Jacob","Jingle","Heimer","Scdmet"];

var stringOfArray = "";
for(var i = 0; i < arrayOfNames.length; i++)
    {
        stringOfArray += arrayOfNames[i] + ", ";
    }

document.getElementById("arrayNames").textContent= stringOfArray;

var arrayOfNumbers = [1,2,3,4,5];
var arrayOfNumbers2 = [6,7,8,9,10];

var numberString = "";
var numberString2 = "";


for (var x = 0; x <arrayOfNumbers.length; x++)
    {
        numberString+=arrayOfNumbers[x]+ ", ";
    }


for (var q = 0; q <arrayOfNumbers2.length; q++)
    {
        numberString2+=arrayOfNumbers2[q]+ ", ";
    }

document.getElementById("secondArray").textContent= numberString;

document.getElementById("secondArray2").textContent= numberString2;

arrayOfNumbers.pop();
arrayOfNumbers.pop();
arrayOfNumbers2.pop();
arrayOfNumbers2.pop();

var numberString3 = "";
var numberString4 = "";


for (var w = 0; w <arrayOfNumbers.length; w++)
    {
        numberString3+=arrayOfNumbers[w]+ ", ";
    }


for (var z = 0; z <arrayOfNumbers2.length; z++)
    {
        numberString4 += arrayOfNumbers2[z] + ", ";
    }

document.getElementById("popHeader").textContent= numberString3+numberString4;

// This is above and beyond. From Kenn.