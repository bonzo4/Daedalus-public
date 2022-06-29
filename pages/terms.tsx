import Head from 'next/head';
import Layout from '@/layout/index';
import cx from 'classnames';

const Terms = () => {
    return (
        <>
            <Head>
                <title>Term and conditions | Daedalus Labs</title>
                <meta name="description" content="Whitelist!" />
            </Head>

            <Layout>
                <header
                    className={cx('text-center', 'm-3', 'text-3xl',)}
                >
                    Terms and Conditions
                </header>
                <article className={cx('text-left', 'mx-10', 'my-5')}>
                    High Voltage Worlds is a distributed application that runs on the Solana
                    network, using uniquely coded smart contracts (each, a “Smart Contract”
                    or "NFT") that allow users to acquire, buy and sell, own and transfer,
                    the unique digital assets located at highvoltageworlds.io (the “Site”).
                    The visual asset(s) and artwork of each individual hvWorlds NFT is
                    hereafter known as the "Art". High Voltage Worlds LLC (“hvWorlds”, “we”,
                    or “us”) is the party making the App available for you to use. The Smart
                    Contractunivs and the Site are collectively referred to in these T&C as
                    the “App”. Using the App, users can view their hvWorlds NFT, and use the
                    Smart Contracts to acquire hvWorlds NFT on the Solana network. The App,
                    its connected services, and other options are provided “as is” and “as
                    available” without warranty of any kind. There is no ability to undo,
                    change, reverse, or restore any transactions on the Solana network.
                    Before using the App, the Smart Contracts, or the Site, you must agree
                    to these T&C and any other terms and conditions incorporated or
                    referenced herein (the T&C and any other terms and conditions
                    incorporated or referenced herein are collectively referred to as the
                    “Terms”). The purchase of a hvWorlds NFT does NOT CONSTITUTE AN
                    INVESTMENT.
                </article>
                <article className={cx('text-left', 'mx-10', 'my-5')}>
                    PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP, THE SMART
                    CONTRACTS, OR THE SITE. THESE TERMS GOVERN YOUR USE OF THE APP, THE
                    SMART CONTRACTS, AND THE SITE, UNLESS HIGH VOLTAGE WORLDS HAS AGREED TO
                    DIFFERENT WRITTEN AGREEMENT WITH YOU TO THE CONTRARY, SIGNED BY BOTH
                    PARTIES. HIGH VOLTAGE WORLDS IS ONLY WILLING TO MAKE THE APP, THE SMART
                    CONTRACTS, AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE
                    TERMS. BY USING THE APP, THE SMART CONTRACTS, THE SITE, OR ANY PART
                    THEREOF, YOU ARE CONFIRMING THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY
                    ALL OF THE TERMS CONTAINED HEREIN. IF YOU ARE ACCEPTING THESE TERMS ON
                    BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE
                    THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN
                    WHICH CASE “YOU” WILL MEAN THAT COMPANY OR LEGAL ENTITY. IF YOU DO NOT
                    HAVE SUCH AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE
                    ARE NOT WILLING TO MAKE THE APP, THE SMART CONTRACTS, OR THE SITE
                    AVAILABLE TO YOU. IF YOU DO NOT FULLY AGREE TO THESE TERMS, YOU ARE NOT
                    PERMITTED TO ACCESS OR USE THE APP, THE SMART CONTRACTS, OR THE SITE.
                </article>
                <article className={cx('text-left', 'mx-10', 'my-5')}>
                    ALL TRANSACTIONS INITIATED THROUGH THE APP ARE FACILITATED AND RUN BY
                    THIRD-PARTY ELECTRONIC WALLETS ON THE SOLANA BLOCKCHAIN, AND BY USING
                    THE APP YOU AGREE THAT YOU ARE GOVERNED BY THE TERMS OF SERVICE AND
                    PRIVACY POLICY FOR THOSE APPLICABLE WALLETS. WE ARE NOT A BROKER,
                    FINANCIAL INSTITUTION, OR CREDITOR. THE APP IS AN ADMINISTRATIVE
                    PLATFORM ONLY. WE FACILITATE TRANSACTIONS BETWEEN THE BUYER AND SELLER
                    BUT ARE NOT A PARTY TO ANY AGREEMENT BETWEEN THE BUYER AND SELLER
                    (UNLESS WE ARE THE SELLER). YOU BEAR FULL RESPONSIBILITY FOR VERIFYING
                    THE IDENTITY, LEGITIMACY, AND AUTHENTICITY OF ANY ASSETS YOU PURCHASE.
                </article>
            </Layout>
        </>
    )
}

export default Terms;