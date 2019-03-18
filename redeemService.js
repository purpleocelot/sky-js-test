const constants = require('./constants');

function rewardsService({ customerAccountNumber, portfolio, eligibilityService }) {
  try {
    eligibility = eligibilityService(customerAccountNumber);

    // If not eligible do an early return.
    if (eligibility === constants.CUSTOMER_INELIGIBLE) return { data: [], error: null }; 

    return filteredRewards(portfolio);

    function filteredRewards(portfolio) {
      // Filter the constants array of rewards with those that have rewards and match the customer's portfolio array,
      // then map the filtered results to just return an array of rewards.

      return { 
        data: constants.REWARDS
          .filter(r => !!r.reward && portfolio.includes(r.channel))
          .map(m => m.reward),
        error: null
      };
    }
  }
  catch (ex) {
    if (ex === constants.ACCOUNT_ERROR.name) {
      return { data: [], error: constants.ACCOUNT_ERROR.message };
    }

    // Must be a Technical failure exception 
    return { data: [], error: null };
  }
}

module.exports = {
  rewardsService
}