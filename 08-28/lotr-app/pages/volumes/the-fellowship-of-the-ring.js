import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Title1() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">Overview Page</Link>
      <h1>{volume.title}</h1>
      <p>{volumes.description}</p>
      <ul>
        {volume.books.map((book, index) => (
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
