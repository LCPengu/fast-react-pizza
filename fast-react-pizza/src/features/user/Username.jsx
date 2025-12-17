import { useSelector } from 'react-redux'

function Username() {
    const user = useSelector((state) => state.user.userName)
    if (!user) return null
    return (
        <div className="hidden text-sm font-semibold md:block">
            <p>{user}</p>
        </div>
    )
}

export default Username
