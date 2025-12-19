import React from 'react'
import Button from '../ui/Button'
import { useFetcher } from 'react-router-dom'

export default function UpdateOrder({ order }) {
    const fetcher = useFetcher()
    return (
        <fetcher.form method="PATCH" className="text-right">
            <Button type="primary">Make priority</Button>
        </fetcher.form>
    )
}

async function action({ req, params }) {
    console.log('update')
    return null
}
