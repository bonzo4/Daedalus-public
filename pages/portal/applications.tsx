import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import ButtonLink from "@/components/shared/ButtonLink";
import SubNavigation from "@/components/SubNavigation";
import cx from 'classnames';
import cardStyles from '@/styles/components/shared/Card.module.scss';
import CardRegular from '@/components/CardRegular';
import Head from 'next/head';

interface IApplications {
    setPortalTextRoute: Function,
    setCurrentRoute: Function,
    subRoute: String
}

const Applications:React.FC<IApplications> = ({setPortalTextRoute, setCurrentRoute, subRoute}) => {
    useEffect(() => {
        setPortalTextRoute('Applications');
        setCurrentRoute('application');
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
        ],
        cardSubmissions: [
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Growl",
                subtitle: "jeez",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Growl",
                subtitle: "jeez",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Growl",
                subtitle: "jeez",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Growl",
                subtitle: "jeez",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/42b6b058-5ec5-4356-854f-274f3bd48591_placeholder-images-image_large.webp?auto=compress,format',
                title: "Growl",
                subtitle: "jeez",
                link: '/follow'
            },
        ],
    }


    return (
        <>
        <Head>
            <title>Applications | Daedalus Labs</title>
        </Head>

        <PortalLayout>
            <section className={cx('wrapper', 'mb1')}>
                <SubNavigation list={pageData.subNavigation}>
                    <ButtonLink href="/portal/applications/new" buttonClass={true}>
                        Create New Application
                    </ButtonLink>
                </SubNavigation>
            </section>

            {!subRoute &&
                <section className={cx('wrapper')}>
                    <CardRegular list={pageData.cardRegular} cardBodyStyle={cx(cardStyles.cardRegular__headline_left)}/>
                </section>
            }

            {subRoute == 'submissions' &&
                <section className={cx('wrapper')}>
                    <CardRegular list={pageData.cardSubmissions} cardBodyStyle={cx(cardStyles.cardRegular__headline_left)}/>
                </section>
            }
        </PortalLayout>
        </>
    )
}


export default withGlobalProvider(Applications);