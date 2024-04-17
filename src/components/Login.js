import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch('http://localhost:8000/user/' + username).then((res) => {
        return res.json();
      }).then((resp) => {
        console.log(resp)
        if (Object.keys(resp).length === 0) {
          toast.error('Please enter valid username');
        } else {
          if (resp.password === password) {
            toast.success('Login Successfully');
            sessionStorage.setItem('username', username);
            usenavigate('/')
          } else {
            toast.error('Please enter valid credentials');

          }
        }
      }).catch((err) => {
        toast.error('Login Failed due to: ' + err.message);
      })
    }
  }
  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <div className='flex justify-center w-full'>
      <form onSubmit={ProceedLogin} className='w-[700px]'>
        <div className=' w-11/12 max-w-[700px] px-10 py-10 my-5 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-3xl font-semibold'>Login</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter you details.</p>
          <div className='mt-8'>
            <div className='flex flex-col'>
              <label className='text-lg font-medium'>User Name<span className="errmsg">*</span></label>
              <input value={username} placeholder='Enter your user name' onChange={e => usernameupdate(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"></input>

            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-lg font-medium'>Password<span className="errmsg">*</span></label>
              <input type="password" placeholder="Enter your email" value={password} onChange={e => passwordupdate(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"></input>

            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
              <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign in</button>

            </div>
            <div className='mt-8 flex justify-center items-center'>
              <p className='font-medium text-base'>Don't have an account?</p>          
              <button
                className='ml-2 font-medium text-base text-violet-500'><Link to={'/register'}>Sign up</Link></button>
            </div>
          </div>
        </div>
      </form>
    </div>

  )
}

export default Login
