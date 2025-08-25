"use client";

import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Product } from "@/lib/graphql";
import Image from "next/image";

interface Props {
  products: Product[];
}

export default function MonolithicProductPage({ products }: Props) {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");
  const [filterPrice, setFilterPrice] = useState(1000);

  const filteredProducts = products
    ?.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price <= filterPrice
    )
    .sort((a, b) => {
      if (sortOrder === "name") return a.name.localeCompare(b.name);
      if (sortOrder === "price") return a.price - b.price;
      return 0;
    });

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Product Catalog</h1>

        <div className="flex gap-4 mt-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="rounded border border-gray-300 p-2"
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>

          <div>
            <label>Max Price: ${filterPrice}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={filterPrice}
              onChange={(e) => setFilterPrice(Number(e.target.value))}
              className="w-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredProducts?.map((product) => (
          <div key={product.id} className="bg-white p-4">
            <Image
              src={product.imageUrl}
              className="w-full h-48 object-cover"
              priority
              alt={product.name}
              width={200}
              height={192}
            />

            <h3 className="text-[18px] mt-2">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>

            <div className="mt-4">
              <span className="text-[green] text-[20px]">
                ${product.price.toFixed(2)}
              </span>

              <button
                onClick={() => addToCart(product)}
                className="rounded bg-blue-500 text-white px-4 py-2 ml-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
