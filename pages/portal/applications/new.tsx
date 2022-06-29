import { useState, useEffect, Fragment } from 'react';
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';


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
            </section>
        </PortalLayout >
    )
}


export default withGlobalProvider(Applications);    