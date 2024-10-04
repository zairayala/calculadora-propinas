import { useMemo } from "react"
import { OrderItem } from "../types"
import { formartCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}


//usamos useMemo para definir una constante que podra cambiar en vez de que sea una funcion 

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])


    // const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    // const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])

    // const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formartCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formartCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formartCurrency(totalAmount)}</span>
                </p>

                <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                    disabled={totalAmount === 0}/**deshabilitado cuando total es 0 */
                    onClick={placeOrder} 
                    > 
                    
                    GUARDAR ORDEN
                </button>
            </div>
            <button></button>
        </>
    )
}
