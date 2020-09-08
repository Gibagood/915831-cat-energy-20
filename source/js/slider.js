var beforeImg = document.querySelector('.example__before-img');
var scale = document.querySelector('.example__scale-input');
var scale-value = document.querySelector('.example__scale-value');
/* 
if (beforeImg && scale) {
    beforeImg.style.width = '75%';
    scale.style.width = '65%'
}
 */
scale.oninput = function () {
    scale-value.textContent = scale.value;
    beforeImg.style.width = scale.value + '%';
};