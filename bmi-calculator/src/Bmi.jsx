import React, { useState } from "react";
import style from "./style/styles";

function BMICalculator(){
    const [weight, setWeight] = useState("");
    const [ height, setHeight] = useState("");
    const [bmi,setBmi] = useState(null);
    const[message,setMessage] = useState("");

    const calculateBMI = () =>{
        if(!weight || !height) {
            alert("Please enter your both height and weight");
            return;
        }
        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);

        if (bmiValue < 18.5){
            setMessage("Underweight");

        }else if (bmiValue >= 18.5 && bmiValue < 24.9){
            setMessage("Normal Weight");
        }
        else if (bmiValue >= 25 && bmiValue < 29.9){
            setMessage("Overweight")

        }
        else {
            setMessage("Person is obese...");
        }

    };
    
return (
    <div style = {style.container}>
        <h1> BMI Calculator </h1>

        <input type="number"
            placeholder = "Enter your weight (kg)"
            value = {weight}
            onChange = {(e) => setWeight(e.target.value)}
            style = {style.input}
        />

        <br />
        <input 
        type = "number"
        placeholder = "Enter your height (cm)"
        value = {height}
        onChange = {(e) => setHeight(e.target.value)}
        style = {style.input}
        />
        <button onClick = {calculateBMI} style={style.button} >Calculate BMI</button>

        {bmi && (
            <div style = {{marginTop :"20px"}}>
                <h2>Your BMI is : {bmi}</h2>
                <h3>{message}</h3>
            </div>    
        )}
    </div>
)}

export default BMICalculator;