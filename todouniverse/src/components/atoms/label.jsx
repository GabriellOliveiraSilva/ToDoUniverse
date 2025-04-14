export const Label = ({ children, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="text-gray-300 font-bold text-2xl">
            {children}
        </label>
    )
}
