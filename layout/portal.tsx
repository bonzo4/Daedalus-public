import PortalHeader from '@/components/PortalHeader';
import PortalBanner from '@/components/PortalBanner';
import PaddingOffSet from '@/components/shared/PaddingOffSet';
import styles from '@/styles/layout/portalLayout.module.scss';
import { withGlobalProvider } from "@/context/GlobalProvider";
import cx from 'classnames';
interface ILayout {
    children: React.ReactNode,
    openDrawer: Boolean
}

const PortalLayout:React.FC<ILayout> = ({children, openDrawer}) => (
    <div className={styles.container}>
        <PortalHeader />
        
        <main className={styles.portalLayout__right}>
            <PortalBanner />
            <PaddingOffSet height={30} />

            {children}
        </main>

        { openDrawer &&
            <div className={cx(styles.portalLayout__layer)}></div>
        }
    </div>
)

export default withGlobalProvider(PortalLayout);
