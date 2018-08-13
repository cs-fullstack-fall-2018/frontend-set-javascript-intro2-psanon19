var arrayOfNubers = [30,37,38,45,47];

var stringOfArray = "";
for(var i = 0; i < arrayOfNubers.length; i++)
{
    stringOfArray += arrayOfNubers[i] + ", ";
}

document.getElementById("something").textContent= stringOfArray;