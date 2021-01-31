import React from 'react';
import { Lottie } from '@crello/react-lottie';

const QuizResultInfo = ({animation,text,width = 80, height= 80}) => {
    return (
        <div style={{display: 'flex'}}>
            <Lottie
                width="80px"
                height="80px"
                className="lottie-container basic"
                config={{ animationData: animation, loop: false, autoplay: true }}
            /> 
        <p style={{marginTop: '2.1rem', maginLeft: '-1rem'}}> 
            {text}
        </p>
        </div>
    )
}

export default QuizResultInfo;