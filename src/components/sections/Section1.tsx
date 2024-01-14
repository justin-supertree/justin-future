import styled from "@emotion/styled";

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

const Title = styled.h2`
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 1.5;
    word-break: keep-all;
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

const WorkBlock = styled.div`
  height: 100%;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    padding-right: 0;
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

const Section1 = () => {
  return (
    <Section>
      <PersonalBlock>
        <Title>수퍼트리</Title>
        <BorderDownBlock>
          <p>Period</p>
          <p>2021.06.25 ~</p>
        </BorderDownBlock>
        <BorderDownBlock>
          <p>Position</p>
          <p>Web Front-End Developer</p>
        </BorderDownBlock>
        <BorderDownBlock>
          <p>Department</p>
          <p>Members PlayDapp Front-End</p>
        </BorderDownBlock>
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
          <SubTitle>드래곤 블러드</SubTitle>
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
  );
};

export default Section1;
