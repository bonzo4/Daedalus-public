import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import cx from 'classnames';
import { Card, Text, Grid, Image } from '@nextui-org/react';
import cardStyles from '@/styles/components/shared/Card.module.scss';
import styles from '@/styles/components/Dashboard.module.scss';
import ButtonLink from "@/components/shared/ButtonLink";
import SubNavigation from "@/components/SubNavigation";
import { withGlobalProvider } from "@/context/GlobalProvider";

interface IDashboard{
    setPortalTextRoute: Function
}

const Dashboard:React.FC<IDashboard> = ({setPortalTextRoute}) => {
    const [currentRoute, setCurrentRoute] = useState('');

    useEffect(() => {
        setPortalTextRoute('DashBoard');
    }, [])

    const pageData = {
        subNavigation: [
            {
                hashLink: '',
                title: "My Project" 
            },
            {
                hashLink: 'active-projects',
                title: "Active Projects"
            },
            {
                hashLink: "past-projects",
                title: "Past Projects"
            }
        ],
        cardPrice: [
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/f39b29e6-2930-42c3-b557-f260a3acb82b_afif-kusuma-zli4eDX3IPQ-unsplash+1.png?auto=compress,format',
                title: 'Yellow Painting',
                link: '/somewhere',
                price: "0.35",
                subtitle: "4000 Supply"
            }
        ],
        cardCreator: [
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/bb841ff4-1229-4d20-b636-bf142757d7f4_dan-cristian-padure-SMSLyc9FHl0-unsplash+%281%29+1.png?auto=compress,format',
                authorImage: 'https://images.prismic.io/daedaluslabs/cdfd4995-fc0d-4550-9386-7c0547299615_aiony-haust-3TLl_97HNJo-unsplash+%281%29+1.png?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            }        
        ],
        cardRegular: [
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            },  
            {
                image: 'https://images.prismic.io/daedaluslabs/8dee82f3-351b-4528-b9fd-3a3a635fb681_add1b2b2.gif?auto=compress,format',
                title: "John Wick",
                subtitle: "I'm creative as hell broda",
                link: '/follow'
            }           
        ]
    }
    return (
        <PortalLayout>
            <section className={cx('wrapper', 'mb1')}>
                <SubNavigation list={pageData.subNavigation} passRoute={setCurrentRoute}>
                </SubNavigation>
            </section>
            {!currentRoute &&  
            <section className={cx('wrapper')}>
                <Grid.Container gap={1}>
                    {pageData && pageData.cardPrice.map((each, index) => {
                            return (
                                <Grid key={index} xs={6} sm={4} md={3} >
                                    <Card className={cx(styles.dashboard__card, cardStyles.cardPrice__card)}>
                                        <Card.Header css={{ p: 0 }}>
                                            <Image src={each.image} alt='Partner Image'/>
                                        </Card.Header>

                                        <Card.Body>
                                            { each.subtitle &&
                                                <p className={cx(cardStyles.cardPrice__subtitle)}>
                                                    { each.subtitle }
                                                </p>
                                            }
                                            <div className={cx(cardStyles.cardPrice__headline)}>
                                                <h2 className={cx(cardStyles.cardPrice__title)}>{each.title}</h2>
                                                <p>{each.price} SOL</p>
                                            </div>
                                        </Card.Body>

                                        <Card.Footer>
                                            <ButtonLink href={each.link} buttonClass={true} className={cx(cardStyles.cardPrice__button)}>
                                                Partnership Request
                                            </ButtonLink>
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                            )
                        })  
                    }
                </Grid.Container> 
            </section>
            }

            {currentRoute == 'active-projects' &&
            <section className={cx('wrapper')}>
                <Grid.Container gap={1}>
                    {              
                        pageData && pageData.cardCreator.map((each, index) => {
                            return (
                                <Grid key={index} xs={6} sm={4} md={3} >
                                    <Card className={cx(styles.dashboard__card, cardStyles.cardAuthor__card)}>
                                        <Card.Header css={{ p: 0 }}>
                                            <Image src={each.image} alt='Partner Background Image' className={cx(cardStyles.cardAuthor__image)}/>                       
                                        </Card.Header>

                                        <Card.Body css={{ overflowY: 'visible' }}>
                                            <div className={cx(cardStyles.cardAuthor__headline)}>
                                                <div className={cx(cardStyles.cardAuthor__author_container)}>
                                                    <Image 
                                                        src={each.authorImage} 
                                                        alt='Author Image' 
                                                        width={80} 
                                                        height={80} 
                                                        className={cx(cardStyles.cardAuthor__author_image)}
                                                        objectFit="contain"
                                                    />
                                                </div>

                                                <h2 className={cx(cardStyles.cardAuthor__title)}>{each.title}</h2>

                                                <p>{each.subtitle}</p>
                                            </div>
                                        </Card.Body>

                                        <Card.Footer>
                                            <ButtonLink href={each.link} buttonClass={true} className={cx(cardStyles.cardAuthor__button)}>
                                                Follow
                                            </ButtonLink>
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                            )
                        })  
                    }
                </Grid.Container> 
            </section>
            }   

            {currentRoute == 'past-projects' &&
            <section className={cx('wrapper')}>
                <Grid.Container gap={2}>
                    {              
                        pageData && pageData.cardRegular.map((each, index) => {
                            return (
                                <Grid key={index} xs={6} sm={4} md={3} >
                                    <Card className={cx(styles.dashboard__card, cardStyles.cardRegular__card)}>
                                        <Card.Header css={{ p: 0, }}>
                                            <Image 
                                                src={each.image} 
                                                alt='Partner Image' 
                                                objectFit="cover"
                                                className={cx(cardStyles.cardRegular__card_image)}
                                                />
                                        </Card.Header>

                                        <Card.Body>
                                            <div className={cx(cardStyles.cardRegular__headline)}>
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

export default withGlobalProvider(Dashboard);