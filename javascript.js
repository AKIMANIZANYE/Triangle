function checkinputs()
{
/* Var = parseInt(document.Name_Of_Element_Form.Field_Name(Input).value); */
/* Input Fields */
inp1 = parseInt(document.Triangle_Inputs.input1.value);
inp2 = parseInt(document.Triangle_Inputs.input2.value);
inp3 = parseInt(document.Triangle_Inputs.input3.value);
/* Side options */
sideA = (inp1 + inp2);
sideB = (inp1 + inp3);
sideC = (inp2 + inp3);
    if (sideA == sideB && sideB == sideC) {
    alert("Equalateral");
    }
    if (sideA == sideB && != sideC) {
    alert("Isosceles");
    }
    if (sideA != sideB == sideC) {
    alert("Isosceles");
    }
    if (sideA != sideB != sideC != sideA) {
    alert("Scalene!");
    }
}