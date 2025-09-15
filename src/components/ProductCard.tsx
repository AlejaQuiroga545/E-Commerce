// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../types/interfaces';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <div className="price">
        {product.currency} {product.price}
      </div>
      <div>
        {product.tags?.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {!product.isActive && <p className="inactive">Not available</p>}

      <div className="card-footer">
        <span>Qty: {product.quantity}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}