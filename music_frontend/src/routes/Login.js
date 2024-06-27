
import TextInput from "../components/shared/TestInput";
const LoginComponent = () => {
    return (
        <div className = "w-full h-full flex flex-col items-center">
            <div className = "logo p-4 border-b border-solid border-gray-300 w-full flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="#e91e63"><circle cx="19" cy="33" r="9"/><path d="M24 6v27h4V14l11 3v-7z"/></g></svg>
            </div>
            <div className = "inputRegion w-1/ py-10 flex items-center justify-center flex-col">
                <div className="font-bold">To continue, login to Music.</div>
                <TextInput/>
            </div>
        </div>
    )
};

export default LoginComponent;