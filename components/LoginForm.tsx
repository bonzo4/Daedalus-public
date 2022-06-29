import cx from 'classnames';
import ButtonLink from '@/components/shared/ButtonLink';

const LoginForm = () => {
    const login = () => {
        return 'Login url';
    }
    return (
        <div className={cx('loginForm', 'flex', 'min-h-[200px]', 'justify-center', 'items-center', 'px-1', 'max-w-[500px]', 'm-auto', 'border', 'rounded', 'bg-dark-blue')}>
            <div className={cx('loginForm__inner', 'border', 'max-w-[500px]')}>
                < ButtonLink
                    className={cx('bg-purple', 'text-white', 'border-0', 'rounded-xl', 'py-2.5', 'px-3.5', 'text-center')}
                    href="https://discord.com/api/oauth2/authorize?client_id=989210984843468850&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20connections" >
                    Log in with Discord
                </ButtonLink>
            </div>
        </div>
    )
}

export default LoginForm;