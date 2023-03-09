function Button({
    //these are PROPS
    buttonText, 
    borderWidth, 
    borderColor, 
    backgroundColor, 
    textColor,
    borderRoundness
}){

    const buttonStyles = {
        border: `${borderWidth} solid ${borderColor}`,
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: borderRoundness ? '12px' : '0px'
        // borderColor: borderColor,
        // borderWidth: borderWidth
    }

    return (
        <button style={buttonStyles}>
            {buttonText}
        </button>
    )
}

export default Button;