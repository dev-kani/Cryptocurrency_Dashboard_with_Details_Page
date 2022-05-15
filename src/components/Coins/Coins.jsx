import { Link } from 'react-router-dom'
import Coin from '../../routes/Coin'
import CoinItem from '../CoinItem'
import './Coins.css'

const Coins = ({ coins }) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {coins.map(coin => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />}>
                            <CoinItem coin={coin} key={coin.id} />
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Coins