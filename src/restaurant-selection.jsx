import React from 'react';
import styles from './restaurant-selection.module.css'

function RestaurantSelection(){
    return (
        <>
        <span className={styles.text}>원하는 식당을 선택하세요</span>
        <div className={styles.container}>
            <div className={styles.selectionBox}><span>인성관 식당</span></div>
            <div className={styles.selectionBox}><span>용오름대학 식당</span></div>
            <div className={styles.selectionBox}><span>기숙사 식당</span></div>
        </div>
        </>

    )
}

export default RestaurantSelection;