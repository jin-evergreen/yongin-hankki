import './App.css'
import React, {useState} from 'react'
import logo from './assets/main-icon.png'
import TodayDate from './Components/TodayDate'
import RestaurantSelection from './Components/Restaurant-selection'
import Calendar from './Components/Calendar'
import MenuDisplay from './Components/MenuDisplay'

function App() { 

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
     <div className='container'>
        <div className='header'>
          <img src={logo} alt="logo" className='icon' />
          <span className='title'>용인한끼</span>
        </div>
        <div className='overay-box'>
          <div className='date-button-wrapper'>
            <TodayDate />
            <button className="coalition-button" 
            onClick={()=>window.open('https://map.naver.com/p/favorite/myPlace/folder/841c9b6f17c4413eb548bd090aa60fcd/pc?c=9.00,0,0,0,dh','_blank')}>
              제휴 식당 보기</button>
          </div>
          < RestaurantSelection 
            selected = {selectedRestaurant}
            onSelect={(key)=>setSelectedRestaurant(key)}
          />
          < Calendar 
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
          />
          < MenuDisplay 
            selectedRestaurant={selectedRestaurant}
            selectedDate={selectedDate}
          />
        </div>
     </div>
  )
}

export default App
