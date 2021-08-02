import React from 'react'
import { Link } from 'react-router-dom';


function TableRequest({ data }) {
    return (
        <div className="overflow-x-scroll">
            <table className="w-full text-left border-collapse border" style={{
                minWidth: "600px"
            }}>
                <thead className="border-bottom py-10">
                    <tr>
                        <th className="border p-2" width="150px">หมายเลขติดตาม</th>
                        <th className="border p-2" >คำร้อง</th>
                        <th className="border p-2 text-center" width="150px">สถานะ</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(data =>
                        <tr key={data.id} className="hover:bg-gray-100">
                            <td className="border p-2" >{data.id}</td>
                            <td className="border p-2" >{data.name} </td>
                            <td className="border p-2 text-center" >
                                <SwitchCaseStatus status={data.status} />
                            </td>
                        </tr>)}

                </tbody>
            </table >
        </div>
    )
}

function SwitchCaseStatus({ status }) {
    switch (status) {
        case 'waiting':
            return (
                <Link to="/" className="bg-gray-600 text-white text-sm py-1 px-2 rounded-full">รอจ่าย
                </Link>
            );
        case 'pending':
            return (
                <Link to="/" className="bg-yellow-600 text-white text-sm py-1 px-2 rounded-full">กำลังดำเนิน
                </Link>)
                ;
        case 'success':
            return (
                <Link to="/" className="bg-green-600 text-white text-sm py-1 px-2 rounded-full">สำเร็จ
                </Link>
            );
        default:
            return (
                <Link to="/" className="bg-red-600 text-white text-sm py-1 px-2 rounded-full">ไม่อนุมัติ
                </Link>
            );
    }
}

export default TableRequest
