import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponents $isBlack={true} />
      <BoxWithStyledComponents $isBlack={false} />
    </div>
  );
}
