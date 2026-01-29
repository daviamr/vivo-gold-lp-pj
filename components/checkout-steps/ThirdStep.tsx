'use client'
import { Customer } from "@/interface/Customer"
import { useEffect, useState } from "react"

function Index() {
  const [customerData, setCustomerData] = useState<Customer | null>(null)

  useEffect(() => {
    const customerStr = localStorage.getItem('customer')
    if (customerStr) {
      setCustomerData(JSON.parse(customerStr))
    }
  }, [])

  return (
    <div className="mt-8">
      <div className="bg-[#F8F8F8] p-4">
        <p className="mb-4">E-mail</p>
        <p>{customerData?.firstStepData?.email}</p>
      </div>
    </div>
  )
}

export default Index