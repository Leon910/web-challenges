import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volumeTitle = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const prevVolume = volumes[volumeIndex - 1];

  if (!volumeTitle) {
    return <p>Volume not found.</p>;
  }

  const { title, description, books } = volumeTitle;

  return (
    <>
      <Link href="/">Overview Page</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="Cover"
      />
      {prevVolume ? (
        <div>
          <Link href={`/volumes/${prevVolume.slug}`}>
            Previous Volume: {prevVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title}
          </Link>
        </div>
      ) : null}
    </>
  );
}
