document.getElementById('btn').addEventListener('click', (event) =>{
    event.preventDefault(); // 폼의 기본 동작(페이지 새로고침)을 막음

    // 이메일과 비밀번호를 변수에 저장
    const email = document.getElementById('user_id').value;
    const password = document.getElementById('user_pw').value;
    console.log(email);
    console.log(password);

    window.location.href = '../homePage/index.html';
});

