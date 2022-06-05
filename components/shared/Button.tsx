import Link from 'next/link';

interface IButton {
    type: string,
    text: string,
    href: string, 
}

const Button: React.FC<IButton> = ({type, text, href}) => {
    return (
        <>
            {
                type == 'button' && 
                <button className="button">
                    { text }
                </button>
            }

            {
                type == 'external-link' &&
                <a className='button button--link' href={href} rel="noreferrer" target="_blank">
                    { text }
                </a>
            }

            { 
                type == 'link' &&
                <Link className="button button--link" href={href}> 
                    <a>
                        { text }
                    </a>
                </Link> 
            }
        </>
    )
}

export default Button;