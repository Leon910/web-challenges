import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import ArrowLeft from "public/icons/arrow-left.svg";
import ArrowRight from "public/icons/arrow-right.svg";
import Chevron from "public/icons/chevron-left.svg";

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

  const { title, description, cover, books, color } = volumeTitle;

  return (
    <>
      <Chevron />
      <StyleLink href="/">Overview Page</StyleLink>
      <StyleTitle>{title}</StyleTitle>
      <StyleDescription>{description}</StyleDescription>
      <BookStyling $color={color}>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.ordinal}:</strong> {book.title}
            </li>
          ))}
        </ul>
        <Image src={cover} height={230} width={140} alt={`Cover of ${title}`} />
      </BookStyling>
      {prevVolume ? (
        <div>
          <StyleLink href={`/volumes/${prevVolume.slug}`}>
            <ArrowLeft />
            Previous Volume: <LineBreakDiv />
            {prevVolume.title}
          </StyleLink>
        </div>
      ) : null}
      {nextVolume ? (
        <StyleLinkContainer>
          <StyleLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume:
            <LineBreakDiv />
            {nextVolume.title}
            <ArrowRight />
          </StyleLink>
        </StyleLinkContainer>
      ) : null}
    </>
  );
}

const StyleTitle = styled.h1`
  padding: 10px;
`;

const StyleDescription = styled.p`
  padding: 10px 20px;
`;

const BookStyling = styled.div`
  background-color: ${({ $color }) => $color};
  display: flex;
  gap: 0.5rem;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const StyleLinkContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;
  padding: 20px 10px 10px 20px;
`;

const StyleLink = styled(Link)`
  font-size: small;
  text-decoration: none;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LineBreakDiv = styled.div`
  padding-top: 2px; /* Adjust spacing as needed */
  color: gray; /* Example of styling after the break */
`;
