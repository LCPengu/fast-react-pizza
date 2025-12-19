import { formatCurrency } from '../util/helpers'
import Button from '../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getItemQuantity } from '../cart/cartSlice'
import DeleteItem from '../cart/DeleteItem'
import UpdateItemQuantity from '../cart/UpdateItemQuantity'

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    const dispatch = useDispatch()
    const currentQuanity = useSelector(getItemQuantity(id))
    const isInCart = currentQuanity > 0
    console.log(currentQuanity)

    function handleAddToCart(pizzaId) {
        const newItem = {
            pizzaId,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        }
        dispatch(addItem(newItem))
    }

    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm italic capitalize text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                    {isInCart && (
                        <div className="flex items-center gap-3 sm:gap-8">
                            <UpdateItemQuantity
                                pizzaId={id}
                                currentQuantity={currentQuanity}
                            />
                            <DeleteItem pizzaId={id} />
                        </div>
                    )}
                    {!soldOut && !isInCart && (
                        <Button
                            type="small"
                            disabled={soldOut}
                            onClick={() => {
                                handleAddToCart(id)
                            }}
                        >
                            {soldOut ? 'Sold out' : 'Add to cart'}
                        </Button>
                    )}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
