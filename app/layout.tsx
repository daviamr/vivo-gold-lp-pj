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

export default async function TypePersonLayout({ children, params }: PersonLayoutProps) {
  const { typePerson } = await params
  return (
    <>
      <html lang="pt-br">
        <body>
          <ConditionalModal />
          <Header typePerson={typePerson} />
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </body>
      </html>
    </>
  )
}

type PersonLayoutProps = {
  children: React.ReactNode,
  params: Promise<{ typePerson: string }>
}
