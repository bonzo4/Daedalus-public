import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import ButtonLink from "@/components/shared/ButtonLink";
import SubNavigation from "@/components/SubNavigation";
import cx from 'classnames';
import { Card, Grid, Image } from '@nextui-org/react';
import cardStyles from '@/styles/components/shared/Card.module.scss';


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
                <Grid.Container gap={2}>
                    {              
                        pageData && pageData.cardRegular.map((each, index) => {
                            return (
                                <Grid key={index} xs={6} sm={4} md={3} >
                                    <Card className={cx(cardStyles.cardRegular__card)}>
                                        <Card.Header css={{ p: 0, }}>
                                            <Image 
                                                src={each.image} 
                                                alt='Partner Image' 
                                                objectFit="cover"
                                                className={cx(cardStyles.cardRegular__card_image)}
                                                />
                                        </Card.Header>

                                        <Card.Body>
                                            <div className={cx(cardStyles.cardRegular__headline, cardStyles.cardRegular__headline_left)}>
                                                <h2 className={cx(cardStyles.cardPrice__title)}>{each.title}</h2>
                                                <p>{each.subtitle}</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Grid>
                            )
                        })  
                    }
                </Grid.Container> 
            </section>
            }
        </PortalLayout>
    )
}


export default withGlobalProvider(Applications);