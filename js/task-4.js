'use strict';

function getShippingCost(country) {
  let deliveryFee = 0;
  switch (country) {
    case 'China':
      deliveryFee = 100;
      return `Shipping to ${country} will cost ${deliveryFee} credits`;
      break;
    case 'Chile':
      deliveryFee = 250;
      return `Shipping to ${country} will cost ${deliveryFee} credits`;
      break;
    case 'Australia':
      deliveryFee = 170;
      return `Shipping to ${country} will cost ${deliveryFee} credits`;
      break;
    case 'Jamaica':
      deliveryFee = 120;
      return `Shipping to ${country} will cost ${deliveryFee} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
