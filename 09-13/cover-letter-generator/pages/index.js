import styled from "styled-components";
import { useState } from "react";

export default function HomePage() {
  const [GenerateAIAnswer, setGenerateAIAnswer] = useState("");
  console.log(GenerateAIAnswer);
  const [personalInfo, setPersonalInfo] = useState("");
  console.log(personalInfo);
  const [jobDescription, setJobDescription] = useState("");
  console.log(jobDescription);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ personalInfo, jobDescription }),
    });

    if (response.ok) {
      const data = await response.json();
      setGenerateAIAnswer(data.output);
    } else {
      setGenerateAIAnswer("Failed to submit");
    }
  };

  const handleReset = () => {
    setPersonalInfo("");
    setJobDescription("");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit} onReset={handleReset}>
        <StyledFieldset>
          <h2>Cover Letter Generator</h2>
          <label htmlFor="personal-info">
            Enter a few words about yourself
          </label>
          <StyledInput
            type="text"
            id="personal-info"
            value={personalInfo}
            onChange={(event) => setPersonalInfo(event.target.value)}
          />
          <label htmlFor="job-description">Enter the job description</label>
          <StyledInput
            type="text"
            id="job-description"
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
          />
          <button type="submit">Generate</button>
          <button type="reset">Reset</button>
        </StyledFieldset>
      </StyledForm>
      <section>
        <h1>Access your personal cover letter below</h1>
        <p>{GenerateAIAnswer}</p>
      </section>
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
