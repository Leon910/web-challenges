import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error || !data) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Price: {product.price} {product.currency}
            </p>
            <p>Category: {product.category}</p>
            <p>Currency: {product.currency} </p>
          </li>
        ))}
      </ul>
    </>
  );
}
