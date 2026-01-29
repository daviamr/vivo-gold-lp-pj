import Image from "next/image"

function Index() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <Image src="/5g-icon.png" alt="Benefit 1" width={100} height={100} className="mb-4"/>
        <div>
          <p className="mb-2">Internet 5G</p>
          <p className="max-w-100 opacity-75">Tenha a internet 5G mais rápida do mundo, além de ligações e SMS para qualquer operadora para manter sua equipe sempre conectada com alta velocidade e estabilidade.</p>
        </div>
      </div>

      <div>
        <Image src="/5g-icon.png" alt="Benefit 1" width={100} height={100} className="mb-4"/>
        <div>
          <p className="mb-2">Programa Vivo Valoriza Empresas</p>
          <p className="max-w-100 opacity-75">Ganhe descontos exclusivos e benefícios para acelerar seu negócio com parceiros estratégicos. Os planos móveis Vivo Empresas incluem vantagens que ajudam sua empresa a economizar e crescer.</p>
        </div>
      </div>

      <div>
        <Image src="/5g-icon.png" alt="Benefit 1" width={100} height={100} className="mb-4"/>
        <div>
          <p className="mb-2">Vivo Gestão</p>
          <p className="max-w-100 opacity-75">Tenha controle total da sua empresa e acompanha o consumo de voz e dados, gerencie linhas corporativas, ativa bloqueios e garante segurança. Tudo online, quando e onde quiser!</p>
        </div>
      </div>
    </div>
  )
}

export default Index