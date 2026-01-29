import type { Metadata } from "next";
import Header from '../components/layout/Header'
import DefaultLayout from '../components/layout/DefaultLayout'
import ConditionalModal from "../components/conditional-modal/ConditionalModal";
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
        <body>
          <ConditionalModal />
          <Header />
          <DefaultLayout>
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
