import React, { useState, useEffect } from "react";
import cx from 'classnames';
import { type } from "os";


// eslint-disable-next-line react/jsx-no-duplicate-props
const Calendar = () => {

    type event = {
        event_date: Date,
        event_title: string,
        event_theme: string,
        image: string,
        price: number,
        supply: number
    }
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [date, setDate] = useState(0)
    const [noOfDays, setNoOfDay] = useState<number[]>();
    const [blankDays, setBlankDays] = useState<number[]>();
    const [todaysEvents, setTodaysEvents] = useState<event[]>()
    const [events, setEvents] = useState([
        {
            event_date: new Date(2022, 6, 6),
            event_title: "April Fool's Day",
            event_theme: 'blue',
            image: "https://cdn.discordapp.com/attachments/933613511110709288/986545202510577674/IMG_9353.jpg",
            price: 2,
            supply: 6969
        },

        {
            event_date: new Date(2022, 6, 10),
            event_title: "Birthday",
            event_theme: 'red',
            image: "https://media.discordapp.net/attachments/976465914264453181/980117991641473034/RC-Shirt6.jpg",
            price: 1.25,
            supply: 8888
        },

        {
            event_date: new Date(2022, 6, 10),
            event_title: "Birthday 2",
            event_theme: 'red',
            image: "https://media.discordapp.net/attachments/970903470842458136/991860528588783747/unknown.png",
            price: 2,
            supply: 5555
        },

        {
            event_date: new Date(2022, 6, 16),
            event_title: "Upcoming Event",
            event_theme: 'green',
            image: "https://media.discordapp.net/attachments/970903470842458136/989961054576586782/IMG_2945.jpg?width=676&height=676",
            price: 1.5,
            supply: 3333
        }
    ]);

    const [themes, setThemes] = useState([
        {
            value: "blue",
            label: "Blue Theme"
        },
        {
            value: "red",
            label: "Red Theme"
        },
        {
            value: "yellow",
            label: "Yellow Theme"
        },
        {
            value: "green",
            label: "Green Theme"
        },
        {
            value: "purple",
            label: "Purple Theme"
        }
    ])


    useEffect(() => {
        initDate();
        getNoOfDays();
        changeTodaysEvents()
    }, [])

    useEffect(() => {
        changeTodaysEvents()
    }, [date])


    const initDate = () => {
        let today = new Date();
        setMonth(today.getMonth());
        setYear(today.getFullYear());
        setDate(today.getDate());
    }

    const changeDate = (event: React.MouseEvent<HTMLElement>) => {
        let newDate = date;
        if (event.currentTarget.id === "dateUp") {
            newDate += 1
        } else if (event.currentTarget.id === "dateDown") {
            newDate -= 1
        } else {
            newDate = +event.currentTarget.id + 1
        }
        const days = new Date(year, month, 0).getDate() + 1
        if (newDate <= days && newDate > 0) {
            setDate(newDate)
        }
    }


    const isToday = (day: any) => {
        return day === date
    }

    const getNoOfDays = () => {
        let daysInMonth = new Date(year, month + 1, 0).getDate();

        // find where to start calendar day of week
        let dayOfWeek = new Date(year, month).getDay();
        let blankdaysArray = [];
        for (var i = 1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }

        let daysArray = [];
        for (var i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }

        setBlankDays([...blankdaysArray]);
        setNoOfDay([...daysArray]);
    }

    const changeTodaysEvents = () => {
        const arr = events.filter((obj) => {
            return obj.event_date.getDate() === date
        })
        setTodaysEvents(arr)
    }


    return (
        <div className="antialiased sans-serif min-h-screen">
            <div>
                <div className="container mx-auto px-4 py-2">
                    <div className="bg-dark-blue rounded-lg shadow overflow-hidden">
                        <div className="border-b border-solid border-slate-200 flex items-center justify-between py-2 px-6 mb-1">
                            <div>
                                <span className="text-lg font-bold text-gray-800">{monthNames[month]}</span>
                                <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
                            </div>

                            <div className="border border-solid border-slate-200 rounded-lg px-1" style={{ "paddingTop": "2px" }}>
                                <button
                                    type="button"
                                    className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                                    id="dateDown"
                                    onClick={changeDate}
                                >
                                    <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="border-r inline-flex h-6 border-solid border-slate-200"></div>

                                <button
                                    type="button"
                                    className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
                                    id="dateUp"
                                    onClick={changeDate}
                                >
                                    <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="-mb-1">
                            <div className="flex flex-wrap" style={{ marginBottom: "-40px" }}>
                                {DAYS &&
                                    DAYS.map((day, index) => (
                                        <div className={cx("px-2 py-2 ")} style={{ "width": "14.26%" }} key={index}>
                                            <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">{day}</div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex flex-wrap border-t border-l">
                                {blankDays &&
                                    blankDays.map((blankday, index) => (
                                        <div
                                            key={index}
                                            style={{ width: "14.28%", height: "120px" }}
                                            className="text-center border-r border-b px-4 pt-2 border-solid border-slate-200"
                                        >
                                        </div>
                                    ))
                                }

                                {
                                    noOfDays && noOfDays.map((day, index) => (
                                        <div key={index} style={{ width: "14.28%", height: "120px" }} className="px-4 pt-2 border-r border-b relative border-solid border-slate-200" id={index.toString()} onClick={changeDate}>
                                            {isToday(day) ?
                                                <div className="text-gray-700 bg-metal rounded-md w-7 p-1 text-center">{day}</div> :
                                                <div className="text-gray-700 ">{day}</div>
                                            }
                                            <div style={{ height: "80px" }} className="overflow-y-auto mt-1" >
                                                {events && events.filter((dateEvent) => new Date(dateEvent.event_date).toDateString() === new Date(year, month, day).toDateString()).map((each, index) => (
                                                    <div
                                                        key={index}
                                                        className={cx("px-2 py-1 rounded-lg mt-1 overflow-hidden border", {
                                                            'border-blue-200 text-blue-800 bg-blue-100': each.event_theme === 'blue',
                                                            'border-red-200 text-red-800 bg-red-100': each.event_theme === 'red',
                                                            'border-yellow-200 text-yellow-800 bg-yellow-100': each.event_theme === 'yellow',
                                                            'border-green-200 text-green-800 bg-green-100': each.event_theme === 'green',
                                                            'border-purple-200 text-purple-800 bg-purple-100': each.event_theme === 'purple',
                                                        })}>
                                                        <p className="text-sm truncate leading-tight">{each.event_title}</p>
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-2">
                    {todaysEvents &&
                        <div className="bg-dark-blue rounded-md divide-y divide-solid p-2">
                            {
                                todaysEvents.map((each, index) => (
                                    <div key={index}
                                        className="grid-rows-2"
                                    >
                                        <div className="p-4 flex">
                                            <img className="w-16 flex-none rounded-full"
                                                src={each.image} />
                                            <div className="flex-auto my-auto mx-4">
                                                {each.event_title}
                                            </div>
                                        </div>
                                        <div className="pb-3 flex">
                                            <div className="flex-auto my-auto mx-4">
                                                <p className="p-1">Mint Price - {each.price} SOL</p>
                                                <p className="p-1">Supply - {each.supply}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}



export default Calendar;