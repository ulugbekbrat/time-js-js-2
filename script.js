let soat = 0;
let min = 0;
let secund = 0;

let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let sec = document.querySelector('.secund');

setInterval(() => {
    secund++;
    sec.textContent = secund; 

    if (secund > 59) {
        secund = 0;
        min++;
        minute.textContent = min; 
    }
            
    if (min > 59) {
        min = 0;
        soat++;
        hour.textContent = soat; 
    }

    if (soat > 11) {
        soat = 0;
    }
}, 1000);
