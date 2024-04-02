import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
// import YouTubePlayPage from './components/YouTubePlayPage'
import Aside from './components/Aside'

function App() {


  return (
    <>
      <Navbar />

      <div className='flex'>
        <Aside />
        <Home />
      </div>

      {/* <YouTubePlayPage /> */}
    </>
  )
}

export default App
