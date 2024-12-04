import { ChangeEvent, useState } from 'react';

type InputPropsType = {
  addNewMessage: (newMessageValue: string) => void;
};

export const Input = (props: InputPropsType) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onClickBtnHandler = () => {
    if (inputValue.length) {
      props.addNewMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={onChangeInputHandler}
        value={inputValue}
      ></input>
      <button onClick={onClickBtnHandler}>add</button>
    </>
  );
};
