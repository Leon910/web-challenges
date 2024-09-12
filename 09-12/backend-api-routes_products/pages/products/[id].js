import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error || !data) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Category: {data.category}</p>
    </div>
  );
}
