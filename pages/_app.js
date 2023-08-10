import styled from "styled-components";
import GlobalStyle from "../styles";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <StyledWrapper>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh; // fallback for browsers that have not implemented dvh
  min-height: 100dvh;
  display: grid;
  place-items: center;
`;
