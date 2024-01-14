import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 3rem;
  background-color: lightcoral;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 768px;
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
      <InnerWrapper>
        <Title>박우준(Justin Park)</Title>
      </InnerWrapper>
    </Container>
  );
};

export default Header;
