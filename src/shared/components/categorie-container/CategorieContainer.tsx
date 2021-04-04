import styled from 'styled-components';
import { container } from '../../../assets/styles/styled-components/container';

export interface Props {
  title: string;
  children: Element | any;
}

export interface PropsContainer {
  background?: string;
  marginTop?: string;
}

export interface PropsTitleStyle {
  titleColor: string;
  colorFirstLetter: string;
  titleAlign?: string;
}

const CustomDiv = styled.div`
  padding:0 20px;
  position: relative;
  background: ${(props: PropsContainer) => props.background};

  ${(props: PropsContainer) =>
    props.background &&
    `&:before {
    content: '';
    width: 150%;
    height: 300px;
    left: 0;
    position: absolute;
    background: ${props.background};
    z-index:-1;

    @media only screen and (min-width: 3001px) {
      transform: rotate(0deg);
      top: 0;
    }

    @media only screen and (min-width: 2001px) and (max-width: 3000px) {
      transform: rotate(-3deg);
      top: -200px;
    }

    @media only screen and (min-width: 1501px) and (max-width: 2000px) {
      transform: rotate(-5deg);
      top: -190px;
    }

    @media only screen and (min-width: 1001px) and (max-width: 1500px) {
      transform: rotate(-7deg);
      top: -160px;
    }

    @media only screen and (max-width: 1000px) {
      transform: rotate(-7deg);
      top: -75px;
    }

    @media only screen and (max-width: 500px) {
      transform: rotate(-9deg);
      top: -60px;
    }
  }`
}`;

const CustomSection = styled.section`
  ${container}
  padding: 25px 0;
  min-height: 350px;
  margin-top: ${(props: PropsContainer) => props.marginTop}
`;

const CustomTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 25pt;
  position: relative;
  color: ${(props: PropsTitleStyle) => props.titleColor};
  text-align: ${(props: PropsTitleStyle) => props.titleAlign};

  @media only screen and (max-width: 1000px) {
    font-size: 20pt;
  }

  &:first-letter {
    color: ${(props: PropsTitleStyle) => props.colorFirstLetter};
    font-weight: bolder;
  }

  &:before {
    content: '';
    width: 30px;
    height: 3px;
    position: absolute;
    bottom: -5px;
    background: ${(props: PropsTitleStyle) => props.colorFirstLetter};
  }
`;

export function CategorieContainer(props: Props & PropsTitleStyle & PropsContainer) {
  return (
    <CustomDiv background={props.background}>
      <CustomSection marginTop={props.marginTop} background={props.background}>
        <CustomTitle
          titleColor={props.titleColor}
          titleAlign={props.titleAlign}
          colorFirstLetter={props.colorFirstLetter}
        >
          {props.title}
        </CustomTitle>
        <div>{props.children}</div>
      </CustomSection>
    </CustomDiv>
  );
}