// import React from 'react';
// import HTMLReactParser from 'html-react-parser';
// import { useParams } from 'react-router-dom';
// import millify from 'millify';
// import {Col,Row,Typography,Select} from 'antd'
// import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

// const {Title , Text} = Typography;
// const {Option} = Select



// const CryptoDetails = () => {
//   const { coinId } = useParams();
//   console.log(coinId);
//   return (
//     <div>CryptoDetails { coinId }</div>
    
//   )
// }


// export default CryptoDetails

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useGetCryptoDetailsQuery  } from '../services/cryptoApi'; // Import your API configuration

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } =  (coinId);

  if (isFetching) {
    return 'Loading...';
  }

  if (!data) {
    return 'Data not available';
  }

  const cryptoDetails = data.data.coin;

  return (
    <div>
      <h1>{cryptoDetails.name} ({cryptoDetails.symbol})</h1>
      <p>Price: ${cryptoDetails.price}</p>
      <p>Market Cap: ${cryptoDetails.marketCap}</p>
      <p>24h Volume: ${cryptoDetails.volume}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CryptoDetails;

