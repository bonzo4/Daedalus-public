import { useState, useEffect, Fragment } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


interface IApplications {
    setPortalTextRoute: Function
}

const Applications: React.FC<IApplications> = ({ setPortalTextRoute }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmitForm = async (values: Object) => {
        let config = {
            method: 'post',
            url: `localhost:3001/api/contact`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);
            console.log(response);
        } catch (err) { }
    }
    useEffect(() => {
        setPortalTextRoute('Daedalus Application');
    }, [])

    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value)
    }

    return (
        <PortalLayout>
            <section className={cx('wrapper', 'mb1', 'py-16', 'sm:px-6', 'w-screen', 'flex', 'justify-center', 'grid-cols-2')}>
                <section className={cx('mx-8', 'w-1/2')}>
                    <form onSubmit={handleSubmit(onSubmitForm)} className={cx('grid', 'grid-cols-1', 'gap-y-6', 'bg-secondary', 'py-10', 'px-10', 'rounded-md')}>
                        <label className={cx()}>
                            Collection Name<span className={cx('text-red')}>*</span>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Collection Name Required"
                                })}
                                className={cx('block', 'w-full', 'shadow', 'py-1', 'px-1', 'rounded-md', 'text-black',)}

                            />
                            <ErrorMessage
                                errors={errors}
                                name="name"
                                render={({ message }) => <p className={cx('text-red', 'text-sm', 'py-2')}>{message}</p>}
                            />
                        </label>
                        <label className={cx()}>
                            Supply<span className={cx('text-red')}>*</span>
                            <input
                                type="number"
                                {...register("supply", {
                                    required: "Supply Required"
                                })}
                                className={cx('block', 'w-full', 'shadow', 'py-1', 'px-1', 'rounded-md', 'text-black')} />
                            <ErrorMessage
                                errors={errors}
                                name="supply"
                                render={({ message }) => <p className={cx('text-red', 'text-sm', 'py-2')}>{message}</p>}
                            />
                        </label>
                        <label className={cx()}>
                            Whitelist Suppply Cap<span className={cx('text-red')}>*</span>
                            <input type="number"
                                {...register("whitelist-supply", {
                                    required: "Whitelist Suppply Cap Required"
                                })}
                                className={cx('block', 'w-full', 'shadow', 'py-1', 'px-1', 'rounded-md', 'text-black')} />
                            <ErrorMessage
                                errors={errors}
                                name="whitelist-supply"
                                render={({ message }) => <p className={cx('text-red', 'text-sm', 'py-2')}>{message}</p>}
                            />
                            <label>If you don't know your supply, you can give us a rough figure.</label>
                        </label>
                        <label className={cx()}>
                            Daedalus Whitelist Allocation (%)<span className={cx('text-red')}>*</span>
                            <input type="number"
                                {...register("whitelist-percentage", {
                                    required: "Daedalus Whitelist Allocation Required"
                                })}
                                className={cx('block', 'w-full', 'shadow', 'py-1', 'px-1', 'rounded-md', 'text-black')} />
                            <ErrorMessage
                                errors={errors}
                                name="whitelist-percentage"
                                render={({ message }) => <p className={cx('text-red', 'text-sm', 'py-2')}>{message}</p>}
                            />
                            <label>In order to onboard Daedalus, we request between 5-10% of your whitelist supply for our holders.</label>
                        </label>
                        <label className={cx()}>
                            Discord<span className={cx('text-red')}>*</span>
                            <input type="text"
                                {...register("discord", {
                                    required: "Discord Link Required"
                                })}
                                className={cx('block', 'w-full', 'shadow', 'py-1', 'px-1', 'rounded-md', 'text-black')} />
                            <ErrorMessage
                                errors={errors}
                                name="discord"
                                render={({ message }) => <p className={cx('text-red', 'text-sm', 'py-2')}>{message}</p>}
                            />
                        </label>
                        <label className={cx()}>
                            Twitter<span className={cx('text-red')}>*</span>
                            <input type="text"
                                {...register("twitter", {
                                    required: {
                                        value: true,
                                        message: 'Twitter Link Required'
                                    }
                                })}
                                className={cx('block', 'w-full', 'shadow', 'py-1', 'px-1', 'rounded-md', 'text-black')} />
                            <ErrorMessage
                                errors={errors}
                                name="twitter"
                                render={({ message }) => <p className={cx('text-red', 'text-sm', 'py-2')}>{message}</p>}
                            />
                        </label>
                        <label className={cx()}>
                            Project Description<span className={cx('text-red')}>*</span>
                            <input type="text"
                                {...register("description", {
                                    required: "Project Description Required",
                                    maxLength: {
                                        value: 120,
                                        message: "Description too Long"
                                    }
                                })}
                                className={cx('block', 'w-full', 'shadow', 'py-1', 'px-1', 'rounded-md', 'text-black')} />
                            <ErrorMessage
                                errors={errors}
                                name="description"
                                render={({ message }) => <p className={cx('text-red', 'text-sm', 'py-2')}>{message}</p>}
                            />
                        </label>
                        <button
                            type="submit"
                            className={cx('bg-purple', 'text-white', 'border-0', 'rounded-xl', 'py-2.5', 'px-3.5', 'text-center')} >Apply</button>
                    </form>
                </section>
                <section className={cx('w-1/3', 'bg-secondary', 'p-4', 'rounded-md', 'h-1/2',)}>
                    <Accordion open={open === 1} onClick={() => handleOpen(1)} icon={true} className={cx('py-2')}>
                        <button type="button" className={cx('bg-white', 'text-black', 'rounded-md', 'relative', 'flex', 'items-center', 'w-full', 'py-2', 'px-3', 'text-sm')}>
                            What exactly is Daedalus?
                        </button>
                        <AccordionBody className={cx('px-3', 'py-2')}>
                            Daedalus is a whitelist management tool for both users and projects.
                            At its core, Daedalus allows for seamless whitelist address collection,
                            but it is much much more than that. It gives projects huge exposure to
                            over 40,000 users on Solana, and growing every day. It allows your users
                            to never forget that they are whitelisted, and works on providing a high
                            whitelist conversion rate.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} onClick={() => handleOpen(2)} icon={true} className={cx('py-2')}>
                        <button type="button" className={cx('bg-white', 'text-black', 'rounded-md', 'relative', 'flex', 'items-center', 'w-full', 'py-2', 'px-3', 'text-sm')}>
                            As a project owner, why would I use Daedalus?
                        </button>
                        <AccordionBody className={cx('px-3', 'py-2')}>
                            It's simple, Daedalus takes care of all your whitelisting needs and takes
                            the stress away from wallet collection. No more setting up channels for
                            manual collection and no more tedious wallet collection through other bots.
                            All you need to do is register your project and sit back while your whitelist
                            fills up. Once finished, you can export a full list of whitelist addresses
                            from the admin portal. This includes a CSV which contains the discord
                            username, wallet address and discord role used to verify against.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} onClick={() => handleOpen(3)} icon={true} className={cx('py-2')}>
                        <button type="button" className={cx('bg-white', 'text-black', 'rounded-md', 'relative', 'flex', 'items-center', 'w-full', 'py-2', 'px-3', 'text-sm')}>
                            What features does Daedalus have
                        </button>
                        <AccordionBody className={cx('px-3', 'py-2')}>
                            Register your project - provide various information about your collection which is then displayed to the public.<br /><br />
                            Unlimited whitelist roles - Add as many whitelist roles as you want, these correspond to the whitelist roles in your discord.<br /><br />
                            Manage whitelist users - grant and revoke whitelist access on an individual basis.<br /><br />
                            Bulk grant roles - Gone are the days of manually allocating whitelist roles to a list of users from a giveaway.
                            Use our bulk functionality to paste a list of CSV users and grant roles to them all at once. <br /><br />
                            Purge - Purge the whitelist roles from users who haven't verified on Daedalus. Let's say you have 4000 whitelisted users,
                            but only 3500 of them have verified their spot on Daedalus, simply use the purge to remove the whitelist role from the 500
                            users in discord, allowing for 500 more spots.<br /><br />
                            Export whitelist addresses - Export a CSV which contains all the users who have whitelisted on Daedalus. This contains their username, whitelist address, and whitelist role.<br /><br />
                            Exposure - By simply registering with us alone, you are exposed to over 40,000 users on Daedalus, with this number growing every day.<br /><br />
                            High conversion rate - With all the utility mentioned above, you stand a very high chance of having a very successful conversion rate when it comes to minting.<br /><br />
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} onClick={() => handleOpen(4)} icon={true} className={cx('py-2')}>
                        <button type="button" className={cx('bg-white', 'text-black', 'rounded-md', 'relative', 'flex', 'items-center', 'w-full', 'py-2', 'px-3', 'text-sm')}>
                            How much do you charge?
                        </button>
                        <AccordionBody className={cx('px-3', 'py-2')}>
                            The question thats really on your mind. Well, it's FREE.
                            The only thing we ask is that we obtain 5-10% of your whitelist
                            spots for Elysian holders. It's a no brainer, really.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} onClick={() => handleOpen(5)} icon={true} className={cx('py-2')}>
                        <button type="button" className={cx('bg-white', 'text-black', 'rounded-md', 'relative', 'flex', 'items-center', 'w-full', 'py-2', 'px-3', 'text-sm')}>
                            Partnerships
                        </button>
                        <AccordionBody className={cx('px-3', 'py-2')}>
                            Want to talk partnerships? Join our discord and reach out to any of the moderators or admins.
                        </AccordionBody>
                    </Accordion>
                </section>
            </section>
        </PortalLayout >
    )
}


export default withGlobalProvider(Applications);    