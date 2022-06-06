import Link from 'next/link';
import cx from 'classnames';
import styles from '../../styles/components/shared/Button.module.scss';
interface IButton {
    type: string,
    text: string,
    href?: string, 
    className?: string
}

const Button: React.FC<IButton> = ({type, text, href = '/', className}) => {
    return (
        <>
            {
                type == 'button' && 
                <button className={cx(styles.button, className)}>
                    { text }
                </button>
            }

            {
                type == 'external-link' &&
                <a className={cx(styles.button__link, className)} href={href} rel="noreferrer" target="_blank">
                    { text }
                </a>
            }

            { 
                type == 'link' &&
                <Link href={href}> 
                    <a className={cx(styles.button__link, className)}>
                        { text }
                    </a>
                </Link> 
            }
        </>
    )
}

export default Button;