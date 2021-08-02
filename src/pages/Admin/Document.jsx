import React, { useEffect, useState } from 'react'
import { Step, Stepper } from 'react-form-stepper'
import ModalGlobal from '../../components/shared/Modal'
import { data } from '../Student'

function Document() {
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
                    </div>
                </header>

                <div className="mt-2">
                    <TableAdminRequest data={filterRequest} />
                </div>

            </div>
        </div>
    )
}
function TableAdminRequest() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="overflow-x-scroll">
                <table className="w-full text-left border-collapse border" style={{ minWidth: "1200px" }}>
                    <thead className="border-bottom py-10">
                        <tr>
                            <th className="border p-2" width="250px">คำร้อง</th>
                            <th className="border p-2" width="180px">รหัสนักศึกษา</th>
                            <th className="border p-2" width="180px">ชื่อนักศึกษา</th>
                            <th className="border p-2" width="180px">กำลังดำเนินการ</th>
                            <th className="border p-2" width="180px">วันที่ยื่นคำร้อง</th>
                            <th className="border p-2 text-center" width="150">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100">
                            <td className="border p-2" >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, eos!
                            </td>
                            <td className="border p-2">1232</td>
                            <td className="border p-2"> นายปรัชญา <br /> มณีโชติ</td>
                            <td className="border p-2"> ศดร.ปีเตอร์</td>
                            <td className="border p-2" >
                                {new Date().toLocaleString()}
                            </td>
                            <td className="border p-2 text-center">
                                <button className="px-3 py-1 bg-yellow-300 rounded-full text-white text-xs font-bold" onClick={() => setIsOpen(true)}>ดำเนินการ</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="border p-2" >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, eos!
                            </td>
                            <td className="border p-2">1232</td>
                            <td className="border p-2"> นายปรัชญา <br /> มณีโชติ</td>
                            <td className="border p-2"> - </td>
                            <td className="border p-2" >
                                {new Date().toLocaleString()}
                            </td>
                            <td className="border p-2 text-center">
                                <button className="px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold">พร้อมจัดส่ง</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ModalGlobal showModal={isOpen} setShowModal={setIsOpen} >
                <Stepper activeStep={2}>
                    <Step label="อาจารย์ที่ปรึกษา" />
                    <Step label="คณะกรรมการบริหารหลักสูตร" />
                    <Step label="คณะบดี คณะศิลปศาสตร์และวิทยาศาสตร์" />
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
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
                        </tr>
                        <tr>
                            <th className="py-1 w-32">รายละเอียด</th>
                            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit!</td>
                        </tr>
                        <tr>
                            <th className="py-1 w-32">นักศึกษา</th>
                            <td>นายปรัชญา มณีโชติ</td>
                        </tr>
                    </tbody>
                </table>
            </ModalGlobal>
        </>
    )
}
export default Document
