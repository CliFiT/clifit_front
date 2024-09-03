//옷 값 넣을 베열
let close = ['../close/coat/coat_1.jpeg',
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
'../close/shoes/shoes_5.jpeg'];

const $my_closet = document.getElementById("closet");

const closet_html = close.map( i =>{
    return `
        <li class="closet_item"><img src="${i}" alt="" ></li>
    `;
}).join("");

$my_closet.innerHTML += closet_html;



// 추가 버튼 클릭했을때
const $addClose = document.getElementById("add_close");
const $modal = document.getElementsByClassName("modal")[0];
const $modalButton = document.getElementsByClassName("close_click_button")[0];


document.querySelector('body').addEventListener('click', (e) => {
    if($addClose.contains(e.target)){
        $modal.id = 'active'; 

        const $photo = document.getElementById("get_photo");
        $photo.addEventListener("click", (p) => {

            document.getElementById('fileInput').click();

            document.getElementById('fileInput').addEventListener('change', function(event) {
                const file = event.target.files[0];
            
                if (file) {
                    const reader = new FileReader();
            
                    reader.onload = function(event) {
                        const fileContent = event.target.result;
                        console.log('파일 내용:', fileContent);
                        window.location.href = './close_info.html';
                        // 여기에서 fileContent 변수를 사용하여 파일 데이터를 처리할 수 있습니다.
                    };
            
                    reader.onerror = function(event) {
                        console.error('파일을 읽는 중 오류 발생:', event);
                    };
            
                    reader.readAsText(file); // 파일을 텍스트로 읽어옵니다.
                    // reader.readAsDataURL(file); // 파일을 base64 데이터 URL로 읽어옵니다.
                    // reader.readAsArrayBuffer(file); // 파일을 ArrayBuffer로 읽어옵니다.
                } else {
                    alert('파일을 선택해주세요.');
                }
            });
            
        })
    }
    else if (!$modalButton.contains(e.target)) {
        $modal.removeAttribute('id');
    }
});
