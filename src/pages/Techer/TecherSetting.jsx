import React, { useState } from 'react'

function TecherSetting() {
    const [isLine, setIsLine] = useState(false)
    const [isEmail, setIsEmail] = useState(true)
    return (
        <div className="bg-white p-5">
            <div id="card">
                <header className="flex justify-between">
                    <div>
                        <span>ตั้งค่าการแจ้งเตือน</span>
                    </div>
                </header>
                <section>
                    <form >
                        <div className="flex">
                            <div className="mb-3 mr-3">
                                <input type="checkbox" name="checkbox" id="checkbox" className="mr-1" checked={isEmail} onChange={() => setIsEmail(!isEmail)} />
                                <label htmlFor="request">อีเมลล์</label>
                            </div>
                            <div className="mb-3">
                                <input type="checkbox" name="checkbox" id="checkbox" className="mr-1" checked={isLine} onChange={() => setIsLine(!isLine)} />
                                <label htmlFor="request">ไอดีไลน์</label>
                            </div>
                        </div>
                        {isEmail && <div className="grid mb-3">
                            <label htmlFor="request">อีเมลล์</label>
                            <input type="email" name="email" id="email" className="bg-gray-100 p-2" />
                        </div>}
                        {isLine && <div className="grid mb-3">
                            <label htmlFor="request">ไอดีไลน์</label>
                            <input type="text" name="line_id" id="line_id" className="bg-gray-100 p-2" />
                        </div>}
                        <div className="flex justify-end">
                            <button className="bg-yellow-600 text-white py-1 px-2 rounded">บันทึก</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default TecherSetting
