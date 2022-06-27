import React, { useState } from 'react'
import { useGetUsersQuery } from './api'
import { Headings, headings } from './types'
import './style.css'

export default function SortedUsers() {
    const [sort, setSort] = useState<Headings>(headings[0])

    const { data, error, isLoading } = useGetUsersQuery();

    if (error) return <h1>Error</h1>
    if (isLoading) return <h1>Loading</h1>

    const list = data ? [...data] : []

    return (
        <div className={`users sorted`}>
            <table>
                <thead>
                    {headings.map((heading, index) => (
                        <th
                            key={index}
                            className={heading === sort ? 'sort' : ''}
                            onClick={() => setSort(heading)}
                        >
                            {heading}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {list
                        .sort((a, b) => {
                            if (sort === Headings.age) return a.registered.age - b.registered.age;
                            if (sort === Headings.first || sort === Headings.last) return a.name[sort] < b.name[sort] ? -1 : 1
                            return a[sort] < b[sort] ? -1 : 1
                        })
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
