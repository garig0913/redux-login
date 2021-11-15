import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postUsers } from '../ACTION/userActions';
import WebFont from 'webfontloader'
import '../css/login.css'
import Input from './Input';

const Signup = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Exo 2, Monoton']
            }
        });
    }, []);


    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signupHandler = () => {
        if (username && email && password !== '') {
            const formData = {
                username: username,
                email: email,
                password: password
            }

            dispatch(postUsers(formData))
        }
    }

    return <>
        <div className='header'></div>
        <div className='w-screen h-screen city flex flex-col justify-center items-center'>
            <div className='blur rounded-2xl flex flex-col justify-center items-center'>
                {/* <div className='opacity rounded-lg' /> */}
                <div className='flex flex-col text-gray-100'>
                    <div className='flex'>
                        <i class="fab fa-blogger text-4xl mr-2 icon"></i>
                        <h2 className='font-light mr-0.5'>Logo</h2>
                        <h2 className='font-normal x mt-px'>X</h2>
                    </div>
                    <p className='ml-1'>Create an account</p>
                    <Input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={signupHandler} className='loginBtn rounded-sm font-semibold'>Sign up</button>
                </div>
            </div>
            <button><p className='text-gray-100 m-3 hover:text-indigo-400 textShadow'>Already have an account?</p></button>
            <ul className='text-gray-400 flex terms'>
                <li className='mr-2 text-xs hover:text-white'><button>Privacy</button></li>
                <li className='mr-2 text-xs hover:text-white'><button>Policy</button></li>
                <li className='mr-6 text-xs hover:text-white'><button>Terms of use</button></li>
            </ul>
        </div>
    </>
}

export default Signup