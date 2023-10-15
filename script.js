const calculateTemperature = ()=>{
    const inputTemp= document.getElementById(temperature).ariaValueMax;
    const tempSelected = document.getElementById(tempdifference);
    const valueTemp = tempdifference.options[tempSelected.selectedIndex].value;

    const celToFahr = (celsius) =>{
        let fah=((celsius*9/5)+32).toFixed(1);
        return fah;
    }

    const fahrToCel = (fahrenheit) =>{
        let cel=((fahrenheit-32)*9/5).toFixed(1);
        return cel;
    }
    if(valueTemp == 'celsius'){
        document.getElementById("result").innerHTML = celToFahr(inputTemp) + "&#176"; Fahrenheit;
    }
    else{
        document.getElementById("result").innerHTML = fahrToCel(inputTemp) + "&#176"; Celsius;
    }
}