import PortalHeader from '@/components/PortalHeader';
import styles from '@/styles/layout/portalLayout.module.scss';

interface ILayout {
    children: React.ReactNode
}

const PortalLayout:React.FC<ILayout> = ({children}) => (
    <div className={styles.container}>
        <PortalHeader />
        <main>
            {children}
        </main>
    </div>
)

export default PortalLayout;
