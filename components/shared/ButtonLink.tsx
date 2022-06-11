import Link from 'next/link';
import cx from 'classnames';
import styles from '../../styles/components/shared/Button.module.scss';

interface ILink {
    type?: string,
    children: React.ReactNode,
    href: string, 
    className?: string,
    buttonClass?: boolean
}

const ButtonLink: React.FC<ILink> = ({type = 'link', children, href = '/', className, buttonClass}) => {
    return (
        <>
           {
                type == 'external-link' &&
                <a className={cx(buttonClass ? styles.button : '', styles.button__link, className)} href={href} rel="noreferrer" target="_blank">
                    { children }
                </a>
            }

            { 
                type == 'link' &&
                <Link href={href}> 
                    <a className={cx(buttonClass ? styles.button : '', styles.button__link, className)}>
                        { children }
                    </a>
                </Link> 
            }
        </>
    )
}

export default ButtonLink;