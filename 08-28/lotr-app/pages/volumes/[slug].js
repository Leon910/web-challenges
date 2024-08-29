import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeTitle = volumes.find((volume) => volume.slug === slug);

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
    </>
  );
}
