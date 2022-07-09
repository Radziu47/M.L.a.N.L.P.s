let hi = document.getElementById('hi');
let ho = document.getElementById('ho');
let hp = document.getElementById('hp');
let title1 = document.getElementById('title');
let tab = [];
function g() {
    let num = document.getElementById('num').value;
    let nym = num;

    while (num != 1) {
    if (num == 1){
       tab.push(1);
       num = 1;
    } else if(num%2 == 0){
        num = num/2;
        tab.push(num);
    }else{
        num = 3*mun +1
        tab.push(num);
    }


}
hi.innerHTML = nym;
ho.innerHTML = tab;
console.log(tab);
if (nym !=1) {
    let math = Math.max(...tab);
    hp.innerHTML = math;
}

tab = [];
}   