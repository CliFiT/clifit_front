const $move_back = document.getElementById("back");

$move_back.addEventListener("click", (i) => {
    window.location.href = './index.html';
});

const slider = document.getElementById("input_tmp");
const output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}