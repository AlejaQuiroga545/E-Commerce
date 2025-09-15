// src/data/users.ts
import { User } from '../types/interfaces';

export const users: User[] = [
  {
    id: 'user-01',
    name: 'Valen',
    email: 'valen@example.com',
    role: 'admin',
    address: {
      street: 'Calle 123',
      city: 'Bogotá',
      country: 'Colombia',
      zip: '110111'
    }
  },
  {
    id: 'user-02',
    name: 'Ashley',
    email: 'ashley@example.com',
    role: 'customer',
    address: {
      street: 'Av. Libertador 45',
      city: 'Medellín',
      country: 'Colombia',
      zip: '050021'
    }
  },
  {
    id: 'user-03',
    name: 'Bibiana',
    email: 'bibiana@example.com',
    role: 'customer',
    address: {
      street: 'Cra 9 #45',
      city: 'Cali',
      country: 'Colombia',
      zip: '760044'
    }
  },
  {
    id: 'user-04',
    name: 'Héctor',
    email: 'hector@example.com',
    role: 'customer',
    address: {
      street: 'Av. Principal 77',
      city: 'Cartagena',
      country: 'Colombia',
      zip: '130001'
    }
  },
  {
    id: 'user-05',
    name: 'Esteban',
    email: 'esteban@example.com',
    role: 'customer',
    address: {
      street: 'Cl 10 #20',
      city: 'Barranquilla',
      country: 'Colombia',
      zip: '080001'
    }
  },
  {
    id: 'user-06',
    name: 'Aleja',
    email: 'aleja@example.com',
    role: 'customer',
    address: {
      street: 'Calle 8A #65',
      city: 'Pereira',
      country: 'Colombia',
      zip: '660001'
    }
  },
  {
    id: 'user-07',
    name: 'Martin',
    email: 'martin@example.com',
    role: 'customer',
    address: {
      street: 'Av. Santander',
      city: 'Manizales',
      country: 'Colombia',
      zip: '170001'
    }
  }
];