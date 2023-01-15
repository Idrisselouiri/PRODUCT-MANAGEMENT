let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let create = document.getElementById('create')


let dataPro;
if(localStorage.product != null)
{
    dataPro =JSON.parse(localStorage.product) 
}else{
     dataPro = []
}
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
create.onclick = function(){
    let newPro = {       
        price:price.value,
        taxes:taxes.value,
        ads: ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    dataPro.push(newPro)
    localStorage.setItem("product" ,JSON.stringify( dataPro) )
    console.log(dataPro)
    clearData()
}
function clearData(){
        title.value = '' ;
        price.value = '';
        taxes.value = '';
        ads.value = '';
        discount.value = '';
        total.innerHTML = '';
        count.value = '';
        category.value = '';
}