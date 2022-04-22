import cookies from 'react-cookies';

//코드 이해를 돕기위해 모듈화 안했음. 곧 모듈화 예정
//쿠키저장
export function setCookie(key, value) {
  var expires = new Date;
  expires.setFullYear(expires.getFullYear() + 10);
  cookies.save(key, value, {
    path: '/',
    expires, // 유효 시간
    //secure: true,
    // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키 저장
    //httpOnly: true
    // document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션 
  });
}
//쿠키가져오기
export function getCookie(cookieName) {
  return cookies.load(cookieName);
}
