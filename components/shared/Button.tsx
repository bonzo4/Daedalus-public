import Link from 'next/link';
import cx from 'classnames';
import styles from '../../styles/components/shared/Button.module.scss';
interface IButton {
    children: React.ReactNode,
    className?: string,
    type?: 'button'
}

const Button: React.FC<IButton> = ({children, className, type}) => {
    return (
        <>
            {
                <button type={type} className={cx(styles.button, className)}>
                    { children }
                </button>
            }
        </>
    )
}

export default Button;