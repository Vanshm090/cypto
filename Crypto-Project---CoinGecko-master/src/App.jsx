import './App.css'
import Banner from './components/Banner/Banner'
import CoinTable from './components/CoinTable/CoinTable'
import Navbar from './components/Navbar/Navbar'
import UserList from './components/UserList/UserList';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <CoinTable />
      <UserList />
    </>
  )
}

export default App
