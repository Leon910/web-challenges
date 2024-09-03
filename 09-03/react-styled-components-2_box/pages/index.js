import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <Flex>
        <BoxWithStyledComponents $isBlack={true} />
        <BoxWithStyledComponents $isBlack={false} />
      </Flex>
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;
