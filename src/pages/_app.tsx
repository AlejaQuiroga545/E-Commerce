// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.css'  // 👈 Importa tus estilos globales

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
