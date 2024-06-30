
import TextInput from "../components/shared/TestInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";
const SignupComponent = () => {
    return (
        <div className = "w-full h-full flex flex-col items-center">
            <div className = "logo p-4 border-b border-solid border-gray-300 w-full flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="#e91e63"><circle cx="19" cy="33" r="9"/><path d="M24 6v27h4V14l11 3v-7z"/></g></svg>
            </div>
            <div className = "inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-4 text-2xl">Signup for free to start listening.</div>
                <TextInput label="Email address" placeholder="Enter your email" className="my-6"/>
                <TextInput label="Confirm Email address" placeholder="Enter your email again" className="mb-6"/>
                <PasswordInput label="Create Password" placeholder="Enter a strong password here"/>
                <TextInput label="What should we called you?" placeholder="Enter a profile name" className="my-6"/>
                <div className="w-full flex item-center justify-center my-8">
                    <button className="bg-red-400 font-semibold p-3 px-10 rounded-full">SIGN UP</button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">Already have an account?</div>
                <div className="border border-gray-500 text-gray-400 w-full flex items-center justify-center py-4 rounded-full font-bold"><Link to="/login">LOG IN TO MUSIC</Link></div>
            </div>
        </div>
    )
};

export default SignupComponent;