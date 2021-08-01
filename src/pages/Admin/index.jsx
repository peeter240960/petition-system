import React from 'react'

function Admin() {
    return (
        <div>
            <div id="card" className="bg-white p-5">
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
        </div>
    )
}

export default Admin
