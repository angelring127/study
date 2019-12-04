import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect는 기본적으로 렌더링 되고난 직후마다 실행된다
    // 만약 컴포넌트가 언마운트되거나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면
    // useEffect 에서 뒷정리(cleanup)함수를 반환해주어야 한다.
    useEffect(() => {
        console.log('effect');
        console.log(name);
        console.log(nickname);
        return () => {
            console.log('cleanup');
            console.log(name);
            console.log(nickname);
        }
    });

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름: </b> {name}
            </div>
            <div>
                <b>닉네임: </b> {nickname}
            </div>
        </div>
    );
}

export default Info;