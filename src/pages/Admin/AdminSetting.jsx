import React from 'react'
import { useState } from 'react'
import ModalGlobal from '../../components/shared/Modal'
import FormSetting from '../../components/shared/Setting'

function Setting() {
    return (
        <div className="bg-white p-5">
            <div id="setting-alert" className="mb-2">
                <FormSetting />
            </div>
            <div id="setting-request">
                <div className="grid">
                    <small className="text-gray-600">ตั้งค่าการจัดการคำร้อง</small>
                    <div className="pl-2">
                        <Involved />
                        <div className="my-2"></div>
                        <RequiredData />
                        <div className="my-2"></div>
                        <ObjectiveType />
                        <div className="my-2"></div>
                        <form >
                            <div className="grid">
                                <label htmlFor="request">ค่าธรรมเนียม *</label>
                                <input type="text" name="emailDelivery" className="bg-gray-100 p-2" />
                            </div>
                            <button className="bg-yellow-500 text-white font-bold rounded px-3 py-1 my-2">บันทึก</button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="author">
                <div className="grid pt-2">
                    <small className="text-gray-600">อื่น ๆ</small>
                    <form className="pl-2">
                        <div className="grid">
                            <label htmlFor="request">รายละเอียดการชำระเงิน *</label>
                            <textarea name="" id="" cols="30" rows="3" className="bg-gray-100 p-2"></textarea>
                        </div>
                        <button className="bg-yellow-500 text-white font-bold rounded px-3 py-1 my-2">บันทึก</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Involved() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <b className="text-gray-600">ผู้ที่เห็นชอบ *</b>
                    <div className="pl-2 pb-2">
                        <input type="text" className="bg-gray-100 p-2" placeholder="ค้นหา.." />
                        <button className="p-2 rounded bg-yellow-600 text-white" onClick={() => setIsOpen(true)}>เพิ่ม</button>
                    </div>
                </div>
                <div className="overflow-y-scroll" style={{ maxHeight: '300px' }}>
                    <table className="w-full text-left border-collapse border" style={{
                        minWidth: "600px"
                    }}>
                        <thead className="border-bottom py-10">
                            <tr>
                                <th className="border p-2" >ตำแหน่ง</th>
                                <th className="border p-2" width="150">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="border p-2" >Lorem ipsum dolor sit amet.</td>
                                <td className="border p-2" >
                                    <button>แก้ไข</button>
                                    <button>ลบ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table >
                </div>
            </div>
            <ModalGlobal showModal={isOpen} setShowModal={() => setIsOpen(false)} title={"ตำแหน่งผู้ที่เห็นชอบ"} >
                <div>
                    <form >
                        <div className="grid mb-2">
                            <b>ตำแหน่ง</b>
                            <input type="text" className="bg-gray-100 p-2" />
                        </div>
                        <button className="p-2 rounded bg-yellow-600 text-white" onClick={() => setIsOpen(false)}>เพิ่ม</button>
                    </form>
                </div>
            </ModalGlobal>
        </>
    )
}
function RequiredData() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <b className="text-gray-600">ข้อมูลที่ต้องการ *</b>
                    <div className="pl-2 pb-2">
                        <input type="text" className="bg-gray-100 p-2" placeholder="ค้นหา.." />
                        <button className="p-2 rounded bg-yellow-600 text-white" onClick={() => setIsOpen(true)}>เพิ่ม</button>
                    </div>
                </div>
                <div className="overflow-y-scroll" style={{ maxHeight: '300px' }}>
                    <table className="w-full text-left border-collapse border" style={{
                        minWidth: "600px"
                    }}>
                        <thead className="border-bottom py-10">
                            <tr>
                                <th className="border p-2" >ข้อมูล</th>
                                <th className="border p-2" width="150">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="border p-2" >Lorem ipsum dolor sit amet.</td>
                                <td className="border p-2" >
                                    <button>แก้ไข</button>
                                    <button>ลบ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table >
                </div>
            </div>

            <ModalGlobal showModal={isOpen} setShowModal={() => setIsOpen(false)} title={"ข้อมูลที่ต้องการ"} >
                <div>
                    <form >
                        <div className="grid mb-2">
                            <b>ข้อมูล</b>
                            <input type="text" className="bg-gray-100 p-2" />
                        </div>
                        <button className="p-2 rounded bg-yellow-600 text-white" onClick={() => setIsOpen(false)}>เพิ่ม</button>
                    </form>
                </div>
            </ModalGlobal>
        </>
    )
}

function ObjectiveType() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <b className="text-gray-600">ประเภทคำร้อง/วัตถุประสงค์คำร้อง *</b>
                    <div className="pl-2 pb-2">
                        <input type="text" className="bg-gray-100 p-2" placeholder="ค้นหา.." />
                        <button className="p-2 rounded bg-yellow-600 text-white" onClick={() => setIsOpen(true)}>เพิ่ม</button>
                    </div>
                </div>
                <div className="overflow-y-scroll" style={{ maxHeight: '300px' }}>
                    <table className="w-full text-left border-collapse border" style={{
                        minWidth: "600px"
                    }}>
                        <thead className="border-bottom py-10">
                            <tr>
                                <th className="border p-2" >ประเภท/วัตถุประสงค์</th>
                                <th className="border p-2" width="150">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="border p-2" >Lorem ipsum dolor sit amet.</td>
                                <td className="border p-2" >
                                    <button>แก้ไข</button>
                                    <button>ลบ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table >
                </div>
            </div>

            <ModalGlobal showModal={isOpen} setShowModal={() => setIsOpen(false)} title={"ข้อมูลที่ต้องการ"} >
                <div>
                    <form >
                        <div className="grid mb-2">
                            <b>ประเภท/วัตถุประสงค์</b>
                            <input type="text" className="bg-gray-100 p-2" />
                        </div>
                        <button className="p-2 rounded bg-yellow-600 text-white" onClick={() => setIsOpen(false)}>เพิ่ม</button>
                    </form>
                </div>
            </ModalGlobal>
        </>
    )
}
export default Setting
