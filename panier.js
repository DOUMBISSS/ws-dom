let btnPlus = document.querySelectorAll('.plus');
let btnMinus = document.querySelectorAll('.minus');

for (let i = 0; i < btnPlus.length; i++){
    btnPlus[i].addEventListener('click',increaseQuantity);
}

function increaseQuantity(){
    //document.querySelector('.qty').value = parseInt(document.querySelector('qty').value) + 1;
    let qty = this.previousElementSibling;
    let price = this.parentElement.nextElementSibling;
    qty.value = parseInt(qty.value) + 1;
    // document.querySelector('.subtotal').innerText = parseInt(price.innerText)*qty.value;
    this.parentElement.nextElementSibling.nextElementSibling.innerText = (parseInt(price.innerText) * qty.value) + " F CFA";
  
}

for (let i = 0; i < btnMinus.length; i++){
    btnMinus[i].addEventListener('click',decreaseQuantity);
}
function decreaseQuantity(){
    let qty = this.nextElementSibling;
    let price = this.parentElement.nextElementSibling;
    if( qty.value > 0 ){
        qty.value = parseInt(qty.value)- 1;
        this.parentElement.nextElementSibling.nextElementSibling.innerText = (parseInt(price.innerText)*qty.value) + " F CFA";
        } 
}  


