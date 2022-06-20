import { useState, useEffect, Children } from 'react';
import ButtonLink from '@/components/shared/ButtonLink';
import cx from 'classnames';
import { getHashValue } from '@/utils/index';
import styles from '@/styles/components/SubNavigation.module.scss';

interface ListItem {
    hashLink: string,
    title: string
}

interface IBreadcrumb {
    list: Array<ListItem>,
    children?: React.ReactNode,
    passRoute?: Function
}

const SubNavigation:React.FC<IBreadcrumb> = ({list, children, passRoute}) => {
    const [listItem, handleUpdateListItem] = useState<ListItem[]>();

    useEffect(() => {
        handleUpdateListItem(list);

        return function cleanup() {
        }
    }, [])

    const isActiveClass = (hashLink:string) => {
        if (passRoute)
        {
            passRoute(getHashValue())
        }
        if(getHashValue() == hashLink) {
            return styles.subNavigation__list_active;
        }
        

        return '';
    }  
    return (
        <div className={cx(styles.subNavigation__container)}>
            <div className={cx(styles.subNavigation__left)}>
                <ul className={cx(styles.subNavigation__list_container)}>
                    {listItem && listItem.map((each, index) => (
                        <li key={index} className={cx(styles.subNavigation__list, isActiveClass(each.hashLink))}>
                            <ButtonLink href={'#'+each.hashLink}>
                                {each.title}
                            </ButtonLink>
                        </li>
                    ))
                    }
                </ul>
            </div>

            <div className={cx(styles.subNavigation__right)}>
                {children}
            </div>
        </div>
    )
}

export default SubNavigation