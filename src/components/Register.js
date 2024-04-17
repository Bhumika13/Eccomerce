import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    const [id, idchange] = useState('');
    const [password, passwordchange] = useState('');
    const [email, emailchange] = useState('');
    const [name, namechange] = useState('');
    const [phone, phonechange] = useState('');
    const [country, countrychange] = useState('India');
    const [address, addresschange] = useState('');
    const [gender, genderchange] = useState('male');

    const navigate = useNavigate();

    const isValidate = () => {
        let isProceed = true;
        let errormessage = 'Please enter the value in'
        if (id === null || id === '') {
            isProceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isProceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isProceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isProceed = false;
            errormessage += ' Email';
        }
        if (!isProceed) {
            toast.warning(errormessage);
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isProceed = false;
                toast.warning('Please enter valid email address')
            }
        }
        return isProceed;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
        if (isValidate()) {
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered Successfully')
                navigate('/login')
            }).catch((err) => {
                toast.error('Failed: ' + err.message);
            });
        }
    }
    return (
        <div >
            <div className='flex justify-center w-full'>
                <form onSubmit={handlesubmit} className='w-[700px]'>
                    <div className='w-11/12 max-w-[900px] px-10 py-10 my-5 rounded-3xl bg-white border-2 border-gray-100'>
                        <h1 className='text-3xl font-semibold'>User Registration</h1>
                        <div className='mt-8'>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>User Name<span className="errmsg">*</span></label>
                                <input value={id} onChange={e => idchange(e.target.value)} placeholder='Enter User Name' className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 mb-2 bg-transparent"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Password<span className="errmsg">*</span></label>
                                <input value={password} onChange={e => passwordchange(e.target.value)} type="password" placeholder='Enter Password' className="w-full border-2 border-gray-100 mb-2 rounded-xl p-4 mt-1 bg-transparent"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Full Name<span className="errmsg">*</span></label>
                                <input value={name} onChange={e => namechange(e.target.value)} placeholder='Enter Full Name' className="w-full border-2 border-gray-100 rounded-xl p-4 mb-2 mt-1 bg-transparent"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Email<span className="errmsg">*</span></label>
                                <input value={email} onChange={e => emailchange(e.target.value)} placeholder='Enter Email' className="w-full border-2 border-gray-100 rounded-xl p-4 mb-2 mt-1 bg-transparent"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Phone<span className="errmsg">*</span></label>
                                <input value={phone} onChange={e => phonechange(e.target.value)} placeholder='Enter Email' className="w-full border-2 border-gray-100 rounded-xl p-4 mb-2 mt-1 bg-transparent"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Country<span className="errmsg">*</span></label>
                                <select value={country} onChange={e => countrychange(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 mb-2 bg-transparent">
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                    <option value="singapore">Singapore</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Address<span className="errmsg">*</span></label>
                                <textarea value={address} onChange={e => addresschange(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 mb-2 bg-transparent"></textarea>
                            </div>
                            <div className='flex flex-col'>
                                <div className="form-group">
                                    <label className='text-lg font-medium'>Gender</label>
                                    <br></br>
                                    <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                    <label>Male</label>
                                    <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                    <label>Female</label>
                                </div>
                            </div>

                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign up</button>
                            <button
                                className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                                 <Link to={'/login'}>
                                Login</Link>
                            </button>
                        </div>
                       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
