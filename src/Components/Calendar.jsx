import React from "react";
import styles from "../css/Calendar.module.css";
import { useSelection } from "../contexts/SelectionContext.jsx";
import { getTodayKST, formatDateToString } from "../utils/dateUtils.js";

function Calendar() {
  const { selectedDate, setSelectedDate } = useSelection();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const today = getTodayKST();

  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendar}>
        {days.map((day, index) => {
          const dateObj = dates[index];
          const isSelected =
            formatDateToString(dateObj) === formatDateToString(selectedDate);
          const isToday =
            formatDateToString(dateObj) === formatDateToString(today);

          return (
            <div
              key={index}
              onClick={() => setSelectedDate(dateObj)}
              className={`${styles.calendarCell} ${
                isSelected ? styles.selected : ""
              } ${isToday ? styles.today : ""}`}
            >
              <div
                className={`${styles.dayLabel} ${
                  isSelected ? styles.selectedLabel : ""
                }`}
              >
                {day}
              </div>
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
