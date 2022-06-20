import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import ButtonLink from "@/components/shared/ButtonLink";
import SubNavigation from "@/components/SubNavigation";
import cx from 'classnames';
import cardStyles from '@/styles/components/shared/Card.module.scss';
import CardRegular from '@/components/CardRegular';


interface IApplications {
    setPortalTextRoute: Function
}

const Applications:React.FC<IApplications> = ({setPortalTextRoute}) => {
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
        ],
        cardRegular: [
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Untitled",
                subtitle: "Nothing in here",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Untitled",
                subtitle: "Nothing in here",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Untitled",
                subtitle: "Nothing in here",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Untitled",
                subtitle: "Nothing in here",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Untitled",
                subtitle: "Nothing in here",
                link: '/follow'
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

            {!currentRoute &&
                <section className={cx('wrapper')}>
                    <CardRegular list={pageData.cardRegular} cardBodyStyle={cx(cardStyles.cardRegular__headline_left)}/>
                </section>
            }
        </PortalLayout>
    )
}


export default withGlobalProvider(Applications);