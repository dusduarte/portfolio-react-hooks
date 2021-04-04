import { useState } from 'react';
import styled from 'styled-components';
import PrimaryTheme from '../../themes/primary-theme';

const ContainerIconMenu = styled.div`
  position: relative;
  width: 50px;
  padding: 10px;

  span {
    height: 6px;
    background: ${(props: { color: PrimaryTheme }) => props.color};
    display: block;
    transition: all 200ms;

    &:nth-of-type(2), &:nth-of-type(3){
      margin-top: 10px;
    }
  }

  &.menuOpen{
    height:45px;

    span{
      position: absolute;
      width: 50px;

      &:nth-of-type(1){
        transform: rotate(45deg);
        transition: all 500ms;
        top:30px;
      }

      &:nth-of-type(2){
        display:none;
      }

      &:nth-of-type(3){
        transform: rotate(-45deg);
        transition: all 500ms;
        top:20px;
      }
    }
  }`;

function IconMenu(props: { color: PrimaryTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <ContainerIconMenu
      className={open ? 'menuOpen' : ''}
      color={props.color}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </ContainerIconMenu>
  );
}

export default IconMenu;
