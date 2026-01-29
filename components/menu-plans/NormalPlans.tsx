'use client'

import { Smartphone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export default function NormalPlans() {
  const [menuOption, setMenuOption] = useState('novaLinha')
  const mockedPlans = [
    {
      plan: 'Plano de Celular 5G',
      pos: '6',
      posText: 'Plano Pós 5G',
      portability: '+15 GB Na Portabilidade',
      cta: 'Mais vendido',
      price: 39.99
    },
    {
      plan: 'Plano de Celular + MDM',
      pos: '6',
      posText: 'Plano Pós 5G',
      portability: '+15 GB Na Portabilidade',
      mdm: true,
      chipLock: true,
      price: 44.99
    },
    {
      plan: 'Plano de Celular 5G',
      pos: '15',
      portability: '+15 GB Na Portabilidade',
      cta: 'Oferta mais vendida',
      price: 54.99
    },
    {
      plan: 'Plano de Celular 5G',
      pos: '100',
      portability: '+15 GB Na Portabilidade',
      cta: 'Melhor custo benefício',
      price: 99.99
    },
  ]
  const [plans, setPlans] = useState(mockedPlans)
  const router = useRouter()

  // const toggleCheck = (i: number, field: string, value: boolean) => {

  //   setPlans(prevPlans =>
  //     prevPlans.map((plan, index) => index === i ?
  //       { ...plan, [field]: value } : plan
  //     )
  //   )
  // }

  const handleCheckout = (plan: typeof mockedPlans[0]) => {
    const customerData = localStorage.getItem('customer')
    const customer = customerData ? JSON.parse(customerData) : {}
    const dataToSave = { ...customer, plan }
    localStorage.setItem('customer', JSON.stringify(dataToSave))
    router.push(`/checkout?step=1`)
  }

  return (
    <div id="card-section">
      <ul className="grid grid-cols-2 max-w-70 text-center cursor-pointer">
        <li
          className={`border-b-3 text-lg pb-2 ${(menuOption === 'novaLinha' && 'border-default-purple font-semibold')}`}
          onClick={() => setMenuOption('novaLinha')}>
          Nova Linha
        </li>
        <li
          className={`border-b-3 text-lg pb-2 ${(menuOption === 'portabilidade' && 'border-default-purple font-semibold')}`}
          onClick={() => setMenuOption('portabilidade')}>
          Portabilidade
        </li>
      </ul>

      <div className="grid gap-y-8 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full">
        {plans.map((plan, i) => (
          <div className="relative border rounded-sm shadow-xs max-w-75 mt-8 bg-white h-full" key={i}>
            {plan.cta && (
              <span className="absolute left-0 -top-3 uppercase text-white text-[10px] bg-default-purple py-1 px-2 rounded-sm tracking-wide">{plan.cta}</span>
            )}
            <div className="flex flex-col justify-between h-full">
              <div className="p-4">

                <p className="font-semibold">{plan.plan}</p>

                <div className="flex gap-4 mt-1 border-b pb-4">
                  <Smartphone size={32} className="mt-1" />
                  <p className="text-3xl">
                    {plan.pos} GB
                    {plan.posText ?
                      <span className="block text-sm opacity-75">
                        {plan.posText}</span> : ''}
                  </p>
                </div>

                <div className="flex items-center gap-2 border-b py-4">
                  <Switch />
                  <p className="text-lg font-bold opacity-75">{plan.portability}</p>
                </div>

                <div className="py-4 border-b">
                  <p className="font-semibold">5G mais rápido do mundo</p>
                </div>

                <div className="py-4 border-b">
                  <p className="font-semibold">Gestão de Voz e dados inclusa</p>
                </div>

                {plan.mdm && (
                  <div className="py-4 border-b">
                    <p className="text-3xl">
                      MDM <span className="block text-sm opacity-75">Gestão de dispositivos</span>
                    </p>
                  </div>
                )}

                {plan.chipLock && (
                  <div className="py-4 border-b">
                    <p className="font-semibold">Plano de Bloqueio de Chip</p>
                  </div>
                )}

                <div className="flex justify-between items-center bg-[#f8f8f8] rounded-sm mt-4 p-4">
                  <p className="max-w-40">1 ano grátis de IA com Perplexity Pro</p>
                  <Image src={'/perplexity-logo.webp'} alt="Perplexity Pro" width={32} height={32} />
                </div>
              </div>

              <div className="p-4">
                <p className="text-left pb-6 text-2xl">
                  {plan.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}/mês</p>
                <Button
                  variant={'vivoPlans'}
                  className="text-white font-normal w-full p-6 rounded-xs"
                  onClick={() => handleCheckout(plan)}>Assinar Plano</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}