import cx from "classnames";
import ButtonLink from "./shared/ButtonLink";

enum TypeConnector {
    twiter = "twitter",
    wallet = "wallet",
    discord = "discord"
} 

interface IConnector {
    type: TypeConnector
}

const AccountConnector:React.FC<IConnector> = ({type}) => {
    return (
        <div className={cx('flex', 'flex-col', 'bg-gray-300', 'boxshadow', 'rounded-md')}>
           <div className={cx("p-4", "border-b", "border-half-white", "border-solid")}>
                <h2 className={cx("capitalize", "font-bold")}>{type}</h2>
           </div>

           <div className={cx("p-5")}>
               {type == 'twitter' && 
                <ButtonLink buttonClass={true} href="/account/twitter">
                    Connect <span className={cx("capitalize")}>{type}</span>
                </ButtonLink>
                }

                {type == 'discord' && 
                <ButtonLink buttonClass={true} href="/account/discord">
                    Connect <span className={cx("capitalize")}>{type}</span>
                </ButtonLink>
                }

                {type == 'wallet' && 
                <ButtonLink buttonClass={true} href="/account/wallet">
                    Connect <span className={cx("capitalize")}>{type}</span>
                </ButtonLink>
                }
           </div>
        </div>
    )
}

export default AccountConnector;