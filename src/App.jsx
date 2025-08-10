import './App.css'
import logo from './assets/main-icon.png'
import TodayDate from './Components/TodayDate'
import RestaurantSelection from './Components/Restaurant-selection'
import Calendar from './Components/Calendar'

function App() {
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
            onClick={()=>window.open('https://map.naver.com/p/favorite/myPlace/folder/841c9b6f17c4413eb548bd090aa60fcd/pc?c=14.00,0,0,0,dh','_blank')}>
              제휴 식당 보기</button>
          </div>
          < RestaurantSelection />
          < Calendar />
        </div>
     </div>
  )
}

export default App
