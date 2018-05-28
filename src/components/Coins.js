import React from 'react'

const test= 100000000;
const Coins = (props) => (
    <div>
        <table className="paleBlueRows">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
            {props.data.map(coin => 
                <tr key={coin.id}>    
                    <th>{coin.rank}</th>
                    <th>{coin.symbol}</th>
                    <th>{coin.name}</th>
                    <th>{coin.price_usd}</th>
                    <th>{coin.market_cap_usd}</th>
                </tr>
            )}
            </tbody>
        </table>

    </div>

)

export default Coins