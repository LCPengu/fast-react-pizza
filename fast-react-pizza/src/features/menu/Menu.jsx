import { getMenu } from '../services/apiRestaurant'
import { useLoaderData } from 'react-router-dom'
import MenuItem from './MenuItem.jsx'

function Menu() {
    const menu = useLoaderData()
    console.log(menu)
    return (
        <ul className="px-2 divide-y divide-stone-200">
            {menu.map((pizza) => {
                return <MenuItem key={pizza.id} pizza={pizza} />
            })}
        </ul>
    )
}

export async function loader() {
    const menu = await getMenu()
    return menu
}
export default Menu
