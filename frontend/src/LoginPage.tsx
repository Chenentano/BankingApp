
const inputClasses = "mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
const labelClasses = "block text-sm font-medium text-zinc-700";
const buttonClasses = "w-full bg-blue-500 text-white p-2 rounded-lg";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-zinc-800 mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className={labelClasses}>Username</label>
                        <input type="text" id="username" name="username" className={inputClasses} placeholder="Enter your username" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className={labelClasses}>Password</label>
                        <input type="password" id="password" name="password" className={inputClasses} placeholder="Enter your password" />
                    </div>
                    <button type="submit" className={buttonClasses}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
