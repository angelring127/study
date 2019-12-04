import React, { useState } from 'react';

const Counter = () => {
    // 배열 비구조화 할당 문법
    const [value, setValue] = useState(0);
    // useState 
    // parameter : 상태의 기본값
    // return : array => [ 원소 상태 값, 상태를 설정하는 함수]
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};

export default Counter;