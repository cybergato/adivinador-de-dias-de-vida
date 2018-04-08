function daysCalculator(year) {
    d=new Date();
    currentYear=d.getFullYear();
    age=currentYear-year;
    days=age*365;
    return days;
}

function yearCalculatorController(){
    txtYear=document.getElementById("txtYear");
    year=txtYear.value;
    days=daysCalculator(year);
    //alert(`tu tienes ${days} días`);
    lblAnswer=document.getElementById("lblAnswer")
    lblAnswer.innerText=`tu tienes ${days} días`;
}
