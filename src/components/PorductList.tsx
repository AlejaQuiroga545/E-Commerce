'use client';
import React, { useMemo, useState } from 'react';
import { Product } from '../types/interfaces';
import ProductCard from './ProductCard';

export default function ProductList({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('');
  const [activeOnly, setActiveOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');

  const filtered = useMemo(() => {
    let list = products.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.tags || []).some(t => t.toLowerCase().includes(q)));
    }

    if (activeOnly) {
      list = list.filter(p => p.isActive);
    }

    if (sortBy === 'newest') {
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, query, activeOnly, sortBy]);

  return (
    <section>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={activeOnly}
            onChange={(e) => setActiveOnly(e.target.checked)}
          />
          Active only
        </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      <div className="products-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div style={{ marginTop: 16, textAlign: 'center', color: '#666' }}>
        {filtered.length} product(s) found
      </div>
    </section>
  );
}