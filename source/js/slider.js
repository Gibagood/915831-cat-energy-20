var beforeImg = document.querySelector('.example__before-img');
var afterImg = document.querySelector('.example__after-img');
var scale = document.querySelector('.example__scale-input');
var scaleValue = document.querySelector('.example__scale-value');
/* 
if (beforeImg && scale) {
    beforeImg.style.width = '75%';
    scale.style.width = '65%'
}
 */
scale.oninput = function () {
    scaleValue.textContent = scale.value;
    scale.style.width = scale.value + '%';
    beforeImg.style.width = scale.value + '%';
    afterImg.style.width = scale.value  + '%';
    afterImg.style.left = (scale.value - 20) + '%';
};