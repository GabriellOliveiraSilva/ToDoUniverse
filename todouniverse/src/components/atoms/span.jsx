export const Span = ({ children }) => {
    return (
        <span className="text_yellow_primary text-sm" style={{ textDecoration: 'underline', cursor: 'pointer'  }}>
            {children}
        </span>
    )
}
