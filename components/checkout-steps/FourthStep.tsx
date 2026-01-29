'use client'

import { withMask } from "use-mask-input";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Controller, UseFormReturn } from "react-hook-form";

function Index({ form }: SecondStepProps) {
  const { formState: { errors }, control, setValue, watch } = form

  return (
    <div className="mt-8">

      <div className="grid gap-4 lg:grid-cols-2">

        <div className="lg:col-span-2">
          <p className="text-2xl font-semibold text-gray-800 mb-4">Confirmação via SMS</p>
          <p className="font-light text-[13px]"><span className="font-bold text-red-700">IMPORTANTE!</span> O SMS para realização da biometria será enviado ao número informado abaixo:</p>
        </div>

        <div className="lg:col-span-2">
          <Label className="text-1xl font-normal mb-1" htmlFor="primaryTel">Telefone Principal</Label>
          <Controller
            name="primaryTel"
            control={control}
            render={({ field }) => (
              <Input
                id="primaryTel"
                type="text"
                value={field.value || ''}
                onChange={field.onChange}
                ref={withMask('(99) 9 9999-9999', {
                  placeholder: '',
                  showMaskOnHover: false,
                  showMaskOnFocus: false
                })} />
            )} />
          {errors.primaryTel && (
            <p className="text-red-500 text-sm mt-1">{String(errors.primaryTel.message)}</p>)}
        </div>
        <span className="text-[13px] font-light lg:col-span-2">Se desejar, adicione um segundo número de contato para garantir o recebimento da mensagem</span>

        <div className="lg:col-span-2">
          <Label className="text-1xl font-normal mb-1" htmlFor="secondaryTel">Segundo número de contato (opcional)</Label>
          <Controller
            name="secondaryTel"
            control={control}
            render={({ field }) => (
              <Input
                id="secondaryTel"
                type="text"
                value={field.value || ''}
                onChange={field.onChange}
                ref={withMask('(99) 9 9999-9999', {
                  placeholder: '',
                  showMaskOnHover: false,
                  showMaskOnFocus: false
                })} />
            )} />
          {errors.secondaryTel && (
            <p className="text-red-500 text-sm mt-1">{String(errors.secondaryTel.message)}</p>)}
        </div>

        <div className="grid gap-2 px-2 mb-2 lg:col-span-2">
          <div>
            <p className="text-2xl mb-2">Termos de Contrato</p>
            <p className="text-sm opacity-75 mb-4">Ao concluir, você concorda com a <a href="#" className="text-default-purple underline">Política de privacidade e uso de dados da Vivo.</a></p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Controller
              name="termsOfUse"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="termsOfUse"
                  checked={field.value}
                  onCheckedChange={field.onChange} />
              )} />
            <label htmlFor="termsOfUse" className={`font-semibold text-sm ${errors.termsOfUse ? 'text-red-500 underline' : ''}`}>Declaro que estou de acordo com os <span className="underline text-default-purple">documentos contratuais</span> da oferta, e ciente das seguintes condições:</label>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="text-xs opacity-75">
              &bull; O primeiro reajuste pode ser aplicado em prazo inferior a 12 meses, observado o disposto nas Condições de oferta.
            </li>
            <li className="text-xs opacity-75">
              &bull; Ao fim da vigência da oferta contratada, pode haver migração para outra oferta de características similares, com comunicação prévia mínima de 30 dias.
            </li>
            <li className="text-xs opacity-75">
              &bull; Esta oferta provê a <a href="#" className="underline text-default-purple">renovação automática da fidelização</a> sendo permitida a manifestação de oposição a qualquer momento pelos canais de atendimento.
            </li>
            <li className="text-xs opacity-75">
              &bull; As condições contratuais da oferta, incluindo etiqueta e complemento, estão disponíveis para <a href="#" className="underline text-default-purple">consulta por meio do código</a> no repositório disponível no detalhe da assinatura.
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Index

type SecondStepProps = {
  form: UseFormReturn<any>,
}