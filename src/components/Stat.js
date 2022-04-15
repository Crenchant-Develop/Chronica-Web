import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css';

var diceList = [];
// var userName = JSON.parse(sessionStorage.getItem('userName'));

export default class Stat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "주사위를 굴리십시오.\n결과값은 1부터 30까지입니다.",
        };
    }

    render() {
        return (
            <div className="main">
                <h2>스탯포인트 분배</h2>
                <h5>육면체 주사위를 1 ~ 5개 굴립니다.</h5>
                <div className="context">
                    <h4>{this.state.text}</h4>
                </div>
                <Stack spacing={2} direction="row" className="context">
                    <ThemeProvider theme={Theme}>
                        <Button variant="contained" size="large" onClick={this.diceEvent}>분배하기</Button>
                    </ThemeProvider>
                </Stack>
            </div>
        );
    }

    diceEvent = () => {

        var repeatRoll = Math.floor(Math.random() * 5) + 1;
        var prefix = "당신의 초기 스탯포인트는\n"

        for (var i = 0; i < repeatRoll; i++) {
            var dice = Math.floor(Math.random() * 6) + 1;
            diceList.push(dice);
        }

        if (diceList.length === 1) {
            var resultText = prefix + diceList.toString() + "입니다. 저런!";
            diceList = [];
        } else {
            resultText = prefix + diceList.join(" + ") + " = " + diceList.reduce((a, b) => (a + b)) + "입니다.";
            diceList = [];
        }

        this.setState({
            text: resultText,
        });
    };
}