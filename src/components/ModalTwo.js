import styled from './ModalTwo.module.css';

function ModalTwo({ modalRef, modalOutsideClick, setModaltwo, modaltwo }) {
  const modalClose = () => {
    setModaltwo(!modaltwo);
  };
  return (
    <>
      <div
        className={styled.outer}
        ref={modalRef}
        onClick={modalOutsideClick}
      ></div>
      <div className={styled.container}>
        <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
        <div className={styled.btnWrap}>
          <button className={styled.closeBtn} onClick={modalClose}>
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalTwo;
