"use client";
import { useEffect, useState } from "react";
import Card from "./card";

export default function Home() {
  const [products, setproducts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();
      setproducts(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (products !== null) && (
    <div className="bg-gray-100 h-screen-full p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>
      <div className="flex flex-wrap gap-4">
        {Object.entries(products).map(([key, product]) => (
          <Card key={key} product={product} />
        ))}
      </div>
    </div>
  )

}
