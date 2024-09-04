import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  toggleAllLightsOn,
  toggleAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={toggleAllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={toggleAllLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
