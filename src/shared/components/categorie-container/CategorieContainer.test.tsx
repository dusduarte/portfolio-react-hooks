import { render, screen } from "@testing-library/react";
import {
  CategorieContainer,
  Props,
  PropsContainer,
  PropsTitleStyle,
} from "./CategorieContainer";


// import { shallow, configure, mount } from "enzyme";
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

const props: Props & PropsContainer & PropsTitleStyle = {
  children: "test1",
  title: "title test2",
  titleColor: "#000",
  titleAlign: "center",
  colorFirstLetter: "#000",
  background: "#000",
  marginTop: "20px",
};

const component = (
  <CategorieContainer
    title={props.title}
    titleColor={props.titleColor}
    titleAlign={props.titleAlign}
    colorFirstLetter={props.colorFirstLetter}
    background={props.background}
    marginTop={props.marginTop}
  >
    {props.children}
  </CategorieContainer>
);

test("renders CategorieContainer", () => {
  render(component);
  const div = screen.getByText("test1");
  expect(div).toBeInTheDocument();
  const h2 = screen.getByText("title test2");
  expect(h2).toBeInTheDocument();
});