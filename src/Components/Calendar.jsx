import React from 'react';
import styles from '../css/Calendar.module.css';

function Calendar({selectedDate, setSelectedDate}){

    const days = ["S", "M", "T", "W", "T", "F", "S"];

    const today = new Date();
    const todayDate = today.getDate();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return date;
    });

    return (
        <div className={styles.calendarWrapper}>
            <div className={styles.calendar}>
                {days.map((day, index) => {
                    const dateObj = dates[index]
                    const isSelected = dateObj.toDateString() === selectedDate.toDateString();

                    return (
                        <div
                            key={index}
                            onClick={()=>setSelectedDate(dateObj)}
                            className={`${styles.calendarCell} ${isSelected ? styles.today : ''}`}
                        >
                            <div className={`${styles.dayLabel} ${isSelected ? styles.todayLabel : ''}`}>{day}</div>
                            <div className={styles.dateNumber}>{dateObj.getDate()}</div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.underLine}></div>
        </div>
    );
}

export default Calendar;

