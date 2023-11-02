import '../asserts/css/components/linkWithImg.css';
export default (props) => {
    const { src, alt, href } = props;
    return (
        <a className="link-with-img" href={href}>
            <img src={src} alt={alt} />
        </a>
    );
}