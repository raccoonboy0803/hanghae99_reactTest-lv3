import ButtonControl from './UI/Button';
import styled from './ModalOne.module.css';

const ModalOne = ({ modalone, setModalone }) => {
  const modalClose = () => {
    setModalone(!modalone);
  };

  return (
    <>
      <div className={styled.outer}></div>
      <div className={styled.container}>
        <p className={styled.content}>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <div className={styled.btnWrap}>
          <ButtonControl
            size="small"
            color="red"
            onClick={modalClose}
            className={styled.close}
          >
            닫기
          </ButtonControl>
          <ButtonControl size="small" color="green" className={styled.ok}>
            확인
          </ButtonControl>
        </div>
      </div>
    </>
  );
};
export default ModalOne;
