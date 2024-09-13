import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledForm>
      <StyledFieldset>
        <label htmlFor="personal-info">Enter a few words about yourself</label>
        <input type="text" id="personal-info" />
        <label htmlFor="job-description">Enter the job description</label>
        <input type="text" id="job-description" />
        <button type="submit">Generate</button>
        <button type="submit">Reset</button>
      </StyledFieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 60px;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
`;
