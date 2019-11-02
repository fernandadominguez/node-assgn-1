module.exports = { // will export to app.js

    // currency rates
    cadToUsd: 1.5,
    usdToCad: 0.5,

    // cadToGbp: 0.6,
    // gbpToCad: 1.68,

    // @param amount is the amount being the amount being exchanged
    // from Canadian dollars to Usd dollars
    // returns final calculated amount
    CadToUsd(amount) {
        let rate = this.cadToUsd;
        return amount * rate;
    },

    // @param amount is the amount being the amount being exchanged
    // from Usd dollars to Canadian dollars
    // returns final calculated amount
    UsdToCad(amount) {
        let rate = this.usdToCad;
        return amount * rate;
    },

    // @rateName is the name of the rate to be changed
    // @rateValue is the rate to which the rateName is being updated to
    // returns true if the rateName exists 
    // returns false if the rateName does not exist
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

    // Determines currency requested
    // returns current exchange rate
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
