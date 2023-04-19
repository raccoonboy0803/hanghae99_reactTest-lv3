import styled from 'styled-components';
import bell from '../../icons/purpleBell.png';
import heart from '../../icons/purpleHeart.png';

const ButtonControl = styled.button`
  cursor: pointer;
  border-radius: 8px;

  border: ${(props) =>
    props.withlabel === 'yes'
      ? `3px solid ${
          props.color === 'green' ? 'rgb(85, 239, 196)' : 'rgb(250, 177, 160)'
        }`
      : 'none'};

  background-color: ${(props) =>
    props.withlabel === 'yes'
      ? 'rgb(255, 255, 255)'
      : props.color === 'green'
      ? 'rgb(85, 239, 196)'
      : 'rgb(250, 177, 160)'};

  color: ${(props) =>
    props.color === 'green' ? 'rgb(0, 0, 0)' : 'rgb(214, 48, 49)'};

  height: ${(props) =>
    props.withlabel === 'yes'
      ? '50px'
      : props.size === 'medium'
      ? '45px'
      : '40px'};

  width: ${(props) =>
    props.withlabel === 'yes'
      ? '200px'
      : props.size === 'medium'
      ? '130px'
      : '100px'};

  font-weight: ${(props) => (props.withlabel === 'yes' ? '600' : '400')};

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }

  & label::after {
    content: '';
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-left: 2px;
    background-image: url(${(props) =>
      props.icon === 'bell' ? `${bell}` : `${heart}`});
    background-size: 15px;
  }
`;

export default ButtonControl;
