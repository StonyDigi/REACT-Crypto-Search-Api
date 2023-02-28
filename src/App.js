
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './components/Coin';

function App() {

    //2.lépés, két állapot felvétele 1. az api üres tömbje és az inputba beírt szöveg értékei
    
    //1.
    const [coinList, setCoinList] = useState([]);
    //2.
    const [search, setSearch] = useState("");

    //3.lépés, csatlakozunk az apihoz
    useEffect(()=>{
      axios.get("https://api.coinstats.app/public/v1/coins")
      .then(res => setCoinList(res.data.coins))
    }, [])
    
    //5. lépés, filter javascript-es beépített függvénnyel csak azokat az értékeket jelenítse amelyiket beírtam!!!
    const searchedCoin = coinList.filter(coin => {
      //Megnézem, hogy az Api-ből kinyert kriptovaluta  tömbben eltárolt és az tömbben és az inputmezőben amit beírtam szintén kisbetűssé téve, van-e egyezés!!
      return coin.name.toLowerCase().includes(search.toLowerCase())
    })

    //4. lépés, minden egyes bill. lenyomás belekerül a search változóba, onChange={(e) => setSearch(e.target.value) felvétele az input tag-en belül
    
  return (
    //1.lépés html oldal felépítése
    <div>
      
        <div className="crypto-header">
            <h1>Kriptovaluta Kereső</h1>
            <input type="text" placeholder='Bitcoin...' onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="crypto-container">

            {
              searchedCoin.map(coin =>{
                return <Coin name={coin.name}  icon={coin.icon} price={coin.price} symbol={coin.symbol} />
              })
            }

        </div>

        <footer>&copy; Created by Somossy László</footer>
        
    </div>
  );
}

export default App;