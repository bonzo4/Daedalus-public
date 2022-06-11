import Head from 'next/head';
import Layout from '@/layout/index';
import cx from 'classnames';

const Login = () => {
    return (
        <>
        <Head>
            <title>Login | Daedalus Labs</title>
            <meta name="description" content="Whitelist!" />
        </Head>

        <Layout>
            <h2>Log in with discord</h2>
        </Layout>
        </>
    )
}

export default Login;