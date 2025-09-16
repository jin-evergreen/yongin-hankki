import React, { useState } from "react";
import styles from "../css/RestaurantSelection.module.css";
import { useSelection } from "../contexts/SelectionContext";

function RestaurantSelection() {
  const { selectedRestaurant, setSelectedRestaurant } = useSelection();

  return (
    <>
      <span className={styles.text}>원하는 식당과 날짜를 선택하세요</span>
      <div className={styles.container}>
        <div
          className={`${styles.selectionBox} ${
            selectedRestaurant === "인성관 식당" ? styles.selected : ""
          }`}
          onClick={() => setSelectedRestaurant("인성관 식당")}
        >
          <span>인성관 식당</span>
        </div>
        <div
          className={`${styles.selectionBox} ${
            selectedRestaurant === "용오름대학 식당" ? styles.selected : ""
          }`}
          onClick={() => setSelectedRestaurant("용오름대학 식당")}
        >
          <span>용오름 식당</span>
        </div>
        <div
          className={`${styles.selectionBox} ${
            selectedRestaurant === "기숙사 식당" ? styles.selected : ""
          }`}
          onClick={() => setSelectedRestaurant("기숙사 식당")}
        >
          <span>생활관 식당</span>
        </div>
      </div>
    </>
  );
}

export default RestaurantSelection;
