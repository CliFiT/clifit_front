// 더미데이터 만들깅
const codi = {
    coat : "../close/coat/coat_1.jpeg",
    shirt : "../close/shirt/shirt_7.webp",
    pants : '../close/pants/pants_1.jpeg',
    shoes : "./asset/codi/shoes.jpeg"
}

const codiHtml = `
    <ul>
        <li><img src="${codi.coat}" alt="외투" /></li>
        <li><img src="${codi.shirt}" alt="상의" /></li>
        <li><img src="${codi.pants}" alt="하의" /></li>
        <li><img src="${codi.shoes}" alt="신발" /></li>
    </ul> 
`;

const info = [
    {
        class :"info_codi",
        id : "codi",
        name : "",
        info : "가을 날씨가 29도로 약간 더운 날이라면, 시원하면서도 깔끔한 흰색 반팔 티셔츠를 선택해보세요. 이 티셔츠는 가볍게 입을 수 있으면서도 밝은 컬러가 가을 햇살과 잘 어울려 전체적으로 산뜻한 느낌을 줍니다. 여기에 세련된 검은색 슬랙스를 매치하면, 심플하면서도 고급스러운 분위기를 연출할 수 있습니다.<br> <br>만약 저녁이 되면서 날씨가 쌀쌀해지기 시작한다면, 부드럽고 따뜻한 회색 가디건을 걸쳐주는 것을 추천드립니다. 회색은 중립적인 색상으로, 흰색과 검은색 조합과 잘 어울리며, 가디건의 부드러운 질감이 전체적인 스타일에 따뜻한 느낌을 더해줍니다. 마지막으로 심플하면서도 세련된 검은색 스니커즈를 신어주면, 전체적으로 조화롭고 완성도 높은 가을 코디가 완성될 것입니다. 이 코디는 어디에서든 편안하면서도 스타일리시한 분위기를 연출할 수 있어, 일상에서부터 가벼운 외출까지 다양하게 활용할 수 있을 것입니다."

    },
    // {
    //     class :"reason",
    //     id : "reason",
    //     name : "",
    //     info : ""
    // }
]

const infoHtml =  info.map(infoItem => {
    return `
            <div class="${infoItem.class}">
                <span>${infoItem.name}</span>
                <div id="${infoItem.id}">${infoItem.info}</div>
            </div>
    `;
});

window.onload = function() {
    // 3초 후에 실행될 타이머 설정
    setTimeout(function() {
        // 애니메이션을 숨김
        document.querySelector('.typing-animation').style.display = 'none';

        document.querySelector(".codi").innerHTML = codiHtml;
        document.getElementsByClassName("info")[0].innerHTML = infoHtml.join("");
    }, 3000);
};

const $move_back = document.getElementById("back");

$move_back.addEventListener("click", (i) => {
    window.location.href = '../homePage/index.html';
});
