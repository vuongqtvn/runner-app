import styled from "styled-components";
import { Space, Tag, Radio } from "antd";

export const Container = styled.div`
  & label {
    font-size: 14px;
    font-weight: 500;
    color: black;
  }
  .sun-editor {
    font-family: "Poppins";
  }
`;
export const customRadio = styled(Radio)`
  margin: 10px;
  width: 100px;
`;
export const customTag = styled(Tag)`
  min-width: 80px;
`;
export const Title = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  color: #096dd9;
  font-weight: 900;
  margin: 0;
`;
export const ImagesBox = styled.div`
  position: relative;
  & .icon_delete {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: gray;
    font-size: 20px;
    /* z-index: 9999; */
  }
`;
export const CustomSpace = styled(Space)`
  display: flex;
  justify-content: flex-end;
`;
export const CustomSpaceBox = styled(Space)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
