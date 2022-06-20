import { useState, useEffect } from 'react';
import PortalLayout from "@/layout/portal";
import cx from 'classnames';
import SubNavigation from "@/components/SubNavigation";
import { withGlobalProvider } from "@/context/GlobalProvider";
import CardRegular from '@/components/CardRegular';
import CardAuthor from '@/components/CardAuthor';
import CardPrice from '@/components/CardPrice';

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
                <CardPrice list={pageData.cardPrice} buttonText="Partnership Request"/>
            </section>
            }

            {currentRoute == 'active-projects' &&
            <section className={cx('wrapper')}>
                <CardAuthor list={pageData.cardCreator}/>
            </section>
            }   

            {currentRoute == 'past-projects' &&
                <section className={cx('wrapper')}>
                    <CardRegular list={pageData.cardRegular}/>
                </section>
            }
        </PortalLayout>
    )
}

export default withGlobalProvider(Dashboard);