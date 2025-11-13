const form=document.getElementsByTagName("form")[0];
console.log(form);

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseFloat(document.getElementById("height").value)
    const weight=parseFloat(document.getElementById("weight").value)
    const results=document.getElementById("results")

    if(height === '' || height<=0 || isNaN(height)){
        results.innerHTML=`Please give a valid Height`
    }
    else if(weight === '' || weight<=0 || isNaN(weight)){
        results.innerHTML=`Please give a valid Weight`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        let bmiCategory

        if(bmi <18.6){
            bmiCategory="Under Weight"
        }
        else if(bmi>=18.6 && bmi<24.9){
            bmiCategory="Normal Range"
        }
        else{
            bmiCategory="Over Weight"
        }

        results.innerHTML=`
        <span>BMI Is : ${bmi}
        <br>
        <p>You are ${bmiCategory}</p>
        </span>
        `
    }
})