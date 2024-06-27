const TextInput =({label,placeholder}) =>{
    return  (
        <div className="testInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input type="text" placeholder={placeholder} className="p-1 border border-gray-400 border-solid rounded placeholder-gray-500" id={label}/>
        </div>
    );
    
};

export default TextInput;