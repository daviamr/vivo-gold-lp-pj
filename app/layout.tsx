import type { Metadata } from "next";
import Header from '../components/layout/Header'
import DefaultLayout from '../components/layout/DefaultLayout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vivo Fibra - A Melhor Internet Banda Larga da América Latina',
  description: 'A Melhor Internet Banda Larga da América Latina',
  icons: '/favicon.ico'
};

export default function RootLayout({ children }: RootProps) {
  return (
    <>
      <html lang="pt-br">
        <body className="relative">
          <DefaultLayout>
          <Header />
            {children}
          </DefaultLayout>
        </body>
      </html>
    </>
  )
}

type RootProps = {
  children: React.ReactNode,
}
