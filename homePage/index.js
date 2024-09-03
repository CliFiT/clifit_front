//wheder 더미 데이터
const weader = {
    img: './asset/weader/cloud.svg',
    weader: '흐림',
    high: '20℃',
    low: '15℃',
    story: '선선하고 일교차가 적은 날씨'
};
const weaderHtml = `
    <img src="${weader.img}" alt="아이콘">
    <div class="info">
        <div class="condition">
            <h2 class="weaderFD">${weader.weader}</h2>
            <div class="tem">
                <h4 class="high">${weader.high}</h4>
                <h4 class="low">${weader.low}</h4>
            </div>
        </div>
        <h3 class="story">${weader.story}</h3>
    </div>
`;
document.querySelector(".weader").innerHTML = weaderHtml;

//오늘의 옷추천
const todayCodi = {
    coat : '../close/coat/coat_1.jpeg',
    shirt : '../close/shirt/shirt_7.webp',
    pant : '../close/pants/pants_1.jpeg',
    shoes : '../close/shoes/shoes_3.jpeg',
};

const codiHtml = `
                <li><img src="${todayCodi.coat}" alt=""></li>
                <li><img src="${todayCodi.shirt}" alt=""></li>
                <li><img src="${todayCodi.pant}" alt=""></li>
                <li><img src="${todayCodi.shoes}" alt=""></li>
`;
document.getElementById("codi").innerHTML = codiHtml

//close 더미데이터
const close = [
    {
        fillDown  : "아우터",
        class: "coat",
        img_1 : '../close/coat/coat_1.jpeg',
        img_2 : '../close/coat/coat_2.jpeg',
        img_3 : '../close/coat/coat_3.jpeg',
        img_4 : '../close/coat/coat_4.jpeg',
        img_5 : '../close/coat/coat_5.jpeg',
    },
    {
        fillDown  : "상의",
        class: "up",
        img_1 : '../close/shirt/shirt_5.jpeg',
        img_2 : '../close/shirt/shirt_4.png',
        img_3 : '../close/shirt/shirt_3.jpeg',
        img_4 : '../close/shirt/shirt_2.webp',
        img_5 : '../close/shirt/shirt_1.jpeg',
    },
    {
        fillDown  : "하의",
        class: "down",
        img_1 : '../close/pants/pants_1.jpeg',
        img_2 : '../close/pants/pants_2.jpeg',
        img_3 : '../close/pants/pants_3.jpeg',
        img_4 : '../close/pants/pants_4.jpeg',
        img_5 : '../close/pants/pants_5.jpeg',
    },
    {
        fillDown  : "신발",
        class: "shoes",
        img_1 : '../close/shoes/shoes_1.jpeg',
        img_2 : '../close/shoes/shoes_2.jpeg',
        img_3 : '../close/shoes/shoes_4.jpeg',
        img_4 : '../close/shoes/shoes_3.jpeg',
        img_5 : '../close/shoes/shoes_5.jpeg',
    }
];
const closeHtml = close.map(closeItem => {
    return `
        <div class="${closeItem.class}">
            <p>${closeItem.fillDown}</p>
            <div class="${closeItem.class}Ul">
                <li><img src="${closeItem.img_1}" alt="" width></li>
                <li><img src="${closeItem.img_2}" alt=""></li>
                <li><img src="${closeItem.img_3}" alt=""></li>
                <li><img src="${closeItem.img_4}" alt=""></li>
                <li><img src="${closeItem.img_5}" alt=""></li>
            </div>
        </div>
        <hr>
    `;
}).join("");

// querySelector 또는 getElementsByClassName으로 요소를 선택
const $closeUl = document.getElementsByClassName("closeUl")[0];
$closeUl.innerHTML = closeHtml;

// 선택자 변수들 선언
const $clickLi = document.querySelectorAll(".coat li, .up li, .down li, .shoes li"); 
const $clickImg = document.querySelectorAll(".coatUl li img, .upUl li img, .downUl li img, .shoesUl li img");
const $clickPage = document.querySelector(".click");
const $situaBtn = document.querySelectorAll(".situation li");
const $styleBtn = document.querySelectorAll(".style li");
const $submitBtn = document.getElementById('submit');
const $clear = document.getElementById("clear");
const errorM = document.getElementById("error");

let situation = '';
let style = '';

// 이벤트 리스너 등록
$clickLi.forEach((clickItem) => {
    clickItem.addEventListener("click", (e) => {
        // 클릭 이벤트 시 'on' 클래스 토글
        $clear.classList.toggle('on');
        errorM.textContent = ""; // 에러 메시지 초기화

        // 클릭된 아이템에서 상황 버튼 리스너 추가
        $situaBtn.forEach((clickBtn) => {
            clickBtn.addEventListener("click", function(event) {
                if (!situation) {
                    situation = clickBtn.textContent;
                    console.log(situation);
                    clickBtn.classList.add('active');
                    if (style) {
                        $submitBtn.classList.add('active');
                    }
                } else {
                    errorM.textContent = "각각 하나씩 선택 가능합니다";
                }
            });
        });

        // 클릭된 아이템에서 스타일 버튼 리스너 추가
        $styleBtn.forEach((clickBtn) => {
            clickBtn.addEventListener("click", function(event) {
                if (!style) {
                    style = clickBtn.textContent;
                    console.log(style);
                    clickBtn.classList.add('active');
                    if (situation) {
                        $submitBtn.classList.add('active');
                    }
                } else {
                    errorM.textContent = "각각 하나씩 선택 가능합니다";
                }
            });
        });

        $submitBtn.addEventListener("click", (s) => {
            if(style && situation){
                window.location.href = '../AIpage/index.html'; 
            };
        });

        e.stopPropagation(); // 이벤트 버블링 중지
    });
});

// 페이지 전체 클릭 이벤트 리스너 등록
document.querySelector('body').addEventListener('click', (e) => {
    if (!$clickPage.contains(e.target)) {
        $clear.classList.remove('on');
        situation = "";
        style = "";
        $situaBtn.forEach(btn => btn.classList.remove('active'));
        $styleBtn.forEach(btn => btn.classList.remove('active'));
        $submitBtn.classList.remove('active');
        errorM.textContent = ""; // 에러 메시지 초기화
    }
});
//이상하다..
