import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice'
import { formatCurrency } from '../util/helpers'

function CartOverview() {
    const totalPrice = useSelector(getTotalCartPrice)
    const totalCartQuanity = useSelector(getTotalCartQuantity)
    //if (!totalCartQuanity) return null
    const price = formatCurrency(totalPrice)

    return (
        <div className="flex items-center justify-between px-4 py-4 space-x-4 uppercase bg-stone-800 text-stone-200 sm:px-6">
            <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
                <span>
                    {totalCartQuanity
                        ? `Amount of Pizzas : ${totalCartQuanity}`
                        : ''}
                </span>
                <span>
                    {totalPrice ? `cost : ${price}` : 'No pizzas added yet'}
                </span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview
