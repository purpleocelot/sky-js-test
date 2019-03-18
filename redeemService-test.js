const redeemService = require('./redeemService');
const constants = require('./constants');

const eligibleCustomer = 1;
const ineligibleCustomer = 2;
const invalidCustomer = 3;
const systemError = 4;

// | **Channel** | **Reward**                          |
// |-------------|-------------------------------------|
// | SPORTS      | CHAMPIONS_LEAGUE_FINAL_TICKET       |
// | KIDS        | N/A                                 |
// | MUSIC       | KARAOKE_PRO_MICROPHONE              |
// | NEWS        | N/A                                 |
// | MOVIES      | PIRATES_OF_THE_CARIBBEAN_COLLECTION |
const emptyPortfolio = [];
const noRewardsPortfolio = ['KIDS', 'NEWS'];
const fullPortfolio = ['SPORTS', 'KIDS', 'MUSIC', 'NEWS', 'MOVIES'];

describe("redeemService Functions", function() {
 
  describe("rewardsService", function() {
 
    it("should return no rewards when customer is ineligible", function() {
      let params = paramBuilder(ineligibleCustomer, fullPortfolio);
      let value = redeemService.rewardsService(params);
      expect(value).toBeDefined();
      expect(value.data.length).toBe(0);
      expect(value.error).toBeNull();
    });
  
    it("should return no rewards when customer is eligible, but has no portfolio", function() {
      let params = paramBuilder(eligibleCustomer, emptyPortfolio);
      let value = redeemService.rewardsService(params);
      expect(value).toBeDefined();
      expect(value.data.length).toBe(0);
      expect(value.error).toBeNull();
    });

    it("should return no rewards when customer is eligible, but has portfolio without rewards", function() {
      let params = paramBuilder(eligibleCustomer, noRewardsPortfolio);
      let value = redeemService.rewardsService(params);
      expect(value).toBeDefined();
      expect(value.data.length).toBe(0);
      expect(value.error).toBeNull();
    });

    it("should return rewards when customer is eligible and has portfolio with rewards", function() {
      let params = paramBuilder(eligibleCustomer, fullPortfolio);
      let value = redeemService.rewardsService(params);
      expect(value).toBeDefined();
      expect(value.data.length).toBe(3);
      expect(value.data[0]).toBe('CHAMPIONS_LEAGUE_FINAL_TICKET');
      expect(value.data[1]).toBe('KARAOKE_PRO_MICROPHONE');
      expect(value.data[2]).toBe('PIRATES_OF_THE_CARIBBEAN_COLLECTION');
      expect(value.error).toBeNull();
    });

    it("should return no rewards and an error message when customer is invalid", function() {
      let params = paramBuilder(invalidCustomer, fullPortfolio);
      let value = redeemService.rewardsService(params);
      expect(value).toBeDefined();
      expect(value.data.length).toBe(0);
      expect(value.error).toBe(constants.ACCOUNT_ERROR.message);
    });
 
    it("should return no rewards when a system error occurs", function() {
      let params = paramBuilder(systemError, fullPortfolio);
      let value = redeemService.rewardsService(params);
      expect(value).toBeDefined();
      expect(value.data.length).toBe(0);
      expect(value.error).toBeNull();
    });
 

    // Test helper functions
    // =====================

    function eligibilityServiceStub(customerAccountNumber) {
      if (customerAccountNumber === eligibleCustomer) return constants.CUSTOMER_ELIGIBLE;
      if (customerAccountNumber === ineligibleCustomer) return constants.CUSTOMER_INELIGIBLE;
      if (customerAccountNumber === invalidCustomer) throw constants.ACCOUNT_ERROR.name;
      
      // systemError
      throw 'Technical failure';
    }

    function paramBuilder(customer, porfolio) {
      return {
        customerAccountNumber: customer, 
        portfolio: porfolio, 
        eligibilityService: eligibilityServiceStub
      };
    }
  });
});