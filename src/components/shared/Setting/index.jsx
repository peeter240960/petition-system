import React, { useState } from 'react'

function FormSetting() {
    const [isLine, setIsLine] = useState(false)
    const [isEmail, setIsEmail] = useState(true)
    return (
        <div>
            <form >
                <div className="grid">
                    <small className="text-gray-600">ตั้งค่าการแจ้งเตือน *</small>
                    <div className="pl-2">
                        <div className="flex mr-2">
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
                        <button className="bg-yellow-500 text-white font-bold rounded px-3 py-1">บันทึก</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default FormSetting
