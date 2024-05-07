import React, {useState} from "react";
import axios from 'axios';

const inputClasses = "mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
const labelClasses = "block text-sm font-medium text-zinc-700";
const buttonClasses = "w-full bg-blue-500 text-white p-2 rounded-lg";


const LoginPage = () => {


    const[account, setAccount]
        = useState({accountName:"",password:"",email:""})

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/bankAccount/create', account);
            if (response.status === 201) {
                console.log("Account wurde erfolgreich erstellt!: ", response.data);
                setAccount({ accountName:'', password:'',email: ""});
            }
        } catch (err) {
            console.error("Account konnte nicht erstellt werden!", err);
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        });
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-zinc-800 mb-4">BASTI'S UNFASSBARE BANK!1!11</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className={labelClasses}>Username</label>
                        <input type="text" id="accountName" name="accountName" className={inputClasses}
                               placeholder="Enter your username" value={account.accountName || ''}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className={labelClasses}>E-Mail</label>
                        <input type="email" id="email" name="email" className={inputClasses}
                               placeholder="Example@gmail.com" value={account.email || ''}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className={labelClasses}>Password</label>
                        <input type="password" id="password" name="password" className={inputClasses}
                               placeholder="Enter your password" value={account.password || ''}
                               onChange={handleInputChange}/>
                    </div>
                    <button type="submit" className={buttonClasses}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
