import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  async function fetcher(url) {
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await response.json();
      error.status = response.status;
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }

  const { data, isLoading, error, mutate } = useSWR(
    `https://api.wheretheiss.at/v1/satellites/25544`,
    fetcher,
    { refreshInterval: 5000 }
  );

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !data) {
    return <h1>Error: {error}</h1>;
  }

  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
