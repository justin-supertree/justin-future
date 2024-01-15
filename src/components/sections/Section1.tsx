import styled from "@emotion/styled";
import { useMedia } from "react-use";

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
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
    font-size: 22px;
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
  padding: 2rem 1rem 2rem 2rem;

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

    & > ul {
      padding-left: 1.725rem;
    }
  }
`;

const WorkExplainBlock = styled.div`
  & > p {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    word-break: keep-all;
  }

  & > a {
    transition: all 0.2s ease-in-out;

    &:hover {
      color: lightskyblue;
    }
  }
`;

const JobHistory = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  word-break: keep-all;
`;

const WorkBlock = styled.div`
  height: 100%;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;

const SubTitle = styled.p`
  width: 180px;
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  white-space: pre;

  @media screen and (max-width: 768px) {
    width: fit-content;
    font-size: 22px;
    border-bottom: 5px solid red;
  }
`;

const Section1 = () => {
  const isMobile = useMedia(`(max-width:768px)`, true);

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
          <p>Members Front-End</p>
        </BorderDownBlock>
      </PersonalBlock>

      <WorkExpBlock>
        {isMobile ? (
          <WorkBlock>
            <SubTitle>Members BackOffice</SubTitle>
          </WorkBlock>
        ) : (
          <WorkBlock>
            <SubTitle>Members </SubTitle>
            <SubTitle>BackOffice</SubTitle>
          </WorkBlock>
        )}

        <WorkDescBlock>
          <WorkExplainBlock>
            <p>맴버스 서비스</p>
            <a href="https://admin.membersplus.com/sign-in" target="_blank">
              https://admin.membersplus.com/
            </a>
          </WorkExplainBlock>

          <ul>
            <JobHistory>
              프로젝트의 관리 및 명확한 타입정의를 위해 Typescript 활용.
            </JobHistory>
            <JobHistory>react-auth를 활용한 Sign 기능 구현</JobHistory>
            <JobHistory>
              Build 및 성능 개선을 위해 Code Splitting(Dynamic Import) 적용.
            </JobHistory>
            <JobHistory>
              Chart.Js를 활용한 유저유입 및 transaction 트레킹 Chart구현
            </JobHistory>
            <JobHistory>
              선택한 날짜별 데이터 표출을 위해 커스텀 DatePicker 달력 기능 구현
            </JobHistory>
            <JobHistory>
              Status별 스타일을 위해 Color Mapping Function 적용.
            </JobHistory>
          </ul>
        </WorkDescBlock>
      </WorkExpBlock>

      <WorkExpBlock>
        <WorkBlock>
          <SubTitle>NFT 마켓 드롭스</SubTitle>
        </WorkBlock>

        <WorkDescBlock>
          <WorkExplainBlock>
            <p>Nft 판매 촉진 이벤트(드롭스) 진행을 위해 페이지를 제작.</p>
            <a href="https://market.playdapp.com/drops" target="_blank">
              https://market.playdapp.com/drops
            </a>
          </WorkExplainBlock>

          <ul>
            <JobHistory>
              프로젝트의 관리 및 명확한 타입정의를 위해 Typescript 활용.
            </JobHistory>
            <JobHistory>
              대규모 이미지 로딩 이슈를 대비한 Lazy Loading 적용.
            </JobHistory>
            <JobHistory>
              react-slick을 활용한 NFT 판매상품 캐러셀 구현.
            </JobHistory>
            <JobHistory>
              각 해상도(웹, 테블릿, 모바일) 반응형 디자인 구현.
            </JobHistory>
          </ul>
        </WorkDescBlock>
      </WorkExpBlock>

      <WorkExpBlock>
        <WorkBlock>
          <SubTitle>NFT 마켓 리뉴얼</SubTitle>
        </WorkBlock>

        <WorkDescBlock>
          <WorkExplainBlock>
            <p>
              기존 v1 레거시 기술스택 및 2개로 분리되어있던 프로젝트를,
              v2버전으로 통합 및 최신 기술스택으로 업데이트.
            </p>
            <a href="https://market.playdapp.com/" target="_blank">
              https://market.playdapp.com/
            </a>
          </WorkExplainBlock>

          <ul>
            <JobHistory>
              프로젝트의 관리 및 명확한 타입정의를 위해 Typescript 활용.
            </JobHistory>
            <JobHistory>
              자사 코인인 플레이댑 코인 및 이더리움, 솔라나 네트워크 연결.
            </JobHistory>
            <JobHistory>
              Meta Mask, Torus, Coinbase, Portis Wallet 연동.
            </JobHistory>
            <JobHistory>
              web3, Ethers, Next js version 기술스택을 최신상태로 업데이트.
            </JobHistory>
            <JobHistory>
              Redux-toolkit을 활용한 페이지별 필터링 및 헤더 그리고 구매, 판매
              상태 전역관리.
            </JobHistory>
            <JobHistory>
              사이트 디자인패턴 구축하여, 반응형, 시각화 및 톤앤매너 적용.
            </JobHistory>
            <JobHistory>
              유저 유입, 나라별 통계 & 페이지 잔류시간의 통계를 위해 Google
              Analytics 적용.
            </JobHistory>
          </ul>
        </WorkDescBlock>
      </WorkExpBlock>

      <WorkExpBlock>
        {isMobile ? (
          <WorkBlock>
            <SubTitle>드래곤 블러드 사전예약 페이지</SubTitle>
          </WorkBlock>
        ) : (
          <WorkBlock>
            <SubTitle>드래곤 블러드</SubTitle>
            <SubTitle>사전예약 페이지</SubTitle>
          </WorkBlock>
        )}
        <WorkDescBlock>
          <WorkExplainBlock>
            <p>게임 서비스를 통한 사전예약 페이지 개발.</p>
            <p>(서비스 종료)</p>
          </WorkExplainBlock>

          <ul>
            <JobHistory>
              Custom Video Tag를 활용한 케릭터별 영상 재생 및 캐릭터별 효과음
              재생 기능 구현.
            </JobHistory>
            <JobHistory>emotion Js를 활용한 사이트 디자인 구현</JobHistory>
            <JobHistory>
              react-query & axios를 활용한 사전예약 버튼 기능 구현
            </JobHistory>
            <JobHistory>
              웹, 테블릿, 모바일 별, 시각화 및 디자인 반응형 적용
            </JobHistory>
          </ul>
        </WorkDescBlock>
      </WorkExpBlock>
    </Section>
  );
};

export default Section1;
