import cx from 'classnames';
import Button from '@/components/shared/Button';

const LoginForm = () => {
    const login = () => {
        return 'Login url';
    }
    return (
        <div className={cx('loginForm', 'flex', 'min-h-[400px]', 'justify-center', 'items-center')}>
            <div className={cx('loginForm__inner', 'border', 'max-w-[500px]')}>
                <Button click={login}>
                    Log in with Discord
                </Button>
            </div>
        </div>
    )
}

export default LoginForm;