import PortalHeader from '@/components/PortalHeader';
import PortalBanner from '@/components/PortalBanner';
import PaddingOffSet from '@/components/shared/PaddingOffSet';
import styles from '@/styles/layout/portalLayout.module.scss';
import { withGlobalProvider } from "@/context/GlobalProvider";
interface ILayout {
    children: React.ReactNode,
}

const PortalLayout:React.FC<ILayout> = ({children}) => (
    <div className={styles.container}>
        <PortalHeader />
        
        <main className={styles.portalLayout__right}>
            <PortalBanner />
            <PaddingOffSet height={30} />

            {children}
        </main>
    </div>
)

export default withGlobalProvider(PortalLayout);
