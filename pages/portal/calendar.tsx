import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import cx from 'classnames';
import { withGlobalProvider } from "@/context/GlobalProvider";
import Calendar from '@/components/Calendar';
import Head from 'next/head';

interface ICalendar {
    setPortalTextRoute: Function,
    setCurrentRoute: Function
}


const PageCalendar:React.FC<ICalendar> = ({ setPortalTextRoute, setCurrentRoute }) => {
    useEffect(() => {
        setPortalTextRoute('Calendar');
        setCurrentRoute('calendar');
    }, [])

    return (
        <>
            <Head>
                <title>Calendar | Daedalus Labs</title>
            </Head>

            <PortalLayout> 
                <Calendar />
            </PortalLayout>
        </>
    )
}

export default withGlobalProvider(PageCalendar);