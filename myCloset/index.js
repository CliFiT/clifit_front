// 로컬 저장소에서 myClose 배열을 가져오거나 새 배열을 생성합니다.
let myClose = JSON.parse(localStorage.getItem('myClose')) || [
    '../close/coat/coat_1.jpeg',
    '../close/coat/coat_2.jpeg',
    '../close/coat/coat_3.jpeg',
    '../close/coat/coat_4.jpeg',
    '../close/coat/coat_5.jpeg',
    '../close/shirt/shirt_5.jpeg',
    '../close/shirt/shirt_3.jpeg',
    '../close/shirt/shirt_2.webp',
    '../close/shirt/shirt_7.webp',
    '../close/shirt/shirt_4.png',
    '../close/pants/pants_1.jpeg',
    '../close/pants/pants_2.jpeg',
    '../close/pants/pants_3.jpeg',
    '../close/pants/pants_4.jpeg',
    '../close/pants/pants_5.jpeg',
    '../close/shoes/shoes_1.jpeg',
    '../close/shoes/shoes_2.jpeg',
    '../close/shoes/shoes_4.jpeg',
    '../close/shoes/shoes_3.jpeg',
    '../close/shoes/shoes_5.jpeg'
];

// 클로젯 HTML 업데이트
const $my_closet = document.getElementById("closet");

// 기존 아이템을 기준으로 HTML 생성
function updateClosetHtml() {
    const closet_html = myClose.map(i => `
        <li class="closet_item"><img src="${i}" alt=""></li>
    `).join("");
    
    $my_closet.innerHTML += closet_html;
}

// 초기 클로젯 HTML 설정
updateClosetHtml();

// 추가 버튼 클릭 시 모달 표시
const $addClose = document.getElementById("add_close");
const $modal = document.getElementsByClassName("modal")[0];
const $modalButton = document.getElementsByClassName("close_click_button")[0];

document.querySelector('body').addEventListener('click', (e) => {
    if ($addClose.contains(e.target)) {
        $modal.id = 'active';
    } else if (!$modalButton.contains(e.target)) {
        $modal.removeAttribute('id');
    }
});

// 파일 업로드 및 처리
const $photo = document.getElementById("get_photo");
$photo.addEventListener("click", () => {
    document.getElementById('fileInput').click();

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const fileContent = event.target.result;

                // 배열에 새로운 파일 추가
                myClose.push(fileContent);
                localStorage.setItem('myClose', JSON.stringify(myClose));

                // 클로젯 HTML 업데이트
                updateClosetHtml();

                // 페이지 이동
                window.location.href = './close_info.html';
            };

            reader.onerror = function(event) {
                console.error('파일을 읽는 중 오류 발생:', event);
            };

            reader.readAsDataURL(file); // 파일을 base64 데이터 URL로 읽어옵니다.
        } else {
            alert('파일을 선택해주세요.');
        }
    });
});
