
export const Button = ({ children, type, onClick }) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className="bg-jonquil text-blackOlive px-4 py-2 rounded-md
                      transition-all duration-300 ease-in-out
                      hover:bg-selectiveYellow hover:scale-105
                      hover:shadow-[0_0_15px_rgba(244,211,94,0.4)]"
        >
            {children}
        </button>
    )
}
