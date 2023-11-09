var one=document.getElementById('one');
one.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left='0';
})
var two=document.getElementById("two");

two.addEventListener("click", function() {
    var body=document.querySelector('body');
    var toggle=document.getElementById('circle');
    body.classList.add('active1');
    body.classList.remove('active2');
    toggle.style.left='36%';
})

var three=document.getElementById('three');
three.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circle');
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.left='75%';
})

const Arrayofbuttons = document.querySelectorAll('.val')

for (let i = 0; i < Arrayofbuttons.length; i++) {
    Arrayofbuttons[i].addEventListener("click", function(){
        document.calc.text.value+=`${Arrayofbuttons[i].innerHTML}`;
    } )
}


function del(){
    var value=document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}

const dl = document.querySelector('.del');
dl.addEventListener("click", del);

const res = document.querySelector('.equal')
dl.addEventListener("click", function(){
    click=document.calc.text.value= eval(calc.text.value);
})