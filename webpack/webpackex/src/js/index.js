import {changeColor, btn_black, btn_blue} from './dom-loader';
import '../css/main.css';
btn_black.addEventListener('click', function (evt) {
  toggleblack();
});
btn_blue.addEventListener('click', function (evt) {
  toggleblue();
});

function toggleblue() {
  changeColor.classList.add('blue');
  changeColor.classList.remove('black');
}
function toggleblack() {
  changeColor.classList.add('black');
  changeColor.classList.remove('blue');
}
