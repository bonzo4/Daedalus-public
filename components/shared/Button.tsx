import Link from 'next/link';
import cx from 'classnames';
import styles from '../../styles/components/shared/Button.module.scss';
interface IButton {
    children: React.ReactNode,
    className?: string,
    type?: 'button',
    click: Function
}

const Button: React.FC<IButton> = ({children, className, type, click}) => {
    return (
        <>
            {
                <button 
                    type={type} 
                    className={cx(styles.button, className)} 
                    onClick={() => click}
                    >
                    { children }
                </button>
            }
        </>
    )
}

export default Button;