import Head from 'next/head';
import Layout from '@/layout/index';
import cx from 'classnames';
import LoginForm from '@/components/LoginForm';

const Login = () => {
    return (
        <>
        <Head>
            <title>Login | Daedalus Labs</title>
            <meta name="description" content="Whitelist!" />
        </Head>

        <Layout>
            <section className={cx('wrapper')}>
                <LoginForm />
            </section>
        </Layout>
        </>
    )
}

export default Login;