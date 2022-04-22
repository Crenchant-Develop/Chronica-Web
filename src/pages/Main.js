import React, { useEffect, useState } from 'react';
import cookies from 'react-cookies';

//defined components
import { GetUserName } from '../components/GetUser';

//코드 이해를 돕기위해 모듈화 안했음. 곧 모듈화 예정
//쿠키저장
function setCookie(key, value) {
  var expires = new Date;
  expires.setFullYear(expires.getFullYear() + 10);
  cookies.save(key, value, {
    path: '/', // 쿠키 값을 저장하는 서버 경로
    expires, // 유효 시간
    //secure: true,
    // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키 저장
    //httpOnly: true
    // document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션 
  })
}

//쿠키가져오기
function getCookie(cookieName) {
  cookies.load(cookieName);
  return;
}

//메인페이지
function Main() {
  let [userName, setUserName] = useState(undefined);

  const onUserNamer = () => {
    (async () => {    //코드가 두번 실행되는 버그가 있음 원인분석이 필요함
      setUserName(await GetUserName());
      setCookie('userName', userName);
    })();
  };

  useEffect(onUserNamer, [onUserNamer]);

  return (
    <article>
      <div className='context'>
        {userName ? userName : "모험가"}님! 네티아 세계에서 무엇을 하고 싶으세요?
      </div>
    </article>
  );
};

export default Main;