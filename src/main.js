'use strict';

const _ = require('lodash');

let config = {
    key: '',
    secret: '',
    trading: false,
    nonce: 0,
    rate: 200,
}

let privateQueue = [];
let publicQueue = [];
let timestamp = 0;
let lockActive = false;

function wrapper(apiKey, apiSecret, options) {
    
    if (!apiKey || !_.isString(apiKey) || !apiSecret || !_.isString(apiSecret)) {
        return;
    }
    
    config.key = apiKey;
    config.secret = apiSecret;
    config.trading = true;
    
    if (!options) {
        return;
    }
    
    if (options.nonce) {
        if (_.isFinite(options.nonce) && options.nonce > 0) {
            config.nonce = options.nonce;
        } else {
            throw new Error('Supplied nonce is invalid');
        }
    } else {
        config.nonce = Date.now();
    }
    
    if (options.rate && _.isFinite(options.rate) && options.rate > 0) {
        config.rate = 1000 / options.rate;
    }
    
    
}

function processQueue() {
    
    const timeUntilNext = config.rate - (Date.now() - timestamp);
    if (timeUntilNext > 0) {
        setTimeout(processQueue, timeUntilNext);
        return;
    }
    
    if ((lockActive || _.isEmpty(privateQueue)) && _.isEmpty(publicQueue)) {
        // Draw from publicQueue
    }
    
    if (!lockActive && !_.isEmpty(privateQueue)) {
        // Draw from privateQueue
    }
}





/*
function wrapper(apiKey, apiSecret, nonce) {
    
    if (apiKey && apiSecret) {
        key = apiKey;
        secret = apiSecret;
        trading = true;
    };
    
    nonce = 
    
};

function sendRequest(api, type, command, params) {
    
    let query = params;
    
    
    
}

*/


