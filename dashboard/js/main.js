let icon = document.querySelector('#icon');
icon.addEventListener('click', open);
function open(){
    let menu = document.querySelector('.menu')
    menu.classList.toggle('active')
};
let consulta = document.querySelector('#consulta');
consulta.addEventListener('click',sub);
function sub(){
    let ul = document.querySelector('.sub-consulta')
    ul.classList.toggle('open-sub')
};
let ensino= document.querySelector('#ensino');
ensino.addEventListener('click',abrir);
function abrir(){
    let list = document.querySelector('.ensino-teste')
    list.classList.toggle('open-sub-ensino')
};

let solic= document.querySelector('#solic');
solic.addEventListener('click',a);
function a(){
    let solicitac = document.querySelector('.solicitac')
    solicitac.classList.toggle('open-solicitac')
};
let conta= document.querySelector('#conta');
conta.addEventListener('click', b);
function b(){
    let account = document.querySelector('.account')
    account.classList.toggle('open-account')
};

