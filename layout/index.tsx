
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/layout/layout.module.scss';
import cx from 'classnames';
interface ILayout {
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({children}) => (
    <div className={styles.container}>
        <Header />
        <main className={cx('min-h-screen', styles.container__main)}>
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout;
