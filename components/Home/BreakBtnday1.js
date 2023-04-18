import React from 'react';
import { Container } from 'react-bootstrap';

const BreakBtnday1 = () => {
    const btns = [
        {
            name:"10.00 AM Coffee Break",
            classname:"break break1"
        },
        {
            name:"12.00 PM Lunch Break",
            classname:"break break2"
        },
        {
            name:"02.40 PM Tea Break",
            classname:"break break3"
        },
    ]
    return (
        <Container>
        <div className='section_gap d-flex flex-column flex-md-row justify-content-center pt-5'>
        {
            btns.map((btn,index)=><div key={index}>
                <div className={btn.classname}>{btn.name}</div>
            </div>)
        }
    </div>
    </Container>
    );
};

export default BreakBtnday1;