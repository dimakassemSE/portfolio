

export default (props) => {
    const { border = true, text, fillOnHover = true } = props;
    return (
        <a className={`mx-auto px-1 primary-color main-button link-secondary font-size-20
        ${fillOnHover ? 'fill-background-hover' : ''}  
        ${border ? 'secondary-border' : ''}`}
            style={{
                textDecoration: 'none',
            }}
            
            href="#connect">{text}</a>
    )
}