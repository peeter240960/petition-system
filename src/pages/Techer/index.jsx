import React, { useState } from 'react'
import ModalGlobal from '../../components/shared/Modal'
import { Step, Stepper } from 'react-form-stepper';

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
    const [request] = useState(data)
    return (
        <div className="bg-white p-5">
            <div id="card">
                <header className="flex justify-between">
                    <div>
                        <span>คำร้องทั้งหมด</span>
                    </div>
                    <div>
                        <input type="text" name="search" id="search" className="bg-gray-100 py-1 px-2" placeholder="ค้นหา.."
                        />
                    </div>
                </header>

                <div className="mt-2">
                    <TablePreProcess data={request} />
                </div>
            </div>
        </div>
    )
}

function TablePreProcess({ data }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <table className="w-full text-left border-collapse border">
                <thead className="border-bottom py-10">
                    <tr>
                        <th className="border p-2" >คำร้อง</th>
                        <th className="border p-2" width="150">รหัสนักศึกษา</th>
                        <th className="border p-2" >ชื่อนักศึกษา</th>
                        <th className="border p-2 text-center" width="150px">จัดการ</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(data =>
                        <tr key={data.id} className="hover:bg-gray-100">
                            <td className="border p-2" >{data.name} </td>
                            <td className="border p-2" >{data.id}</td>
                            <td className="border p-2" >{data.name} </td>
                            <td className="border p-2 text-center" >
                                <button className="bg-yellow-600 text-white py-1 px-2 rounded" onClick={() => setIsOpen(true)}>
                                    ตรวจสอบ
                                </button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
            <ModalGlobal showModal={isOpen} setShowModal={setIsOpen} >
                <Stepper activeStep={2}>
                    <Step label="อาจารย์ที่ปรึกษา" />
                    <Step label="คณะกรรมการบริหารหลักสูตร" />
                    <Step label="คณะบดี คณะศิลปศาสตร์และวิทยาศาสตร์" />
                    <Step label="อาจารย์ที่ปรึกษา" />
                    <Step label="คณะกรรมการบริหารหลักสูตร" />
                </Stepper>
                <table className="text-left w-full">
                    <tbody>
                        <tr>
                            <th className="py-1 w-32">วันที่ยื่นคำร้อง</th>
                            <td>{new Date().toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th className="py-1 w-32">หมายเลขคำร้อง</th>
                            <td>123</td>
                        </tr>
                        <tr>
                            <th className="py-1 w-32">คำร้อง</th>
                            <td>123</td>
                        </tr>
                        <tr>
                            <th className="py-1 w-32">รายละเอียด</th>
                            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit!</td>
                        </tr>
                        <tr>
                            <th className="py-1 w-32">นักศึกษา</th>
                            <td>นายปรัชญา มณีโชติ</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="pt-3">
                                <div>
                                    <b>ข้อคิดเห็น</b>
                                    <textarea name="memo"
                                        className="w-full bg-gray-100 rounded" rows="3"></textarea>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/*footer*/}
                <div className="flex items-center justify-end pt-5 rounded-b">
                    <button
                        className="px-3 py-1 rounded text-red-500"
                        type="button"
                        onClick={() => setIsOpen(false)}
                    >
                        ไม่เห็นชอบ
                    </button>
                    <button
                        className="bg-yellow-600 px-3 py-1 rounded text-white"
                        type="button"
                        onClick={() => setIsOpen(false)}
                    >
                        เห็นชอบ
                    </button>
                </div>
            </ModalGlobal>
        </>
    )
}

export default Student
