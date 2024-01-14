import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  background-color: lightcoral;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

const Header = () => {
  return (
    <Container>
      <Title>박우준(Justin Park)</Title>
    </Container>
  );
};

export default Header;
