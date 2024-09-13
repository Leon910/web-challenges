import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledForm>
        <StyledFieldset>
          <h2>Cover Letter Generator</h2>
          <label htmlFor="personal-info">
            Enter a few words about yourself
          </label>
          <StyledInput type="text" id="personal-info" />
          <label htmlFor="job-description">Enter the job description</label>
          <StyledInput type="text" id="job-description" />
          <button type="submit">Generate</button>
          <button type="submit">Reset</button>
        </StyledFieldset>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  margin-top: 60px;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 200px;
`;
