/**
 * Reusable component for displaying monetary amounts
 * Formats the amount as currency and optionally shows a label
 */
import { formatCurrency } from "../utils"

// Props type definition for the AmountDisplay component
type AmountDisplayProps = {
    label?: string,  // Optional label to show before the amount
    amount: number   // The monetary amount to display
}

export default function AmountDisplay({label, amount} : AmountDisplayProps) {
  return (
    <p className="text-2xl font-bold">
        {label && `${label}: `}
        <span className="font-black">{formatCurrency(amount)}</span>
    </p>
  )
}
