import axios from 'axios';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coins from './components/Coins/Coins'
import Navbar from './components/Navbar/Navbar';
import Coin from './routes/Coin';

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`

const App = () => {

  const [coins, setCoins] = useState([])

  useEffect(() => {

    axios.get(url)
      .then(res => {
        setCoins(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;