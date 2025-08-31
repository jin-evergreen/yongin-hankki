import React, { useState } from 'react';
import styles from '../css/Restaurant-selection.module.css'

function RestaurantSelection({selected,onSelect}){

    return (
        <>
        <span className={styles.text}>원하는 식당과 날짜를 선택하세요</span>
        <div className={styles.container}>
            <div 
                className={`${styles.selectionBox} ${selected === '인성관 식당' ? styles.selected:''}`}
                onClick={()=>onSelect('인성관 식당')}
            >
                <span>인성관 식당</span>
            </div>
            <div 
                className={`${styles.selectionBox} ${selected === '용오름대학 식당' ? styles.selected:''}`}
                onClick={()=>onSelect('용오름대학 식당')}
            >
                <span>용오름대학 식당</span>
            </div>
            <div 
                className={`${styles.selectionBox} ${selected === '기숙사 식당' ? styles.selected:''}`}
                onClick={()=>onSelect('기숙사 식당')}
            >
                <span>생활관 식당</span>
            </div>
        </div>
        </>

    )
}

export default RestaurantSelection;