const amountDiv = document.querySelector('.amount-div')
const numberTicketsBasic = amountDiv.querySelector('.number-basic');
const numberTicketsSenior = amountDiv.querySelector('.number-senior');
const count = amountDiv.querySelector('.count');
const permanentExhibition = document.querySelector('.permanent');
const temporaryExhibition = document.querySelector('.temporary');
const combinedAdmission = document.querySelector('.combined');

const permanentPrice = 20;
const temporaryPrice = 25;
const combinedPrice = 40;
let price;
let resultSum = price * (numberTicketsBasic.value + numberTicketsSenior.value / 2);   


permanentExhibition.onclick = result;
temporaryExhibition.onclick = result;
combinedAdmission.onclick = result;
amountDiv.onclick = result;




    
function result(){
    switch(true){
        case permanentExhibition.checked:
            price = permanentPrice;
            break;
        case temporaryExhibition.checked:
            price = temporaryPrice;
            break;
        case combinedAdmission.checked:
            price = combinedPrice;
            break;
    }
    
    resultSum = price * (Number(numberTicketsBasic.value) + Number(numberTicketsSenior.value) / 2);   
    count.innerText = String(resultSum);

}
result()
