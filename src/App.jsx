import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Headers";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
  height: 100vh;
  background-color: beige;
`;
export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1"> The Wild Oasis</Heading>
            <div>
              <Heading as="h2"> Dashboard</Heading>
              <Button onClick={() => alert("button clicked")}> Close</Button>
              <Button onClick={() => alert("button2 clicked")}> Close2</Button>
            </div>
          </Row>
          <Row type="vertical">
            <form>
              <Input type="String" placeholder="Name"></Input>
              <Input type="String" placeholder="Name"></Input>
            </form>
            <p>sfgndsfgadsjkffhvkzjdfhgkjsdhf</p>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
// frontend
//Projcts - 3 + Portfolio 1 / certificate
//DSA
//networking
// 1 1000
