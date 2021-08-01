import React, { useEffect, useState } from 'react'
import TableRequest from '../../components/Student/TableRequest'
export const data = [
    {
        id: 1,
        name: "Lorem ipsum dolor sit amet.",
        status: "waiting"
    },
    {
        id: 2,
        name: "Lorem ipsum dolor sit amet.",
        status: "pending"
    },
    {
        id: 3,
        name: "Lorem ipsum dolor sit amet.",
        status: "success"
    },
    {
        id: 4,
        name: "Lorem ipsum dolor sit amet.",
        status: "cancel"
    }
]
function Student() {
    const [search, setSearch] = useState('')
    const [request] = useState(data)
    const [filterRequest, setFilterRequest] = useState(data)
    useEffect(() => {
        setFilterRequest(
            request.filter((req) =>
                req.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, request])
    return (
        <div className="bg-white p-5">
            <div id="card">
                <header className="flex justify-between">
                    <div>
                        <span>ติดตามสถานะ</span>
                    </div>
                    <div>
                        <input type="text" name="search" id="search" className="bg-gray-100 py-1 px-2" placeholder="ค้นหา.."
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </header>

                <div className="mt-2">
                    <TableRequest data={filterRequest} />
                </div>

            </div>
        </div>
    )
}

export default Student
