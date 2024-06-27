const TextInput =() =>{
    return  (
        <div className="testInputDiv flex flex-col space-y-2">
            <label for="123" className="font-semibold"> Sample label </label>
            <input type="text" placeholder="Place" className="p-1 border border-gray-400 border-solid rounded placeholder-gray-500" id="123"/>
        </div>
    );
    
};

export default TextInput;