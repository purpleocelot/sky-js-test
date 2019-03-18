const CUSTOMER_INELIGIBLE = 'customer ineligible';
const CUSTOMER_ELIGIBLE = 'customer eligible';

const REWARDS = [
  {
    channel: 'SPORTS',
    reward: 'CHAMPIONS_LEAGUE_FINAL_TICKET'
  },
  {
    channel: 'KIDS',
    reward: null
  },
  {
    channel: 'MUSIC',
    reward: 'KARAOKE_PRO_MICROPHONE'
  },
  {
    channel: 'NEWS',
    reward: null
  },
  {
    channel: 'MOVIES',
    reward: 'PIRATES_OF_THE_CARIBBEAN_COLLECTION'
  },
];

const ACCOUNT_ERROR = {
  name: 'INVLAID_ACCOUNT_NUMBER',
  message: 'Invalid account number'
};

module.exports = {
  CUSTOMER_INELIGIBLE,
  CUSTOMER_ELIGIBLE,
  REWARDS,
  ACCOUNT_ERROR
};