window.onload = () => {
    document.querySelector(".calculate").onclick = 
    calculateTip;
}

var tipBtns = document.querySelectorAll(".tip")

tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', reset)

function handleClick(event){

    tipBtns.forEach(btn => {
        //clear active state
        btn.classList.remove('btn-active');

        //set active state 
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML)/100;
        }
    });

}

function calculateTip() {
    
    let amount = document.querySelector("#billamt").value;
    let persons = document.querySelector("#peopleamt").value;


    if (amount === ""){
        alert("Please enter valid values");
        return;
    }
    if (persons === "0"){
        document.querySelector("#error").style.display = "block"
    }else {
        document.querySelector("#error").style.display = "none"
    }



    let tipAmount = (amount * tipValue) / persons;
    let total = (amount - (amount * tipValue)) / persons;
    total = total.toFixed(2);
    tipAmount = tipAmount.toFixed(2);
    
    document.querySelector("#tipAmount").innerHTML = tipAmount;
    document.querySelector("#total-amount").innerHTML = total;
}


function reset() {
    let amountReset = document.querySelector("#billamt");
    let personsReset = document.querySelector("#peopleamt");
    let tipReset = document.querySelector("#tipAmount")
    let totalReset = document.querySelector("#total-amount");

    amountReset.value = "0";
    personsReset.value = "1"
    tipReset.innerHTML = "0.00";
    totalReset.innerHTML = "0.00"
}

