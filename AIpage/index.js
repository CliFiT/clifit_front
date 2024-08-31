// 더미데이터 만들깅
const codi = {
    coat : "./asset/codi/coat.jpeg",
    shirt : "./asset/codi/shirt.jpeg",
    pants : "./asset/codi/pants.jpeg",
    shoes : "./asset/codi/shoes.jpeg"
}

/* <ul>
<li><img src="" alt="" /></li>
<li><img src="" alt="" /></li>
<li><img src="" alt="" /></li>
<li><img src="" alt="" /></li>
</ul> */

const codiHtml = `
    <ul>
        <li><img src="${codi.coat}" alt="외투" /></li>
        <li><img src="${codi.shirt}" alt="상의" /></li>
        <li><img src="${codi.pants}" alt="하의" /></li>
        <li><img src="${codi.shoes}" alt="신발" /></li>
    </ul> 
`;

document.querySelector(".codi").innerHTML = codiHtml;

const info = [
    {
        class :"info_codi",
        id : "codi",
        name : "코디설명",
        info : ""

    },
    {
        class :"reason",
        id : "reason",
        name : "추천이유",
        info : ""
    }
]

/* <div class="info_codi">
<h1>코디 설명</h1>
<div id="codi"></div>
</div>
<div class="reason">
<h1>추천 이유</h1>
<div id="reason"></div>
</div> */

const infoHtml =  info.map(infoItem => {
    return `
            <div class="${infoItem.class}">
                <span>${infoItem.name}</span>
                <div id="${infoItem.id}">${infoItem.info}</div>
            </div>
    `;
});
document.getElementsByClassName("info")[0].innerHTML = infoHtml.join("");
