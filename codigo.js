var container1 = document.querySelector('.msg1');

var btn_1 = document.querySelector('.btn-plus1');


btn_1.addEventListener('click', function() {
    var computedStyle = getComputedStyle(container1);

    if (computedStyle.display === 'block') {
        container1.style.display = 'none';
        btn_1.textContent = '+';
       
    }else{
        container1.style.display = 'block';
        btn_1.textContent = '-';
        btn_1.style.color = "white";
    }
});


var btn_2 = document.querySelector('.btn-plus2');
var container2 = document.querySelector('.msg2');

btn_2.addEventListener('click', function() {
    var computedStyle = getComputedStyle(container2);
    if (computedStyle.display === 'block') {
        container2.style.display = 'none';
        btn_2.textContent = '+';
    } else {
        container2.style.display = 'block';
        btn_2.textContent = '-';
        btn_2.style.color = "white";
    }
});

var btn_3 = document.querySelector('.btn-plus3');
var container3 = document.querySelector('.msg3');

btn_3.addEventListener('click', function() {
    var computedStyle = getComputedStyle(container3);
    if (computedStyle.display === 'block') {
        container3.style.display = 'none';
        btn_3.textContent = '+';
    } else {
        container3.style.display = 'block';
        btn_3.textContent = '-';
        btn_3.style.color = "white";
    }
});

var btn_4 = document.querySelector('.btn-plus4');
var container4 = document.querySelector('.msg4');

btn_4.addEventListener('click', function() {
    var computedStyle = getComputedStyle(container4);
    if (computedStyle.display === 'block') {
        container4.style.display = 'none';
        btn_4.textContent = '+';
    } else {
        container4.style.display = 'block';
        btn_4.textContent = '-';
        btn_4.style.color = "white";
    }
});