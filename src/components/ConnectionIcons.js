import facebookF from '../asserts/icon/facebook-f.svg';
import githup from '../asserts/icon/github.svg';
import linkedinIn from '../asserts/icon/linkedin-in.svg';
import LinkWithIcon from "./LinkWithIcon";

const links = [
    {
        href: 'https://www.facebook.com/DemoCoding',
        img: facebookF,
        title: 'facebook'
    }, {
        href: 'https://www.linkedin.com/in/dima-kassem-4b1b8b146',
        img: linkedinIn,
        title: 'linkedIn'
    }, {
        href: 'https://github.com/dimakassemSE',
        img: githup,
        title: 'githup'
    }
]

export const ConnectionIcons = () => {
    return (
        <div className='inlineBlock' id='connection-icon-box'>
            {links.map(link => {
                return (
                    <LinkWithIcon href={link.href} src={link.img} alt={link.title} />

                )
            })}


        </div>
    )

}