import Head from "next/head";
import styled from "@emotion/styled";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: calc(100% - 231px);
`;

const MainSection = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  z-index: 1;
`;

const MainBlock = styled.div`
  padding: 1rem 2.5rem;
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Justin Park Resume</title>
      </Head>

      <Container>
        <MainSection>
          <Header />
          <MainBlock>{children}</MainBlock>
          <Footer />
        </MainSection>
      </Container>
    </>
  );
};

export default Layout;
