import cx from 'classnames';
import ButtonLink from '@/components/shared/ButtonLink';
import Button from '@/components/shared/Button';
import { Image } from '@nextui-org/react';
import styles from '@/styles/components/PortalHeader.module.scss';
import { svgHtml } from "@/utils/index";
import { withGlobalProvider } from "@/context/GlobalProvider.js";

interface IPortalHeader {
    openDrawer?: Boolean,
    setDrawerActivity?: Function,
    currentRoute: string,
}

const PortalHeader:React.FC<IPortalHeader> = ({openDrawer, setDrawerActivity, currentRoute}) => {
    const pageData = {
        logoUrl: 'https://images.prismic.io/daedaluslabs/503acd4a-3154-4c3f-84e3-565952b5f66a_DaedaluSide.png?auto=compress,format',
        nav: [
            {
                "title": "Dashboard",
                "key": "dashboard",
                "link": "/portal/dashboard",
                "svg": "medal"
            },
            {
                "title": "Applications",
                "key": "application",
                "link": "/portal/applications",
                "svg": "book"
            },
            {
                "title": "Calendar",
                "key": "calendar",
                "link": "/portal/calendar",
                "svg": "calendar"
            },
            {
                "title": "Account",
                "key": "account",
                "link": "/portal/account",
                "svg": "account"
            },
            {
                "title": "Admin",
                "key": "admin",
                "link": "/portal/admin",
                "svg": "admin"
            }
        ],
        navFooter: [
            {
                'title': 'Discord',
                "link": '/discord',
                'svg': 'discord'
            },
            {
                'title': 'Twitter',
                'link': '/twitter',
                'svg': 'twitter'
            }
        ]
    }

    const handleSetDrawerActivity = () => {
        if (setDrawerActivity) {
            setDrawerActivity();
        }
    }

    const logout = () => {
        console.log("Log out");
    }
    return (
        <div className={cx(styles.container, openDrawer ? styles.portalHeader__open : '')}>
            <div className={cx(styles.container_inner, styles.portalHeader__inner)}>
                <div className={cx()}>                   
                    <div className={cx(styles.portalHeader__image)}>   
                        <div onClick={handleSetDrawerActivity} className={cx(styles.portalHeader__time)} dangerouslySetInnerHTML={{ __html: svgHtml('time')}}>
                        </div>
                        <ButtonLink href="/portal/dashboard">
                            <Image 
                                src={pageData.logoUrl} 
                                alt="Daedalus Logo" 
                                showSkeleton 
                                objectFit="contain" 
                                width={360} 
                                height={120} 
                            />
                        </ButtonLink>
                    </div>
           
                    <ul className={cx(styles.portalHeader__list)}>
                        {pageData.nav.map((each, index) => {
                            return (
                                <li key={index}>
                                    <ButtonLink href={each.link} className={cx(styles.portalHeader__link, styles.portalHeader__link_top, currentRoute == each.key ? styles.portalHeader__link_active : '' )}> 
                                        <span className={cx('mr-5', 'inline-block', 'span-svg')} dangerouslySetInnerHTML={{ __html: svgHtml(each.svg)}}>
                                        </span>
                                        {each.title}
                                    </ButtonLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <div className={cx(styles.portalHeader__bottom)}>
                        <ul className={cx(styles.portalHeader__bottom_inner, 'ul-nornalized')}>
                            {pageData.navFooter.map((each, index) => {
                                return (
                                    <li key={index}>
                                        <ButtonLink href={each.link} className={cx(styles.portalHeader__link, styles.portalHeader__link_social)}>
                                            <span className={cx('mr-1', 'inline-block', 'span-svg')} dangerouslySetInnerHTML={{ __html: svgHtml(each.svg)}}>
                                            </span>
                                            {each.title}
                                        </ButtonLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className={cx('flex', 'mt-2', 'justify-between', 'items-center')}>
                        <div className={cx('flex', 'items-center')}>
                            <div className={cx('rounded-full', 'overflow-hidden')}>
                                <Image src="https://cdn.discordapp.com/avatars/973233567280799807/9db4e6267b9484c4eb263c7293f5dd18.png" alt="Account logo" width={40} height={40}/>
                            </div>

                            <h3 className={cx('ml-2')}>DP</h3>
                        </div>
                        
                        <Button click={() => logout()} buttonClass={false}>
                            <div dangerouslySetInnerHTML={{ __html: svgHtml('door')}}>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withGlobalProvider(PortalHeader);