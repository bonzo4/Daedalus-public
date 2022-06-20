import { useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import cx from 'classnames';
import Calendar from '@/components/Calendar';

interface IAccount {
    setPortalTextRoute: Function
}

const Account:React.FC<IAccount> = ({setPortalTextRoute}) => {
    useEffect(() => {
        setPortalTextRoute('Account');
    }, [])

    return (
        <PortalLayout>
            <Calendar />
        </PortalLayout>
    )
}

export default withGlobalProvider(Account);