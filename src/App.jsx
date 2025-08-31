import './App.css'
import React, {useState} from 'react'
import logo from './assets/main-icon.png'
import TodayDate from './Components/TodayDate'
import RestaurantSelection from './Components/Restaurant-selection'
import Calendar from './Components/Calendar'
import MenuDisplay from './Components/MenuDisplay'
import { DateProvider } from './contexts/DateContext';

function App() { 

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <DateProvider>
     <div className='container'>
        <div className='header'>
          <img src={logo} alt="logo" className='icon' />
          <span className='title'>용인한끼</span>
        </div>
        <div className='overay-box'>
          <div className='date-button-wrapper'>
            <TodayDate />
            <button className="coalition-button" 
            onClick={()=>window.open('https://naver.me/GkRXNjGT','_blank')}>
              제휴 식당 보기</button>
          </div>
          < RestaurantSelection 
            selected = {selectedRestaurant}
            onSelect={(key)=>setSelectedRestaurant(key)}
          />
          < Calendar />
          < MenuDisplay 
            selectedRestaurant={selectedRestaurant}
          />
        </div>
     </div>
    </DateProvider>
  )
}

export default App
