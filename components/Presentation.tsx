import { Image } from '@nextui-org/react';
import cx from "classnames";
interface IPresentation {
    image: string,
    name: string,
    membership?: string    
}


const Presentation:React.FC<IPresentation> = ({image, name, membership}) => {
    return (
        <div className={cx('flex', 'flex-col', 'items-center', 'justify-center')}>
            <div className={cx('rounded-full', 'overflow-hidden', 'max-h-[200px]', 'max-w-[200px]', 'border-white', 'border-2', 'border-solid')}>
                <Image 
                    src={image}    
                    width={120} 
                    height={120} 
                    alt="Your Discord Image" 
                    showSkeleton/>
            </div>

            <div className={cx("flex", "flex-col", "items-center", "mt-5")}>
                <h2 className={cx("text-2xl", "mb-1")}>DP</h2>
                <p className={cx("")}>Membership status: {membership ? membership : 'Standard'}</p>
            </div>
        </div>
    )
}

export default Presentation;