import { useCallback, useState } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false);
    const [numAllowed, setNumAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passGen = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*(){}~`"

        for (let i = 1; i <= Array.length; i++) {
            let char = Math.floor(Math.random() + str.length + 1)
            pass = str.charAt(char);
        }
        setPassword(pass)
    }, [length, charAllowed, numAllowed, setPassword])
    return (
        <div className='w-50 mt-4 bg-secondary mx-auto px-4 my-8 text-warning shadow-sm rounded'>
            <h1 className='text-center'>Password Generator</h1>
            <input type='text' value={password} placeholder='Password' className='outline-none py-1 px-3 rounded' readOnly />
            <button className='bg-primary text-white outline-none shadow-none'>Copy</button>
        </div>
    )
}

export default PasswordGenerator
