import cx from 'classnames';
import ButtonLink from '@/components/shared/ButtonLink';
import { Image } from '@nextui-org/react';
import styles from '@/styles/components/PortalHeader.module.scss';
import { svgHtml } from "@/utils/index";

const PortalHeader = () => {
    const pageData = {
        logoUrl: 'https://images.prismic.io/daedaluslabs/503acd4a-3154-4c3f-84e3-565952b5f66a_DaedaluSide.png?auto=compress,format',
        nav: [
            {
                "title": "Dashboard",
                "link": "/portal/dashboard",
                "svg": "medal"
            },
            {
                "title": "Applications",
                "link": "/portal/applications",
                "svg": "book"
            },
            {
                "title": "Calendar",
                "link": "/portal/calendar",
                "svg": "calendar"
            },
            {
                "title": "Account",
                "link": "/portal/account",
                "svg": "account"
            },
            {
                "title": "Admin",
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
    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.container_inner, styles.portalHeader__inner)}>
                <div className={cx()}>                   
                    <div className={cx(styles.portalHeader__image)}>   
                        <Image 
                            src={pageData.logoUrl} 
                            alt="Daedalus Logo" 
                            showSkeleton 
                            objectFit="contain" 
                            width={360} 
                            height={120} 
                        />
                    </div>
           
                    <ul className={cx(styles.portalHeader__list)}>
                        {pageData.nav.map((each, index) => {
                            return (
                                <li key={index}>
                                    <ButtonLink href={each.link} className={cx(styles.portalHeader__link, styles.portalHeader__link_top)}>
                                        <span className={cx('mr-10', 'inline-block', 'span-svg')} dangerouslySetInnerHTML={{ __html: svgHtml(each.svg)}}>
                                        </span>
                                        {each.title}
                                    </ButtonLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className={cx(styles.portalHeader__bottom)}>
                    <ul className={cx(styles.portalHeader__bottom_inner, 'ul-nornalized')}>
                        {pageData.navFooter.map((each, index) => {
                            return (
                                <li key={index}>
                                    <ButtonLink href={each.link} className={cx(styles.portalHeader__link, styles.portalHeader__link_social)}>
                                        <span className={cx('mr-5', 'inline-block', 'span-svg')} dangerouslySetInnerHTML={{ __html: svgHtml(each.svg)}}>
                                        </span>
                                        {each.title}
                                    </ButtonLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PortalHeader;