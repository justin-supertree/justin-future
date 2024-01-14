import styled from "@emotion/styled";
import Layout from "@/components/Layout";
import { NextPageWithLayout } from "@/types/next-page";
import Image from "next/image";
import { MyThumbNail, MyThumbNail2 } from "@/images";
import { useMedia } from "react-use";

import Section2 from "@/components/sections/Section2";
import Section1 from "@/components/sections/Section1";

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
  gap: 4rem;
  padding-bottom: 30rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    gap: 1.6rem;
  }
`;

const Topic = styled.h1`
  width: 100%;
  margin: 0;
`;

const Title = styled.h2`
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 1.5;
    word-break: keep-all;
  }
`;

const SubTitle = styled.p`
  width: 120px;
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  white-space: pre;

  @media screen and (max-width: 768px) {
    width: fit-content;
    border-bottom: 5px solid red;
  }
`;

const ContentsBlock = styled.div`
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SkillsBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const SkillItem = styled.div`
  width: fit-content;
  padding: 0.4rem;
  border: 4px solid lightblue;
  border-radius: 12px;
  white-space: pre;
`;

const WorkBlock = styled.div`
  height: 100%;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;

const WorkExpBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0.5rem 1rem;
  }
`;
const WorkDescBlock = styled.div`
  width: 100%;
  padding-left: 2rem;
  border-left: 5px solid red;

  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    padding-left: 0;
    border-left: 0;
  }
`;

const ContentsText = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const ContactTitle = styled.p`
  width: 100px;
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
  font-size: 22px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    padding: 0.3rem;
    font-size: 16px;
  }
`;

const IntroText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  word-break: keep-all;
`;

const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ImageBlock = styled.div`
  width: 180px;
  height: 180px;
  margin-right: 3rem;
  border-radius: 50%;
  background-color: lightcoral;
  opacity: 0.9;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 160px;
    border-radius: 8px;
    margin-right: 0;
    margin-bottom: 2rem;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HomePage: NextPageWithLayout = () => {
  const isMobile = useMedia("max-width:768px", true);

  return (
    <>
      <Container>
        <MainBlock>
          {/* 간단한 소개  */}
          <Section>
            <Title>안녕하세요 프론트엔드 개발자 박우준입니다</Title>

            <ContactBlock>
              <ContactWrapper>
                <Topic>Contact</Topic>

                <ContentsBlock>
                  <ContentsText>
                    <ContactTitle>GitHub : </ContactTitle>
                    <p>wj1089@naver.com</p>
                  </ContentsText>
                  <ContentsText>
                    <ContactTitle>Blog : </ContactTitle>
                    <p>wj1089@naver.com</p>
                  </ContentsText>
                  <ContentsText>
                    <ContactTitle>E-mail : </ContactTitle>
                    <p>wj1089@naver.com</p>
                  </ContentsText>
                </ContentsBlock>
              </ContactWrapper>

              <ImageBlock>
                <Image
                  src={!isMobile ? MyThumbNail2 : MyThumbNail}
                  alt="my-thumbnail"
                />
              </ImageBlock>
            </ContactBlock>

            <Topic>Introduction</Topic>

            <ContentsBlock>
              <IntroText>
                글로벌 블록체인 회사 SuperTree(PlayDapp)에서 웹 프론트엔드
                포지션으로 근무중입니다.
              </IntroText>
              <br />
              <IntroText>
                활발한 성격과 여러 환경에서 얻은 아이디어를 베이스로 더욱 더
                새롭고, 일상생활에 보다 더 편리함을 가져다 줄 수 있는 서비스를
                개발하는 것을 좋아합니다.
              </IntroText>
            </ContentsBlock>
          </Section>

          <Section>
            <Topic>Skills</Topic>

            <SkillsBlock>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>TypeScript</SkillItem>
              <SkillItem>Next.JS</SkillItem>
              <SkillItem>React.JS</SkillItem>
              <SkillItem>Redux</SkillItem>
              <SkillItem>GraphQL</SkillItem>
              <SkillItem>HTML / CSS</SkillItem>
              <SkillItem>Emotion.JS</SkillItem>
              <SkillItem>Styled-Component</SkillItem>
              <SkillItem>Chart.Js</SkillItem>
              <SkillItem>Git / GitHub</SkillItem>
              <SkillItem>Vercel</SkillItem>
              <SkillItem>Amplify</SkillItem>
              <SkillItem>Netlify</SkillItem>
              <SkillItem>JIRA</SkillItem>
              <SkillItem>Google Analytics</SkillItem>
            </SkillsBlock>
          </Section>

          <Topic>Work Experiences</Topic>

          {/* 업무 경력 1*/}
          <Section1 />

          {/* 업무 경력 2*/}
          <Section2 />
        </MainBlock>
      </Container>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
