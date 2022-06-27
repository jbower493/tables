import React, { useState } from 'react'
import { useGetUsersQuery } from './api'
import { Headings, headings } from './types'
import './style.css'

export default function FilteredUsers() {
    const [filter, setFilter] = useState<Headings>(headings[0])

    const { data, error, isLoading } = useGetUsersQuery();

    if (error) return <h1>Error</h1>
    if (isLoading) return <h1>Loading</h1>

    const list = data ? [...data] : []

    return (
        <div className={`users filtered`}>
            <table>
                <thead>
                    {headings.map((heading, index) => (
                        <th
                            key={index}
                            className={heading === filter ? 'filter' : ''}
                            onClick={() => setFilter(heading)}
                        >
                            {heading}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {list
                        .map((user, index) => (
                            <tr key={index}>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.registered.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
