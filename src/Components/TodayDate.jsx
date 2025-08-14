import styles from '../css/TodayDate.module.css'

function TodayDate(){
    const today = new Date();

    const day = String(today.getDate()).padStart(2,'0');

    const monthYear = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short', 
  }); 

    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const weekday = weekdays[today.getDay()];

    return (
        
        <div className={styles.container}>
            <div className={styles.day}>{day}</div>
            <div className={styles.monthWeekday}>
                <div className={styles.month}>{monthYear}</div>
                <div>{weekday}</div>
            </div>
        </div>
    );
}

export default TodayDate;