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
  max-width: 768px;
  gap: 2rem;
  padding-bottom: 30rem;
`;

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 20vh;
  gap: 2rem;
`;

const Topic = styled.h1`
  width: 100%;
  margin: 0;
`;

const Title = styled.h2``;

const SubTitle = styled.p`
  width: 120px;
  margin: 0;
  font-size: 26px;
  font-weight: 700;
`;

const ContentsBlock = styled.div`
  padding: 0 1rem;
`;

const WorkBlock = styled.div`
  height: 100%;
  padding-right: 2rem;
`;

const WorkExpBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 2rem;
`;
const WorkDescBlock = styled.div`
  width: 100%;
  padding-left: 2rem;
  border-left: 5px solid red;
`;

const ContentsText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const PersonalBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 0 1rem;
`;

const BorderDownBlock = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
  font-size: 22px;
  font-weight: 500;
`;

const IntroText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
`;

const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ImageBlock = styled.div`
  width: 160px;
  height: 160px;
  margin-right: 3rem;
  border-radius: 50%;
  background-color: lightcoral;
  opacity: 0.7;
`;

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Container>
        <MainBlock>
          {/* 간단한 소개  */}
          <Section>
            <Title>안녕하세요 프론트엔드 개발자 박우준입니다</Title>

            <ContactBlock>
              <div>
                <Topic>Contact</Topic>

                <ContentsBlock>
                  <ContentsText>GitHub : wj1089@naver.com</ContentsText>
                  <ContentsText>Blog : wj1089@naver.com</ContentsText>
                  <ContentsText>E-mail : wj1089@naver.com</ContentsText>
                </ContentsBlock>
              </div>

              <ImageBlock />
            </ContactBlock>

            <Topic>Introduction</Topic>

            <ContentsBlock>
              <IntroText>
                글로벌 블록체인 회사 SuperTree(PlayDapp)에서 웹 프론트엔드
                포지션으로 근무중입니다.
              </IntroText>
              <IntroText>
                활발한 성격과 여러 환경에서 얻은 아이디어를 베이스로 더욱 더
                새롭고, 일상생활에 보다 더 편리함을 가져다 줄 수 있는 서비스를
                개발하는 것을 좋아합니다.
              </IntroText>
            </ContentsBlock>
          </Section>

          <Topic>Work Experiences</Topic>

          {/* 업무 경력 */}
          <Section>
            <PersonalBlock>
              <Title>수퍼트리</Title>
              <BorderDownBlock>Period</BorderDownBlock>
              <BorderDownBlock>Position</BorderDownBlock>
              <BorderDownBlock>Project</BorderDownBlock>
            </PersonalBlock>

            <WorkExpBlock>
              <WorkBlock>
                <SubTitle>NFT 마켓</SubTitle>
              </WorkBlock>

              <WorkDescBlock>
                <p>저는 마켓 플레이스에서 이러한 일들을 했습니다.</p>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </WorkDescBlock>
            </WorkExpBlock>

            <WorkExpBlock>
              <WorkBlock>
                <SubTitle>NFT 마켓</SubTitle>
              </WorkBlock>

              <WorkDescBlock>
                <p>저는 마켓 플레이스에서 이러한 일들을 했습니다.</p>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </WorkDescBlock>
            </WorkExpBlock>
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
