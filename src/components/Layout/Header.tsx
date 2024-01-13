import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  background-color: lightcoral;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <Container>
      <Title>박우준(Justin Park)</Title>
    </Container>
  );
};

export default Header;
