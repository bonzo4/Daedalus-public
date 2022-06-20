import PortalLayout from "@/layout/portal";
import ProjectList from '@/components/ProjectList'
import cx from 'classnames';

const Admin = () => {
    return (
        <PortalLayout>
            <section className={cx()}>
                <ProjectList />
            </section>
        </PortalLayout>
    )
}

export default Admin;