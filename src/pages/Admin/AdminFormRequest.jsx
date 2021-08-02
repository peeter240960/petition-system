import React, { useState } from 'react'

function AdminFormRequest() {
    const [userContinute, setUserContinute] = useState([{ id: 1, number: 1, position: 2 }])
    const [dataRequired, setDataRequired] = useState([{ id: 1, data: 1, type: 2 }])
    return (
        <div className="p-5 bg-white">
            <form >
                เพิ่มคำร้อง
                <div className="grid gap-5">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="grid col-span-1">
                            <b>เลขที่ *</b>
                            <input type="text" name="homeDelivery" className="bg-gray-100 p-2" />
                        </div>
                        <div className="grid col-span-3">
                            <b>ชื่อคำร้อง *</b>
                            <input type="text" name="homeDelivery" className="bg-gray-100 p-2" />
                        </div>
                    </div>
                    <div className="grid">
                        <b>ประเภทคำร้อง/วัตถุประสงค์คำร้อง *</b>
                        <select name="objectiveType" id="objectiveType" className="bg-gray-100 p-2">
                            <option value="1">ขอเอกสาร</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="bg-gray-100 p-2" />
                        <b>ค่าธรรมเนียม</b>
                    </div>
                    <div className="grid">
                        <small>ผู้ดำเนินการ</small>
                        <div className="pl-2">
                            <div className="inline mr-2">
                                <input type="radio" name="homeDelivery" className="mr-1" />
                                <b>นักศึกษา ป.ตรี</b>
                            </div>
                            <div className="inline mr-2">
                                <input type="radio" name="homeDelivery" className="mr-1" />
                                <b>นักศึกษา ป.โท</b>
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="flex justify-between">
                            <small>ผู้ดำเนินการ</small>
                            <div>
                                <button className="px-2 font-bold text-yellow-500" onClick={() => {
                                    setUserContinute(old => [...old, [{ id: old.id + 1, number: 1, position: 2 }]])
                                }} >เพิ่ม</button>
                                <button className="px-2 font-bold text-red-500" onClick={() => {
                                    if (userContinute.length > 1) {
                                        setUserContinute(old => [old.pop()])
                                    }
                                }}>เคลียร์</button>
                            </div>
                        </div>
                        {
                            userContinute.map((user, i) => (
                                <div className="grid grid-cols-4 gap-5 pl-2" key={i}>
                                    <div className="grid col-span-1">
                                        <b>ลำดับ *</b>
                                        <input type="text" name="numbers[]" defaultValue={i + 1} id={i} className="bg-gray-100 p-2" />
                                    </div>
                                    <div className="grid col-span-3">
                                        <b>ตำแหน่ง *</b>
                                        <select name="positions[]" id={i} className="bg-gray-100 p-2">
                                            <option value="1">อาจารย์ที่ปรึกษา</option>
                                        </select>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="grid">
                        <div className="flex justify-between">
                            <small>ข้อมูลที่ต้องการ</small>
                            <div>
                                <button className="px-2 font-bold text-yellow-500" onClick={() => {
                                    setDataRequired(old => [...old, [{ id: old.id + 1, data: 1, type: 2 }]])
                                }} >เพิ่ม</button>
                                <button className="px-2 font-bold text-red-500" onClick={() => {
                                    if (dataRequired.length > 1) {
                                        setDataRequired(old => [old.pop()])
                                    }
                                }}>เคลียร์</button>
                            </div>
                        </div>
                        {
                            dataRequired.map((data, i) => (
                                <div className="grid grid-cols-4 gap-5 pl-2" key={i}>
                                    <div className="grid col-span-2">
                                        <b>ข้อมูล *</b>
                                        <select name="positions[]" id={i} className="bg-gray-100 p-2">
                                            <option value="1">ข้อมูล</option>
                                        </select>
                                    </div>
                                    <div className="grid col-span-2">
                                        <b>รปแบบ *</b>
                                        <div className="flex">
                                            <div className="inline pr-2">
                                                <input type="radio" className="mr-1" name={`type${i}`} id={`typeText${i}`} defaultChecked />
                                                <label htmlFor={`typeText${i}`}>กล่องข้อความ</label>
                                            </div>
                                            <div className="inline pr-2">
                                                <input type="radio" className="mr-1" name={`type${i}`} id={`typeFile${i}`} />
                                                <label htmlFor={`typeFile${i}`}>ฟอร์มอัปโหลด</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="text-right">
                    <button className="py-2 px-3 text-white bg-yellow-600 rounded">เพิ่ม</button>
                </div>
            </form>
        </div>
    )
}

export default AdminFormRequest
