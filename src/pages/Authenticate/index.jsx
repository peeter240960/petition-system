import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AdminLogin from '../../components/Authentication/AdminLogin';
import StudentLogin from '../../components/Authentication/StudentLogin';
import TecherLogin from '../../components/Authentication/TecherLogin';
import { setAuth } from '../../store/authSlice';

const loginType = {
    student: StudentLogin,
    admin: AdminLogin,
    techer: TecherLogin
};

function Authenticatr() {
    const [type, setType] = useState('student');
    const Component = loginType[type];
    const dispatch = useDispatch()
    const history = useHistory();
    function studentSubmit(e) {
        e.preventDefault()
        const data = {
            student: "null",
            techer: null,
            admin: null
        }
        dispatch(setAuth(data))
        history.push('/student/track')
    }
    function techerSubmit(e) {
        e.preventDefault()
        const data = {
            student: null,
            techer: "null",
            admin: null
        }
        dispatch(setAuth(data))
        history.push('/involved/process')
    }
    function adminSubmit(e) {
        e.preventDefault()
        const data = {
            student: null,
            techer: null,
            admin: "null"
        }
        dispatch(setAuth(data))
        history.push('/admin/manage-request')
    }
    return (
        <div>
            <nav className="bg-yellow-500 p-3 flex justify-end">
                <div className="grid grid-cols-1">
                    <Component onStudentLogin={studentSubmit} onTecherLogin={techerSubmit} onAdminLogin={adminSubmit} />
                    <div>
                        <input type="radio" onChange={() => setType("student")} value="student" checked={type === "student"} name="type" /> นักศึกษา
                        <input type="radio" onChange={() => setType("techer")} value="techer" checked={type === "techer"} name="type" /> อาจารย์
                        <input type="radio" onChange={() => setType("admin")} value="admin" checked={type === "admin"} name="type" /> งานทะเบียน
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Authenticatr
