import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import userOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = userOrder() //extraigo de la funcion las propiedades

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2"> {/* md significa que a partir de md se genere 2 columnas */}
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {order.length ?(
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />
                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />
                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />

              </>
            ) : (
                    <p className='text-center'>La orden esta vacia</p>
                
            )}
          </div>
        </div>
      </main>

    </>
  )
}

export default App
