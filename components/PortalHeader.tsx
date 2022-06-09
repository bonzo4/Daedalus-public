import cx from 'classnames';
import ButtonLink from '@/components/shared/ButtonLink';
import { Image } from '@nextui-org/react';
import styles from '@/styles/components/PortalHeader.module.scss';
import { svgHtml } from "@/utils/index";

const PortalHeader = () => {
    const pageData = {
        logoUrl: 'https://images.prismic.io/anatta-design/f5ef2d09-77e6-45e2-a6f4-3edf73b25250_daedalus-labs-symbol-full-color-version-rgb-12in%40300ppi+1.png?auto=compress,format',
        nav: [
            {
                "title": "Dashboard",
                "link": "/portal/dashboard",
                "svg": "medal"
            },
            {
                "title": "Applications",
                "link": "/portal/application",
                "svg": "book"
            }
        ]
    }
    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.container_inner)}>
                <div>                   
                    <div className={cx(styles.portalHeader__image)}>   
                        <Image 
                            src={pageData.logoUrl} 
                            alt="Daedalus Logo" 
                            showSkeleton 
                            objectFit="cover" 
                            width={50} 
                            height={50} 
                        />
                    </div>
           
                    <ul className={cx(styles.portalHeader__list)}>
                        {pageData.nav.map((each, index) => {
                            return (
                                <li key={index}>
                                    <ButtonLink href={each.link} className={cx(styles.portalHeader__link)}>
                                        <span className={cx('mr-10', 'inline-block', 'span-svg')} dangerouslySetInnerHTML={{ __html: svgHtml(each.svg)}}>
                                        </span>
                                        {each.title}
                                    </ButtonLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default PortalHeader;