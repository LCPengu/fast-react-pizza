//mport React from "react";
import Header from './Header'
import CartOverview from '../cart/CartOverview.jsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader.jsx'

export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'
    return (
        <div className="grid-row-[auto_1fr_auto] grid h-screen">
            {isLoading && <Loader />}
            <Header />
            <div className="overflow-auto">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    )
}
