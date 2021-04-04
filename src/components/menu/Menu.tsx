import styled from 'styled-components';
import { container } from '../../assets/styles/styled-components/container';
import PrimaryTheme from '../../shared/themes/primary-theme';
import Logo from './../../assets/img/logo.png';
import IconMenu from './../../shared/components/icon-menu/IconMenu';

const CustomNav = styled.nav`
  width: 100%;
  position: absolute;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  top: 0;
`;

const CustomNavContainer = styled.div`
  ${container}
  display: flex;
  padding: 16px 0;

  @media only screen and (max-width: 767px) {
    padding: 0;
  }
`;

const CustomNavSubContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex: 2;

  &:last-child {
    justify-content: flex-end;
  }

  @media only screen and (max-width: 767px) {
    flex: unset;
    display: unset;
  }
`;

const CustomImage = styled.img`
  width: 150px;
  display: inline;
  @media only screen and (max-width: 767px) {
    width: 130px;
  }
`;

const CustomList = styled.ul`
  display: inline;
  
  li {
    display: inline;
    font-size: 14pt;
    padding: 10px;
    margin-left: 10px;
    cursor:pointer;
    color: ${PrimaryTheme.Blue};
    transition: color 600ms;
    
    &:hover{
      color: ${PrimaryTheme.Pink};
      opacity: 0.7;
      transition: color 400ms;
    }
  }
`;

function Menu() {
  return (
    <CustomNav>
      <CustomNavContainer>
        <CustomNavSubContainer>
          <CustomImage src={Logo}></CustomImage>
        </CustomNavSubContainer>

        <CustomNavSubContainer>
          <CustomList>
            <li>Sobre</li>
            <li>Habilidades</li>
            <li>Portfólio</li>
            <li>Contato</li>
          </CustomList>
        </CustomNavSubContainer>
        
      </CustomNavContainer>
    </CustomNav>
  );
}

export default Menu;
