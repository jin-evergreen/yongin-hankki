import styles from '../css/MenuDisplay.module.css'
import { useDate } from '../contexts/DateContext';
import { formatDateToString } from '../utils/dateUtils.js';
import menuData from '../data/menu'

function MenuDisplay({selectedRestaurant}){

    const {selectedDate} = useDate();
    const today = formatDateToString(selectedDate);

    if(!selectedRestaurant) {
        return <div className={styles.noRestaurant}>
            <p>식당을 선택하면</p>
            <p>오늘의 식단을 확인할 수 있어요!</p>
        </div>
    }

    const restaurantData = menuData[selectedRestaurant];

    if(!restaurantData){
        return <div>데이터가 없습니다.</div>
    }

    const {corners,dailyKcal} = restaurantData;

    let [restarant, floor] = ["",""]
    if(selectedRestaurant == "인성관 식당"){
        restarant = "인성관";
        floor = "1층";
    } else if(selectedRestaurant == "용오름대학 식당"){
        restarant = "용오름";
        floor = "B1층"
    } else {
        restarant = "생활관";
        floor = "1층";
    }


    return (
        <>
        <div className={styles.extra}><span>식당위치</span></div>
        <div className={styles.container}>
            <div className={styles.operatingHours}>
                <p>{restarant}</p>
                <p>{floor}</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.cornersContainer}>
                {Object.entries(corners).map(([cornerName,cornerData],index)=>{
                const todayMenu = cornerData.dailyMenus[today] || [];
                const price = cornerData.price;
                const kcal = dailyKcal?.[today]?.[index] || 0;

                return (
                    <div key={cornerName} className={styles.cornerBox}>
                        <h3 className={styles.cornerTitle}>{cornerName} <span>{price !== 0 && ` (₩${price})`}{kcal !== 0 && ` - ${kcal}kcal`}</span></h3>

                        {todayMenu.length > 0 ? (
                            <ul className={styles.menuList}>
                                {todayMenu.map((menuItem, idx)=> (
                                    <li key={idx}>{menuItem}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.noMenu}>오늘의 메뉴가 없습니다.</p>
                        )}
                    </div>
                    );
                })}
            </div>
        </div>
        </>
    )
}

export default MenuDisplay