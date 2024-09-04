import { introduction, volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

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

      <StyleDisplayList>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              <StyleImage
                src={volume.cover}
                alt={`Cover image of ${volume.title}`}
                width={126}
                height={207}
              />
              {volume.title}
            </Link>
          </li>
        ))}
      </StyleDisplayList>
      <button onClick={handleClick}>Go to Random Volume</button>
    </>
  );
}

const StyleDisplayList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;

const StyleImage = styled.img`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;
