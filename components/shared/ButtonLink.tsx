import Link from 'next/link';
import cx from 'classnames';
import styles from '../../styles/components/shared/Button.module.scss';

interface ILink {
    type?: string,
    children: React.ReactNode,
    href: string, 
    className?: string
}

const ButtonLink: React.FC<ILink> = ({type = 'link', children, href = '/', className}) => {
    return (
        <>
           {
                type == 'external-link' &&
                <a className={cx(styles.button__link, className)} href={href} rel="noreferrer" target="_blank">
                    { children }
                </a>
            }

            { 
                type == 'link' &&
                <Link href={href}> 
                    <a className={cx(styles.button__link, className)}>
                        { children }
                    </a>
                </Link> 
            }
        </>
    )
}

export default ButtonLink;