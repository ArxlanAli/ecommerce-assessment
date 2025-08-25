// components/ProductCard.tsx
"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Product } from "../lib/graphql";
import { useCart } from "./CartContext";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const { id, name, description, price, imageUrl, discountPercentage } =
    product;

  // Expensive calculation on every render (performance issue)
  // Optimized with useMemo to avoid recalculation each render
  const calculateDiscountPercentage = () => {
    let calculation = 0;
    for (let i = 0; i < 50000; i++) {
      calculation += Math.sin(i) * Math.cos(i);
    }
    return Math.round((discountPercentage ?? 0) * 20);
  };

  const productDiscountPercentage = useMemo(calculateDiscountPercentage, [id]);

  // Creating new function on every render instead of using useCallback
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className="product-card shadow-lg flex flex-col h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.2s",
      }}
    >
      <div className="relative overflow-hidden">
        {/* use NextJs optimized image component */}
        <Image
          src={imageUrl}
          className="product-image w-full h-48 object-cover"
          alt={name}
          width={400}
          height={192}
          priority
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-lg font-bold text-green-600">
            ${price.toFixed(2)}
          </span>
          {productDiscountPercentage > 0 && (
            <div className="text-xs text-red-500 mt-1 text-center">
              {productDiscountPercentage}% off
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm flex-grow mb-4 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto">
          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${name} to cart`} // for better accessibility
            className="add-to-cart-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
