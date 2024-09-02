import { cities } from "@/lib/data";
import { useRouter } from "next/router";

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }

  const { slug } = router.query;
  const cityInfo = cities.find((city) => city.slug === slug);

  return (
    <>
      <div>
        <h1>City</h1>
        <p>{cityInfo.name}</p>
        <p>{cityInfo.description}</p>
      </div>
    </>
  );
}
