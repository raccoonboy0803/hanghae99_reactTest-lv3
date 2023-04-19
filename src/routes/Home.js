import ButtonControl from '../components/UI/Button';
import Input from '../components/Input';
import ModalOne from '../components/ModalOne';
import ModalTwo from '../components/ModalTwo';
import Select from '../components/Select';
import { useRef, useState } from 'react';

const Home = () => {
  const [modalone, setModalone] = useState(false);
  const [modaltwo, setModaltwo] = useState(false);
  const [leftModal, setLeftModal] = useState(false);
  const [rightModal, setRightModal] = useState(false);
  const modaloneClick = () => {
    setModalone(true);
  };
  const modaltwoClick = () => {
    setModaltwo(true);
  };

  const modalRef = useRef(null);
  const modalOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      setModaltwo(false);
    }
  };
  const dropLeftRef = useRef(null);
  const dropRightRef = useRef(null);
  const dropOutsideClick = (e) => {
    if (dropLeftRef.current !== e.target) {
      setLeftModal(false);
    } else if (dropRightRef.current !== e.target) {
      setRightModal(false);
    }
  };

  return (
    <div>
      <div onClick={dropOutsideClick}>
        <div>
          <h1>Button</h1>
          <ButtonControl withlabel="yes" color="green" icon="bell">
            <label>Large Primary Button</label>
          </ButtonControl>

          <ButtonControl color="green" size="medium">
            Medium
          </ButtonControl>
          <ButtonControl color="green">small</ButtonControl>
        </div>
        <div>
          <ButtonControl withlabel="yes" color="red" icon="heart">
            <label>Large Primary Button</label>
          </ButtonControl>

          <ButtonControl color="red" size="medium">
            Medium
          </ButtonControl>
          <ButtonControl color="red">small</ButtonControl>
        </div>
        <div>
          <h1>Input</h1>
          <Input />
        </div>

        <div>
          <h1>Modal</h1>
          <ButtonControl size="small" color="green" onClick={modaloneClick}>
            open modal
          </ButtonControl>
          {modalone && (
            <ModalOne modalone={modalone} setModalone={setModalone} />
          )}

          <ButtonControl
            withlabel="yes"
            size="medium"
            color="red"
            onClick={modaltwoClick}
          >
            open modal
          </ButtonControl>
          {modaltwo && (
            <ModalTwo
              modalRef={modalRef}
              modalOutsideClick={modalOutsideClick}
              setModaltwo={setModaltwo}
              modaltwo={modaltwo}
            />
          )}
        </div>
      </div>
      <div>
        <Select
          leftModal={leftModal}
          setLeftModal={setLeftModal}
          rightModal={rightModal}
          setRightModal={setRightModal}
          dropLeftRef={dropLeftRef}
          dropRightRef={dropRightRef}
          dropOutsideClick={dropOutsideClick}
        />
      </div>
    </div>
  );
};
export default Home;
