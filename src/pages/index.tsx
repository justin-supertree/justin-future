import styled from "@emotion/styled";
import Layout from "@/components/Layout";
import { NextPageWithLayout } from "@/types/next-page";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 2rem;
`;
const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 20vh;
  gap: 1rem;
`;

const Topic = styled.h1`
  width: 100%;
`;

const Title = styled.h2``;

const SubTitle = styled.h3``;

const ContentsBlock = styled.div`
  padding: 0 2rem;
`;

const ContentsText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Container>
        <MainBlock>
          <Section>
            <Title>안녕하세요 프론트엔드 개발자 박우준입니다</Title>

            <ContentsBlock>
              <SubTitle>Contact</SubTitle>
              <ContentsText>GitHub : wj1089@naver.com</ContentsText>
              <ContentsText>Blog : wj1089@naver.com</ContentsText>
              <ContentsText>E-mail : wj1089@naver.com</ContentsText>
            </ContentsBlock>

            <ContentsBlock>
              <SubTitle>Introduction</SubTitle>
              <p>
                글로벌 블록체인 회사 SuperTree(PlayDapp)에서 웹 프론트엔드로
                포지션으로 근무중입니다.
              </p>
              <p>
                활발한 성격을 기반으로 여러 환경에서 얻은 아이디어를 베이스로 더
                새롭고, 생활에 보다 더 편리함을 가져다 줄 수 있는 서비스를
                개발하는 것을 좋아합니다.
              </p>
            </ContentsBlock>
          </Section>

          <Topic>Work Experiences</Topic>

          <Section>
            <Title>수퍼트리</Title>

            <ContentsBlock>
              <SubTitle>마켓플레이스</SubTitle>
            </ContentsBlock>
          </Section>
        </MainBlock>
      </Container>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
