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
