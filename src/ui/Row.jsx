import styled from "styled-components";
import css from "styled-components";
const Row = styled.div`
  display: flex;
  border: 1px solid black;
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-around;
      align-items: center;
    `}
`;
export default Row;
