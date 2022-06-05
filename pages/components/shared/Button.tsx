import Link from 'next/link';

type ButtonProps = {
    type: string,
    text: string,
    href: string, 
}

const Button = ({type, text, href}: ButtonProps) => {
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