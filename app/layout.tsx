import type { Metadata } from "next";
import Header from '../components/layout/Header'
import DefaultLayout from '../components/layout/DefaultLayout'
import ConditionalModal from "../components/conditional-modal/ConditionalModal";
import './globals.css'

export const metadata: Metadata = {
  title: 'Vivo Fibra - A Melhor Internet Banda Larga da América Latina',
  description: 'A Melhor Internet Banda Larga da América Latina',
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="pt-br">
      <body>
teste2
      </body>
    </html>
  )
}