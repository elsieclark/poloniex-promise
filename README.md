# poloniex-promise
A Promise-based wrapper for the Poloniex API


Installation
------------

```sh
$ npm install --save poloniex-promise
```

```js
const poloniex = require('poloniex-promise');
```

## Push API ##

The Push API provides asynchronous real-time data using WebSockets, without requiring outbound requests. This is useful, because it doesn't count towards Poloniex's API rate limit (6 calls/second). The Push API allows you to attach callbacks to the Ticker, the Trollbox, and the Order Book/Trades. It maps pretty closely to Poloniex's API.

The Push API uses Node.js EventEmitters.

#### Push API Methods ####
```js
poloniex.ticker.on('ticker', (tickerData) => {});
// Subscribe to the ticker, all currency pairs

poloniex.ticker.on('BTC_ETH', (tickerData) => {});
// Subscribe to the ticker, specified currency pair only

tickerData = {
    currencyPair,   // String
    last,           // Number
    lowestAsk,      // Number
    highestBid,     // Number
    percentChange,  // Number
    baseVolume,     // Number
    quoteVolume,    // Number
    isFrozen,       // Boolean
    _24hrHigh,      // Number
    _24hrLow,       // Number
};
// Data returned by the ticker


poloniex.orderBook.on('BTC_ETH', (orderBookData) => {});
// Subscribe to the order book of the specified currency pair

orderBookData = {
    data: {
        rate,        // Number
        type,        // String: 'bid' or 'ask'
        amount,      // Number
    },
    type: 'orderBookModify',
};
// OR //
orderBookData = {
    data: {
        rate,        // Number
        type,        // String: 'bid' or 'ask'
    },
    type: 'orderBookRemove',
};
// OR //
tradeData = {
    data: {
        tradeId, // Number
        rate,    // Number
        amount,  // Number
        date,    // Date
        total,   // Number
        type,    // String: 'buy' or 'sell'
    },
    type: 'newTrade',
};
// Data returned by order book.


poloniex.trollbox.on('message', (messageData) => {});

messageData = {
    messageNumber,
    username,
    message,
    reputation,
};
```

### Synchronous API ###

The Synchronous API encapsulates both Poloniex's Public and Trading APIs. This library manages most of the tedious interaction with the server automatically, behind the scenes. You don't need to worry about:
* Rate limiting
* Nonces (for trading calls)
* API keys/encryption






















