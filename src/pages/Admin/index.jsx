import React, { useEffect, useState } from 'react'
import { data } from '../Student'

function Admin() {
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
        <div>
            <div id="card" className="bg-white p-5">
                <header className="flex justify-between">
                    <div>
                        <span>คำร้องทั้งหมด</span>
                    </div>
                    <div className="flex">
                        <input type="text" name="search" id="search" className="bg-gray-100 py-1 px-2" placeholder="ค้นหา.."
                            onChange={e => setSearch(e.target.value)}
                        />
                        <div className="mx-1"></div>
                        <button className="px-2 py-1 rounded bg-yellow-600 text-white">เพิ่ม</button>
                    </div>
                </header>

                <div className="mt-2">
                    <TableAdminRequest data={filterRequest} />
                </div>

            </div>
        </div>
    )
}
function TableAdminRequest({ data }) {
    return (
        <div className="overflow-x-scroll">
            <table className="w-full text-left border-collapse border" style={{ minWidth: "800px" }}>
                <thead className="border-bottom py-10">
                    <tr>
                        <th className="border p-2" width="200px">#</th>
                        <th className="border p-2" >คำร้อง</th>
                        <th className="border p-2" width="180px">วันที่ออกคำร้อง</th>
                        <th className="border p-2" width="100">จัดการ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(data =>
                            <tr key={data.id} className="hover:bg-gray-100">
                                <td className="border p-2" >{data.id}</td>
                                <td className="border p-2" >{data.name} </td>
                                <td className="border p-2" >
                                    {new Date().toLocaleString()}
                                </td>
                                <td className="border p-2 grid gap-1">
                                    <button className="px-2 py-1 bg-yellow-600 rounded text-white">แก้ไข</button>
                                    <button className="px-2 py-1 bg-red-600 rounded text-white">ลบ</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Admin
