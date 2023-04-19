import { useState } from 'react';
import Button from './UI/Button';

const Input = () => {
  const [textInput, setTextInput] = useState('');
  const [numberInput, setNumberInput] = useState(0);

  const onChangeText = (e) => {
    const { value } = e.target;
    setTextInput(value);
  };

  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };
  const onChangeNumber = (e) => {
    const { value } = e.target;
    let number = Number(value.replaceAll(',', ''));
    if (Number.isNaN(number)) return;
    setNumberInput(number);
  };

  const btnClick = () => {
    alert(`{ name: ${textInput}, price: ${numberInput} }`);
  };
  return (
    <div>
      <form>
        <label htmlFor="textInput">이름</label>
        <input
          name="name"
          value={textInput}
          type="text"
          id="textInput"
          onChange={onChangeText}
        ></input>
        <label htmlFor="numberInput">가격</label>
        <input
          name="price"
          value={addComma(numberInput)}
          type="text"
          id="numberInput"
          onChange={onChangeNumber}
        ></input>
        <Button size="small" color="green" onClick={btnClick}>
          저장
        </Button>
      </form>
    </div>
  );
};
export default Input;
