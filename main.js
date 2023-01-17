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
        title:title.value,
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
    clearData()
    showData()
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

function showData(){
    let table = "";
    for(let i = 0 ; i < dataPro.length; i++)
    {
        table += `
    <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button>update</button></td>
        <td><button onclick ='deleteData( ${i} )' id ='delete'>delete</button></td>
    </tr>
    `
    }   
    document.getElementById('tbody').innerHTML = table ;
}
showData()
function deleteData(i){
dataPro.splice(i,1);
localStorage.product = JSON.stringify(dataPro);
showData()
}