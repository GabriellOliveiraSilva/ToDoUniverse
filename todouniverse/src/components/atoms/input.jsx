export const Input = ({ type, name, id, placeholder }) => {
    return (
        <input 
            type={type} 
            name={name} 
            id={id} 
            placeholder={placeholder} 
            className="w-full h-full text-gray-300 rounded-md border-2 border-gray-300 p-2
            transition-all duration-300 ease-in-out
            focus:border-jonquil focus:outline-none
            focus:shadow-[0_0_10px_rgba(244,211,94,0.3)]
            relative
            before:content-[''] before:absolute before:inset-0
            before:border-2 before:border-jonquil before:rounded-md
            before:scale-105
            before:opacity-0
            focus:before:opacity-100
            before:animate-[pulse_2s_ease-in-out_infinite]"
        />
    )
}


