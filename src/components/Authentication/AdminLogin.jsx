import React from 'react'

function AdminLogin({ onAdminLogin }) {
    return (
        <div>
            <form onSubmit={onAdminLogin} className="grid grid-cols-1 md:grid-cols-3 gap-3" >
                <input placeholder="รหัสงานทะเบียน" type="text" name="student_id" className="bg-gray-100 p-1" />
                <input placeholder="เลขประจำตัวประชาชน" type="password" name="student_card_id" className="bg-gray-100 p-1" />
                <button className="bg-yellow-800 text-white p-1 px-3 rounded">เข้าสู่ระบบ</button>
            </form>
        </div>
    )
}

export default AdminLogin
