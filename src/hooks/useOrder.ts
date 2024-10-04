import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function userOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) //este arreglo sera de tipo OrderItem (un arreglo de orderItem)
    const [tip, setTip] = useState(0) 

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? //si encuentra que coincide un item con el que vamos a ingresar
                {...orderItem, quantity: orderItem.quantity + 1} : //copiamos todo el item y le agregamos +1 a la cantidad
                orderItem) //si no devolvemos el item de la orden y pasamos a evaluar el siguiente
            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])    
        }

    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id)) //filtrame todos los items que sean diferentes al id que le paso
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
    
    return {
        order,
        tip,
        setTip,
        placeOrder,
        addItem,
        removeItem
    }
}