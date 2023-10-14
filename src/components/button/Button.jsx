import React from 'react'

const Button = ({ bg = "red", className, onClick, width = "sm", children }) => {
    const styleBtn = {
        backgroundColor: bg,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        // fontWeight: 'bold',
        width: width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textAlign: "center",
    }

    if (width === 'sm') {
        styleBtn.width = '20px'
    }
    if (width === 'md') {
        styleBtn.width = '50px'
    }
    if (width === 'lg') {
        styleBtn.width = '100px'
    }
    if (width === 'xl') {
        styleBtn.width = '200px'
    }
    if (width === "full") {
        styleBtn.width = "100%"
    }


    return (
        <button onClick={onClick} className={className} type="submit" style={styleBtn}>
            {children}
        </button>
    )
}

export default Button