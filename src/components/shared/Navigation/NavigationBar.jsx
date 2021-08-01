import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { logout } from '../../../store/authSlice';

function Navigation() {
    const { admin, student, techer } = useSelector((state) => state.auth);
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch()
    const logoutSubmit = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <div>
            <header className="flex items-center bg-yellow-500 p-3">
                {student && (
                    <>
                        <Link className={`mr-3 ${location.pathname === '/student/track' ? 'font-bold' : ''}`} to="/student/track">ติดตามสถานะ</Link>
                        <Link className={`mr-3 ${location.pathname === '/student/create' ? 'font-bold' : ''}`} to="/student/create">ยื่นคำร้อง</Link>
                    </>
                )}
                {techer && (
                    <>
                        <Link className={`mr-3 ${location.pathname === '/involved/process' ? 'font-bold' : ''}`} to="/involved/process">ดำเนินการคำร้อง</Link>
                        <Link className={`mr-3 ${location.pathname === '/involved/alert' ? 'font-bold' : ''}`} to="/involved/alert">การแจ้งเตือน</Link>
                    </>
                )}
                {admin && (
                    <>
                        <Link className={`mr-3 ${location.pathname === '/admin/manage-request' ? 'font-bold' : ''}`} to="/admin/manage-request">จัดการคำร้อง</Link>
                        <Link className={`mr-3 ${location.pathname === '/admin/issue-document' ? 'font-bold' : ''}`} to="/admin/issue-document">ออกเอกสาร</Link>
                        <Link className={`mr-3 ${location.pathname === '/admin/settings' ? 'font-bold' : ''}`} to="/admin/settings">ตั้งค่าระบบ</Link>
                    </>
                )}
                <button onClick={logoutSubmit}>ออกจากระบบ</button>
            </header>
        </div>
    )
}

export default Navigation
