import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import cx from 'classnames';
import { withGlobalProvider } from "@/context/GlobalProvider";
import Calendar from '@/components/Calendar';

interface ICalendar {
    setPortalTextRoute: Function
}


const PageCalendar:React.FC<ICalendar> = ({ setPortalTextRoute }) => {
    useEffect(() => {
        setPortalTextRoute('Calendar');
    }, [])

    return (
        <PortalLayout> 
            <Calendar />
        </PortalLayout>
    )
}

export default withGlobalProvider(PageCalendar);