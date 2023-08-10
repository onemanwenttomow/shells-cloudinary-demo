import styled from "styled-components";
import Image from "next/image.js";
import { useState } from "react";

export default function Form() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data) {
      setImage(data);
    } else {
      setError("Something went wrong");
    }
  }

  return (
    <>
      <div>
        {image ? (
          <ImageContainer>
            <Image src={image.secure_url} alt="new image on cloudinary" fill />
          </ImageContainer>
        ) : (
          <StyledPlaceholder />
        )}

        {error && <div>{error.message}</div>}

        <StyledForm onSubmit={handleSubmit}>
          <input name="file" type="file" accept="image/*" />
          <button>Submit</button>
        </StyledForm>
      </div>
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
`;

const StyledPlaceholder = styled.div`
  height: 500px;
  width: 500px;
  background-color: lightgrey;
  border: dashed 2px grey;
`;

const StyledForm = styled.form`
  padding: 24px;
`;
