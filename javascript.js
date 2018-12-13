function checkinputs()
{

inp1 = parseInt(document.getElementById.value(one));
inp2 = parseInt(document.getElementById.value(one));
inp3 = parseInt(document.getElementById.value(one));

sideA = (inp1 + inp2);
sideB = (inp1 + inp3);
sideC = (inp2 + inp3);
    if (sideA == sideB && sideB == sideC) {
    alert("Equalateral");
    }
   else if (sideA == sideB && sideB !=sideC) {
    alert("Isosceles");
    }
    
    else if (sideA != sideB  && sideC != sideA) {
    alert("Scalene!");
    }
    else{
        alert("none of it");
    }
}
    document.getElementById("demo").innerHTML =
    "Number of forms: " + document.forms.length;

