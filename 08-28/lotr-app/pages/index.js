import { introduction, volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const handleClick = () => {
    const randomVolume = getRandomElement(volumes);

    router.push(`/volumes/${randomVolume.slug}`);
  };
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>

      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Go to Random Volume</button>
    </>
  );
}
