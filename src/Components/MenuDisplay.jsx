import styles from '../css/MenuDisplay.module.css'
import menuData from '../data/menu'

function MenuDisplay({selectedRestaurant}){

    const today = new Date().toISOString().slice(0,10);

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

    const {corners} = restaurantData;

    return (
        <>
        <div className={styles.extra}><span>운영시간</span></div>
        <div className={styles.container}>
            <div className={styles.operatingHours}>
                <p>09:00</p>
                <p>18:00</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.cornersContainer}>
                {Object.entries(corners).map(([cornerName,cornerData])=>{
                const todayMenu = cornerData.dailyMenus[today] || [];
                const price = cornerData.price;

                return (
                    <div key={cornerName} className={styles.cornerBox}>
                        <h3 className={styles.cornerTitle}>{cornerName} {price !== 0 && ` (${price}₩)`}</h3>

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