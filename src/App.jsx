import './App.css'
import logo from './assets/main-icon.png'
import TodayDate from './todayDate'

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
            <button className="coalition-button">제휴 식당 보기</button>
          </div>
        </div>
     </div>
  )
}

export default App
