
import TextInput from "../components/shared/TestInput";
import PasswordInput from "../components/shared/PasswordInput";
const LoginComponent = () => {
    return (
        <div className = "w-full h-full flex flex-col items-center">
            <div className = "logo p-4 border-b border-solid border-gray-300 w-full flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="#e91e63"><circle cx="19" cy="33" r="9"/><path d="M24 6v27h4V14l11 3v-7z"/></g></svg>
            </div>
            <div className = "inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-4">To continue, login to Music.</div>
                <TextInput label="Email address or username" placeholder="Email address or username" className="my-6"/>
                <PasswordInput label="Password" placeholder="Password"/>
                <div className="w-full flex item-center justify-end my-8">
                    <button className="bg-red-400 font-semibold p-3 px-10 rounded-full">LOG IN</button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-xl">Don't have an account?</div>
            </div>
        </div>
    )
};

export default LoginComponent;