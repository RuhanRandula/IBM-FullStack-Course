// function compute()
// {
//     p = document.getElementById("principal").value;
//     var principal = parseInt(document.getElementById("principal").value);

//     var rate =  parseFloat(document.getElementById("rate").value);

//     var years = parseInt(document.getElementById("years").value);

//     var rate_val = document.getElementById("rate_val").innerText;

//     var interest = p * years * rate / 100;
//     var total_amount = principal + interest;

//     document.getElementById("interest").innerText = interest;
//     document.getElementById("total_amount").innerText = total_amount;

//     var year = new Date().getFullYear() + parseInt(years);
    
// }
    
// if (principal < 0 ){
//     alert("Enter a positive number");
//     document.getElementById("principal").focus();
// }
// function updateRate(){
//     var rateval = document.getElementById("rate").value;
//     document.getElementById("rate_val").innerText = rateval;
// }
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");

    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = `If you deposit $<mark>${principal}</mark>,<br> at an interest rate of <mark>${rate}%</mark><br> You will receive an amount of $<mark>${amount}</mark>,<br> in the year <mark>${year}</mark><br>`;
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}