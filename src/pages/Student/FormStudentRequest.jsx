import React, { useState } from 'react'
import ModalGlobal from '../../components/shared/Modal';

function FormStudentRequest() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="bg-white p-5">
            <div id="card">
                <header className="flex justify-between">
                    <div>
                        <span>ยื่นคำร้อง</span>
                    </div>
                </header>

                <div className="mt-2">
                    <form action="" className="grid gap-3">
                        <div className="grid md:grid-cols-3">
                            <div className="grid">
                                <label htmlFor="request">เลือกคำร้อง *</label>
                                <select name="request" id="request" className="bg-gray-100 p-2">
                                    <option value="">คำร้องแก้ E, I, R</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid">
                            <div>
                                <small className="text-gray-600">ข้อมูลที่ต้องใช้ *</small>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ml-2">
                                    <div className="grid">
                                        <label htmlFor="request">ชื่อพ่อ</label>
                                        <input type="text" name="emailDelivery" className="bg-gray-100 p-2" />
                                    </div>
                                    <div className="grid">
                                        <label htmlFor="request">ชื่อแม่</label>
                                        <input type="text" name="homeDelivery" className="bg-gray-100 p-2" />
                                    </div>
                                    <div className="grid">
                                        <label htmlFor="request">รูปพ่อแม่</label>
                                        <input type="file" name="homeDelivery" className="bg-gray-100 p-2" />
                                    </div>
                                    <div className="grid">
                                        <label htmlFor="request">รูปพ่อแม่</label>
                                        <input type="file" name="homeDelivery" className="bg-gray-100 p-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-12">
                            <div className="grid">
                                <label htmlFor="request">จำนวนคำร้อง *</label>
                                <input type="number" name="quantity" id="quantity" className="bg-gray-100 p-2" />
                            </div>
                        </div>
                        <div className="grid">
                            <div>
                                <small className="text-gray-600">ตัวเลือกในการจัดส่ง *</small>
                                <div className="grid ml-2">
                                    <div className="grid">
                                        <input type="checkbox" name="emailDelivery" className="bg-gray-100 p-2" />
                                        <label htmlFor="request">จัดส่งผ่านอีเมลล์</label>
                                    </div>
                                    <div className="grid">
                                        <input type="checkbox" name="homeDelivery" className="bg-gray-100 p-2" />
                                        <label htmlFor="request">จัดส่งที่บ้าน</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div>
                                <small className="text-gray-600">ข้อมูลติดต่อ *</small>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ml-2">
                                    <div className="grid">
                                        <label htmlFor="request">อีเมลล์</label>
                                        <input type="email" name="email" id="email" className="bg-gray-100 p-2" />
                                    </div>
                                    <div className="grid">
                                        <label htmlFor="request">หมายเลขโทรศัพท์</label>
                                        <input type="text" name="phone" id="phone" className="bg-gray-100 p-2" />
                                    </div>
                                    <div className="grid col-span-full md:col-span-2">
                                        <label htmlFor="request">ที่อยู่</label>
                                        <textarea name="address" id="address" rows="3" className="bg-gray-100 p-2" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button className="py-2 px-3 text-white bg-yellow-600 rounded">เพิ่ม</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="card">
                <header className="flex justify-between mt-5">
                    <div>
                        <span>คำร้องที่คุณเลือกไว้</span>
                    </div>
                </header>
                <TablePreRequest />
                <footer className=" flex justify-end py-3">
                    <button className="py-2 px-3 text-white bg-yellow-600 rounded" type="button"
                        onClick={() => setShowModal(true)}>ชำระเงิน</button>
                </footer>
            </div>
            <ModalGlobal showModal={showModal} setShowModal={setShowModal}>
                <span className="font-bold text-sm">
                    * ธนาคารกรุงไทย เลขที่บัญชี 33-345-34565-7 นางสาวสวยสด งดงาม
                </span>
                <table className="text-gray-700 w-full my-3">
                    <tbody>
                        <tr>
                            <th className=" text-sm w-32 text-left">คำร้องทั้งหมด</th>
                            <td className=" text-sm w-32 text-right">10</td>
                        </tr>
                        <tr>
                            <th className=" text-sm w-32 text-left">ค่าธรรมเนียม</th>
                            <td className=" text-sm w-32 text-right">10</td>
                        </tr>
                    </tbody>
                </table>
                <div className="grid">
                    <span className="font-bold text-sm">แนบสลิป</span>
                    <input type="file" name="homeDelivery" className="bg-gray-100 p-2" />
                </div>

                <div className="flex items-center justify-end pt-5 rounded-b">
                    <button
                        className="px-3 py-1 rounded text-red-500"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        ปิด
                    </button>
                    <button
                        className="bg-yellow-600 px-3 py-1 rounded text-white"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        ยืนยัน
                    </button>
                </div>
            </ModalGlobal>
        </div>
    )
}

function TablePreRequest() {
    return (
        <table className="w-full text-left border-collapse border">
            <thead className="border-bottom py-10">
                <tr>
                    <th className="border p-2" width="100px">#</th>
                    <th className="border p-2" width="200">คำร้อง</th>
                    <th className="border p-2 text-center" width="150px">จำนวน</th>
                    <th className="border p-2 text-center" width="150px">ค่าธรรมเนียม</th>
                    <th className="border p-2 text-center" width="70px">จัดการ</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100">
                    <td className="border p-2" >top</td>
                    <td className="border p-2" >top</td>
                    <td className="border p-2" >top</td>
                    <td className="border p-2" >top</td>
                    <td className="border p-2 text-center" >
                        <button className="bg-red-600 text-white px-2 py-1 rounded">ลบ</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th className="border p-2 text-right" colSpan="3">ค่าธรรมเนียมทั้งหมด</th>
                    <th className="border p-2 text-center" colSpan="2">10</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default FormStudentRequest
