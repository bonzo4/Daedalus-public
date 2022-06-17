import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import ButtonLink from "@/components/shared/ButtonLink";
import SubNavigation from "@/components/SubNavigation";
import cx from 'classnames';

interface IApplication {
    setPortalTextRoute: Function
}

const Applications:React.FC<IApplication> = ({setPortalTextRoute}) => {
    const [currentRoute, setCurrentRoute] = useState('');

    useEffect(() => {
        setPortalTextRoute('Applications');
    }, [])

    const pageData = {
        subNavigation: [
            {
                hashLink: '',
                title: "Dratfs" 
            },
            {
                hashLink: 'submissions',
                title: "Submissions"
            },
        ]
    }

    return (
        <PortalLayout>
            <section className={cx('wrapper', 'mb1')}>
                <SubNavigation list={pageData.subNavigation} passRoute={setCurrentRoute}>
                    <ButtonLink href="/portal/applications/new" buttonClass={true}>
                        Create New Application
                    </ButtonLink>
                </SubNavigation>
            </section>
        </PortalLayout>
    )
}


export default withGlobalProvider(Applications);