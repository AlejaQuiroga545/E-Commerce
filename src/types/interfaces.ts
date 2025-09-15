// Interface for product
export interface Product {
    id: string;                  // example: "prod-01"
    name: string;                 // product name
    brand: string;                // product brand
    quantity: number;             // stock quantity
    price: number;                // product price
    currency: 'COP' | 'USD';      // accepted currencies
    isActive: boolean;            // availability
    category: string;             // category like "Drawing Tablets"
    imageUrl: string;             // image URL
    createdAt: string;            // ISO date string
    tags: string[];               // product tags
    description: string;          // short description
    dimensions?: {                // optional dimensions
      width: number;
      height: number;
      depth?: number;
    };
  }
  
  // Interface for address (nested inside User)
  export interface Address {
    street: string;
    city: string;
    country: string;
    zip: string;
  }
  
  // Interface for user
  export interface User {
    id: string;                   // example: "user-01"
    name: string;                 // full name
    email: string;                // user email
    role: 'admin' | 'customer';   // role in system
    address: Address;             // nested address object
    password?: string;            // optional password (mock purposes)
    phone?: string;               // optional phone
    createdAt?: string;           // optional account creation date
    isActive?: boolean;           // optional active/inactive account
  }
  