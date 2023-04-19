import { useState } from 'react';
import styled from './Select.module.css';

function Select({
  leftModal,
  setLeftModal,
  rightModal,
  setRightModal,
  dropLeftRef,
  dropRightRef,
  dropOutsideClick,
}) {
  const [leftValue, setLeftValue] = useState('리액트');
  const [rightValue, setRightValue] = useState('리액트');
  const leftBtnClick = () => {
    setLeftModal(true);
  };
  const rightBtnClick = () => {
    setRightModal(true);
  };
  const leftValueHandle = (e) => {
    setLeftValue(e.target.innerText);
    setLeftModal(false);
  };
  const rightValueHandle = (e) => {
    setRightValue(e.target.innerText);
    setRightModal(false);
  };

  return (
    <div>
      <div className={styled.container} onClick={dropOutsideClick}>
        <h1>Select</h1>
        <div className={styled.wrap}>
          <div className={styled.btnWrap}>
            <button
              className={styled.btn}
              onClick={leftBtnClick}
              ref={dropLeftRef}
            >
              <div>{leftValue}</div>
              <div>▼</div>
            </button>
          </div>
          <div className={styled.btnWrap}>
            <button
              className={styled.btn}
              onClick={rightBtnClick}
              ref={dropRightRef}
            >
              <div>{rightValue}</div>
              <div>▼</div>
            </button>
            {rightModal && (
              <Dropdownright rightValueHandle={rightValueHandle} />
            )}
          </div>
        </div>
      </div>
      {leftModal && <Dropdownleft leftValueHandle={leftValueHandle} />}
    </div>
  );
}

export default Select;

export function Dropdownleft({ leftValueHandle }) {
  return (
    <div className={styled.dropWrapLeft}>
      <ul onClick={leftValueHandle}>
        <li>리액트</li>
        <li>자바</li>
        <li>스프링</li>
        <li>리액트네이티브</li>
      </ul>
    </div>
  );
}
export function Dropdownright({ rightValueHandle }) {
  return (
    <div className={styled.dropWrapRight}>
      <ul onClick={rightValueHandle}>
        <li>리액트</li>
        <li>자바</li>
        <li>스프링</li>
        <li>리액트네이티브</li>
      </ul>
    </div>
  );
}
