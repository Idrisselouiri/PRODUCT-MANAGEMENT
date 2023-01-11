let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')

function getTotal()
{
    if(price.value != '')
    {
        let result = (+price.value + +taxes.value + +ads.value) 
        - +discount.value; 
        total.innerHTML = result;
        total.style.background = "green"
    }else{
        total.style.background = "red"
        total.innerHTML = "";
    }
    
}