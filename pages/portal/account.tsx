import { useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import cx from 'classnames';
import Presentation from '@/components/Presentation';
import AccountConnector from '@/components/AccountConnector';

enum TypeConnector {
    twiter = "twitter",
    wallet = "wallet",
    discord = "discord"
} 
interface IAccount {
    setPortalTextRoute: Function
}

const Account:React.FC<IAccount> = ({setPortalTextRoute}) => {
    const pageData = {
        presentation: {
            image: "https://cdn.discordapp.com/avatars/973233567280799807/9db4e6267b9484c4eb263c7293f5dd18.png",
            name: "DP",
            membership: "Standard"
        }
    }
    useEffect(() => {
        setPortalTextRoute('Account');
    }, [])

    return (
        <PortalLayout>
            <section className={cx('mb-10')}>
                <Presentation {...pageData.presentation}/>
            </section>

            <section className={cx('wrapper', 'mb-10')}>
                <AccountConnector type={TypeConnector.wallet} />
            </section>

            <section className={cx('wrapper', 'mb-10')}>
                <AccountConnector type={TypeConnector.twiter} />
            </section>

            <section className={cx('wrapper','mb-10')}>
                <AccountConnector type={TypeConnector.discord} />
            </section>
        </PortalLayout>
    )
}

export default withGlobalProvider(Account);