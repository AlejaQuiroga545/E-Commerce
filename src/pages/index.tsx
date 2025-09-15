import React from 'react';
import ProductList from '../components/PorductList';
import { products } from '../data/products';

export default function Home() {
  return (
    <main>
      <h1>E-commerce Lite — Graphic & AV Gear</h1>
      <ProductList products={products} />
    </main>
  );
}