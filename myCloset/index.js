//옷 값 넣을 베열
let close = [] 

// 추가 버튼 클릭했을때
const $addClose = document.getElementById("add_close");
const $modal = document.getElementsByClassName("modal")[0];
const $modalButton = document.getElementsByClassName("close_click_button")[0];

// $addClose.addEventListener("click", () => {
    
// });
document.querySelector('body').addEventListener('click', (e) => {
    if($addClose.contains(e.target)){
        $modal.id = 'active'; 

        const $photo = document.getElementById("get_photo");
        $photo.addEventListener("click", (p) => {
            window.location.href = './close_info.html';
        })
    }
    else if (!$modalButton.contains(e.target)) {
        $modal.removeAttribute('id');
    }
});