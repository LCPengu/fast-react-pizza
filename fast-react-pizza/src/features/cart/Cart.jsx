import LinkButton from '../ui/LinkButton'
import Button from '../ui/Button'
import CartItem from './CartItem.jsx'
import { useSelector } from 'react-redux'
import { getCart } from './cartSlice.js'
import { useDispatch } from 'react-redux'
import { clearCart } from './cartSlice.js'
import EmptyCart from './EmptyCart.jsx'

function Cart() {
    const userName = useSelector((state) => state.user.userName)
    const cart = useSelector(getCart)
    const dispatch = useDispatch()
    //console.log(cart)

    if (cart.length === 0) {
        return <EmptyCart />
    }
    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {userName}
            </h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((item) => {
                    return <CartItem key={item.key} item={item} />
                })}
            </ul>

            <div className="mt-6 space-x-2">
                <Button type="primary" to="/order/new">
                    Order pizzas
                </Button>
                <Button type="secondary" onClick={() => dispatch(clearCart())}>
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
