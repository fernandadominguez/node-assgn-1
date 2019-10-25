module.exports = {

    // currency rates
    cadToUsd: 1.5,
    usdToCad: 0.5,

    // cadToGbp: 0.6,
    // gbpToCad: 1.68,

    CadToUsd(amount) {
        let rate = this.cadToUsd;
        return amount * rate;
    },

    UsdToCad(amount) {
        let rate = this.usdToCad;
        return amount * rate;
    },

    setRate(rateName, rateValue) {
        if (rateName === 'CadToUsd') {
            this.cadToUsd = rateValue;
            return true;
        }
        else if (rateName === 'UsdToCad') {
            usdToCad = rateValue;
            return true;
        }

        else {
            return false; 
        }
    },

    getRate(rateName) {
        if (rateName === 'CadToUsd') {
            currentExchangeRate = this.cadToUsd;
            return currentExchangeRate;
        }
        else if (rateName === 'UsdToCad') {
            currentExchangeRate = usdToCad;
            return currentExchangeRate;
        }
        else {
            return undefined;
        }
    }
}



// module.exports = {

    //     // currency rates
    //     CadToUsdRate: 1.5,
    //     CsdToCadRate: 0.5,
    
    //     // cadToGbp: 0.6,
    //     // gbpToCad: 1.68,
    
    //     CadToUsd(amount) {
    //         let rate = this.CadToUsdRate;
    //         return amount * rate;
    //     },
    
    //     UsdToCad(amount) {
    //         let rate = this.UsdToCadRate;
    //         return amount * rate;
    //     },
    
    //     setRate(rateName, rateValue) {
    //         name = rateName + 'Rate';
    //         this.name = rateValue;
    //         if (rateName) {
    //             return true;
    //         }
    
    //         else {
    //             return false; 
    //         }
    //     },
    
    //     getRate(rateName) {
    //         if (rateName === 'CadToUsd') {
    //             currentExchangeRate = this.CadToUsdRate;
    //             return currentExchangeRate;
    //         }
    //         else if (rateName === 'UsdToCad') {
    //             currentExchangeRate = UsdToCadRate;
    //             return currentExchangeRate;
    //         }
    //         else {
    //             return undefined;
    //         }
    //     }
    // }    
