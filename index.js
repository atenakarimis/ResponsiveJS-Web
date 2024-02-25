let search= document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar= document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('remove');
}

////////ajax, title refresh

gsap.from('.title', {opacity: 0, duration: 1, delay: 1.1, y: 30})
gsap.from('.line', {opacity: 0, duration: 1, delay: 1.3, y: 30})
gsap.from('.description', {opacity: 0, duration: 1, delay: 1.5  , y: 30})
gsap.from('.collect', {opacity: 0, duration: 1, delay: 2  , y: 30})



//////shopping cart
const product = [
    {
        id: 0,
        image: 'images/img2.jpg',
        title: 'گلدان بیسیک',
        price: 3000000,
    },
    {
        id: 1,
        image: 'images/sofa.jpg',
        title: 'مبلمان روشنا',
        price: 45000000,
    },
    {
        id: 2,
        image: 'images/green22.jpg',
        title: '  صندلی  سرین',
        price: 10000000,
    },
    {
        id: 3,
        image: 'images/sofa3.jpg',
        title: 'ناهاخوری گرین',
        price: 3000000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.000</h2>`+
        "<button onclick='addtocart("+(i++)+")'>افزودن به سبد خرید</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

/////// form validation
var nameError = document.getElementById("name-error")
var phoneError = document.getElementById("phone-error")
var emailError = document.getElementById("email-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")

function validateName() {
    var name = document.getElementById('contact-name').value

    if(name.length == 0){
        nameError.innerHTML = 'وارد کردن این فیلد الزامی است';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){ ///ابتدا حرف + یک فاصله + مجددا حرف وارد میشود
        nameError.innerHTML = 'نام خود را کامل وارد کنید'
        return false; ///ارور نمایش داده شده و فالس ریترن میشود
    }
    ///اگر اروری رخ ندهد
    nameError.innerHTML = '<i class="bx bxs-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value

    if (phone.length == 0) {
        phoneError.innerHTML = 'شماره تلفن خود را کامل وارد کنید'
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'لطفا تا 11 رقم وارد کنید'
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML ='فرمت وارد شده صحیح نمیباشد'
        return false;
    }
    phoneError.innerHTML = '<i class="bx bxs-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email= document.getElementById('contact-email').value

    if(email.length ==0){
        emailError.innerHTML = 'وارد کردن ایمیل الزامی است'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ //حروف + اندرلاین ی دات+ دش و حرف+ @ و سپس حرف از دو تا چهارحرف
        emailError.innerHTML = 'ایمیل خود را کامل وارد کنید'
        return false;
    }
    emailError.innerHTML = '<i class="bx bxs-check-circle"></i>';
    return true; 
}

