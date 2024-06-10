import axios from 'axios';
import { findDayOfWeek } from './findDayOfWeek';
import { ticketPricingFunction } from './ticketPricing';

export const checkCouponAndAddingDiscount = async ({
  coupon,
  setCoupon,
  checkoutPrice,
  setDiscountPrice,
  setCheckoutPriceAfterDiscount,
  setDiscountApplied,
  info,
}) => {
  try {
    if (checkoutPrice < 999) {
      window.alert("Please add more items in the cart to avail the discount");
      return;
    }

    if (
      coupon === "10SUMMEROFF" ||
      coupon === "20GOVTOFF" ||
      coupon === "30STUDENTOFF" ||
      coupon === "FUN5" || coupon === "WONDERWOMEN"
    ) {
      let discount = 0;

      if (coupon === "10SUMMEROFF") {
        discount = 0.1;
      } else if (coupon === "20GOVTOFF") {
        if(info.senior > 0  || info.child > 0){
          setCoupon("");
          window.alert("You can't apply this coupon with Senior Citizens or Children in the ticket, please book a separate ticket for senior citizens / Children or continue without this coupon.")
          return;
        }

        discount = 0.2;

      } else if (coupon === "30STUDENTOFF") {
        if(info.senior > 0){
          setCoupon("");
          window.alert("You can't apply this coupon with Senior Citizens in the ticket, please book a separate ticket for senior citizens or continue without this coupon.")
          return;
        }
        discount = 0.3;
      } else if (coupon === "FUN5") {
        if (info.child > 0 || info.senior > 0 || info.adult < 5) {
          setCoupon("");
          window.alert(
            "This coupon is only valid on 5 Adult tickets (or a multiple of 5). Please remove the child and senior tickets and add 5 or more adult tickets to apply this coupon."
          );
          return;
        } else {
          const date = info.visitDate;

          var givenDate = await new Date(date);
          givenDate.setHours(0, 0, 0, 0); // Set time to midnight
      
          var currentDate =await new Date();
          currentDate.setHours(0, 0, 0, 0); // Set time to midnight
      
          var june15 =await new Date("2024-06-30");
          june15.setHours(0, 0, 0, 0); // Set time to midnight
      
          var isBeforeJune15th = givenDate <= june15;
      
          // Check if the given date is greater than or equal to the current date
          var isFutureDate = givenDate > currentDate;


          if(!isBeforeJune15th){
            window.alert("This offer is only valid till June 30th. Please select some other coupon.")
            return;
          }

          if(!isFutureDate){
            window.alert("This offer is only valid on pre-bookings so you cannot use this coupon for today's date. Please choose a future date to apply this offer.");
            return;
          }
          else{
            let a = 2 * Math.floor(info.adult / 5);
            discount = a / info.adult;
          }
        }
      }
      else if(coupon == "WONDERWOMEN"){

        if(info.child > 0){
          window.alert("The Offer is Applicable to Adult/Senior Women, please remove children from ticket")
          return;
        }

        const date = info.visitDate;
        if(findDayOfWeek(date) != "Wednesday"){
          setCoupon("");
          window.alert("The offer is only applicable for bookings of Wednesday");
          return;
        }

        else if(info.child+info.adult+info.senior != 2){
          setCoupon("");
          window.alert("The offer is only applicable for two Female tickets.(you have more than 2 people in the ticket to apply this offer).")
          return;
        }

        else{
          if(info.adult > 0){
            let p= checkoutPrice;
            const price = ticketPricingFunction("adult", info.visitDate);
            setDiscountPrice(p-price);
            setCheckoutPriceAfterDiscount(price);
            setDiscountApplied(true);
          }
          else{
              discount = 0.5;
              let roundedDiscount = Math.round(checkoutPrice * discount);
              const newCheckoutPrice = checkoutPrice - roundedDiscount;
              setDiscountPrice(roundedDiscount);
              setCheckoutPriceAfterDiscount(newCheckoutPrice);
              setDiscountApplied(true);
          }

          return;

        }


        
      }

      let roundedDiscount = Math.round(checkoutPrice * discount);
      const newCheckoutPrice = checkoutPrice - roundedDiscount;
      setDiscountPrice(roundedDiscount);
      setCheckoutPriceAfterDiscount(newCheckoutPrice);
      setDiscountApplied(true);
      // window.alert("The coupon has been applied. Please bring a physical ID card if you applied 30STUDENTOFF or 20GOVTOFF, The discount is only valid for the person with ID itself and not for his/her family member. You might have to pay the discounted money if you don't have a valid ID card for everyone on ticket while Checking in.")
    } else {
      window.alert("Please add a valid coupon code from the above given coupons");
      return;
    }
  } catch (error) {
    console.error("Some error occurred:", error);
    window.alert("Some error occurred, please try again");
  }
};
