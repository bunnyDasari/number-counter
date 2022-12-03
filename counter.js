let counterElemet = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElemet.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElemet.textContent = updatedCounterValue;
    
    if (updatedCounterValue > 0){
        counterElemet.style.color = "green";
    }
    else if (updatedCounterValue < 0){
        counterElemet.style.color = "red";
    }
    else{
        counterElemet.style.color = "black";
    }

}

function onDecrement() {
    let previousCounterValue = counterElemet.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElemet.textContent = updatedCounterValue;

    if (updatedCounterValue > 0){
        counterElemet.style.color = "green";
    }
    else if (updatedCounterValue < 0){
        counterElemet.style.color = "red";
    }
    else{
        counterElemet.style.color = "black";
    }
}



function onRset() {
    let updatedCounterValue = 0
    counterElemet.textContent = updatedCounterValue
    counterElemet.style.color = "black"
}