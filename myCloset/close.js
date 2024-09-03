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

//버튼 클릭시
const $kindBtn = document.querySelectorAll(".kind button");
const $seasonBtn = document.querySelectorAll(".season button");
const $styleBtn = document.querySelectorAll(".style button");
let kind ='', season ='',style ='';

$kindBtn.forEach((clickBtn) => {
    clickBtn.addEventListener("click", function(event) {
        if (!kind) {
            kind = clickBtn.textContent;
            console.log(kind);
            clickBtn.classList.add('active');
            // if (style) {
            //     $submitBtn.classList.add('active');
            // }
        }
    });
});
$seasonBtn.forEach((clickBtn) => {
    clickBtn.addEventListener("click", function(event) {
        if (!season) {
            season = clickBtn.textContent;
            console.log(season);
            clickBtn.classList.add('active');
            // if (style) {
            //     $submitBtn.classList.add('active');
            // }
        } 
    });
});
$styleBtn.forEach((clickBtn) => {
    clickBtn.addEventListener("click", function(event) {
        if (!style) {
            style = clickBtn.textContent;
            console.log(style);
            clickBtn.classList.add('active');
            // if (style) {
            //     $submitBtn.classList.add('active');
            // }
        } 
    });
});

document.getElementById('btn').addEventListener('click', (event) =>{
    event.preventDefault(); // 폼의 기본 동작(페이지 새로고침)을 막음

    window.location.href = '../myCloset/index.html';
});