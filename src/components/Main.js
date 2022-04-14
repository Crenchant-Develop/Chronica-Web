import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css';

export default function Main() {
    return (
        <div className="main">
            <h2>NETEA</h2>
            <h5>네티아의 일대기를 만드는 것은 당신입니다.</h5>
            <Stack spacing={2} direction="row" className="context">
                <ThemeProvider theme={Theme}>
                    <ChangeButton />
                </ThemeProvider>
            </Stack>
        </div>
    );
}

function handleClick(url, open = '_self') {
    window.open(url, open);
}

function ChangeButton() {
    const groupUrl = 'https://discord.gg/VAfjrWUcZG';
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=962607441382625360&redirect_uri=http%3A%2F%2Fchronica-web.vercel.app%2Fgetuser&response_type=code&scope=identify`;
    //const authUrl = 'https://discord.com/api/oauth2/authorize?client_id=962607441382625360&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Fgetuser&response_type=code&scope=identify&prompt=none';
    const [useButtonName, setButtonName] = useState(null);
    const [useUrl, setUrl] = useState(null);
    const [useOpen, setOpen] = useState(null);

    useEffect(()=>{
        let isLogined = sessionStorage.getItem('userName')? true : false;

        if (isLogined) {
            setButtonName('서버 방문하기');
            setUrl(groupUrl); //네티아 TRPG 방문페이지
            setOpen('_blank');
        }
        else {
            setButtonName('디스코드 로그인');
            setUrl(authUrl); //로그인 승인 요청
            setOpen('_self');
        }
    }, []);

    //handleClick
    return (
        <Button variant="contained" size="large" onClick={e => handleClick(useUrl, useOpen)}>
            {useButtonName}
        </Button>
    );
}