import React from 'react';
import '../App.css';

export default class Main extends React.Component {
    render() {
        function handleClick(e) {
            window.location.href = "https://discord.com/api/oauth2/authorize?client_id=962607441382625360&redirect_uri=http%3A%2F%2Fnetea-chronica.github.io%2Fgetuser&response_type=code&scope=identify"
        }
        return (
            <div className="main">
                <h2>Chronica 메인 페이지</h2>
                <button onClick={handleClick}>
                    디스코드 로그인
                </button>
                <button onClick={() => window.open('https://discord.gg/VAfjrWUcZG', '_blank')}>
                    서버 방문하기
                </button>
            </div>
        );
    }
}