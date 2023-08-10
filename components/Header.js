import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <h1>
          Cloudinary Demo{" "}
          <span role="img" aria-label="cloud icon">
            ☁️
          </span>{" "}
        </h1>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  text-align: center;
`;
