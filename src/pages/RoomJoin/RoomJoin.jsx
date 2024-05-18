import React, { useRef, useState, useEffect } from 'react';
import * as s from './RoomJoin.style';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import bgSrc from '../../assets/bgImg.png';
import InputBlock from './InputBlock/InputBlock';

const RoomJoin = () => {
  const [codeArr, setCodeArr] = useState('');
  const inputRef = useRef(null);
  const handleCodeInput = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, ''); // 숫자가 아닌 문자 제거
    if (numericInput.length <= 6) setCodeArr(numericInput);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <Background src={bgSrc}>
      <Header isIcon='true'>참여하기</Header>
      <s.Container>
        <s.Title>방장에게 전달받은 코드를 입력하세요</s.Title>
        <s.CodeBlock>
          <s.CodeInput
            id='code-input'
            ref={inputRef}
            type='text'
            value={codeArr}
            onChange={handleCodeInput}
          />
           <InputBlock code={Array.from(codeArr)} inputRef={inputRef} /> 
        </s.CodeBlock>
      </s.Container>
      <Button>참여하기</Button>
    </Background>
  );
};

export default RoomJoin;
