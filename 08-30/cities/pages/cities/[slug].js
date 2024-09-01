import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return "Routing not working";
  }

  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);
  return (
    <>
      <Link href="/">Back to all cities</Link>
      <h1>City</h1>
      <p>{city.name}</p>
      <p>{city.country}</p>
      <p>{city.population}</p>
      <p>{city.description}</p>
    </>
  );
}
