import { formatCurrency } from "../utils"

type AmountDisplayProps = {
    label?: string,
    amount: number
}

export default function AmountDisplay({label, amount} : AmountDisplayProps) {
  return (
    <p className="text-2xl font-bold">
        {label && `${label}: `}
        <span className="font-black">{formatCurrency(amount)}</span>
    </p>
  )
}
