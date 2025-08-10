import React from 'react';
import styles from '../css/Calendar.module.css';

function Calendar(){

    const days = ["S", "M", "T", "W", "T", "F", "S"];

    const today = new Date();
    const todayDate = today.getDate();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return date.getDate();
    });

    return (
        <div className={styles.calendarWrapper}>
            <div className={styles.calendar}>
                {days.map((day, index) => {
                    const isToday = dates[index] === todayDate;
                    return (
                        <div
                            key={index}
                            className={`${styles.calendarCell} ${isToday ? styles.today : ''}`}
                        >
                            <div className={`${styles.dayLabel} ${isToday ? styles.todayLabel : ''}`}>{day}</div>
                            <div className={styles.dateNumber}>{dates[index]}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Calendar;

