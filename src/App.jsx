// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import SideBar1 from './components/SideBar1'
import SideBar2 from './components/SideBar2'

function App() {

  return (
    <>
    {/* <Navbar /> */}
    <div className='d-flex'>

    <SideBar1 />
    <Body />
    <SideBar2 />
    </div>
    </>
  )
}

export default App
