export const checkCouponAndAddingDiscount = async ({
  coupon,
  checkoutPrice,
  setDiscountPrice,
  setCheckoutPriceAfterDiscount,
  setDiscountApplied,
  info,
}) => {
  if (checkoutPrice < 999) {
    window.alert("Please add more items in the cart to avail the discount");
    return;
  }
  if (
    coupon === "10SUMMEROFF" ||
    coupon === "20GOVTOFF" ||
    coupon === "30STUDENTOFF" ||
    coupon === "testing12345" ||
    coupon === "FUN5"
  ) {
    try {
      // const res = await axios.post(
      //   "https://api2.fwblr.apistack.net/api/coupon/verifycouponcode",
      //   {
      //     couponCode: code, // Fix the variable name here from coupon to code
      //   }
      // );

      let discount = 0;

      if (coupon === "10SUMMEROFF") {
        discount = 0.1;
      } else if (coupon === "20GOVTOFF") {
        discount = 0.2;
      } else if (coupon === "30STUDENTOFF") {
        discount = 0.3;
      } else if (coupon === "testing12345") {
        discount = 0.999;
      } else if (coupon === "FUN5") {
        if (info.child > 0 || info.senior > 0 || info.adult < 5) {
          window.alert(
            "This coupon is only valid on 5 Adult tickets(or a multiple of 5). So please remove the child and adult tickets and add 5 or more adult tickets and reapply the coupon"
          );
          return;
        } else {
          let a = 2 * Math.floor(info.adult / 5);
          // console.log(a);
          discount = a / info.adult;
        }
      }
      let roundedDiscount = Math.round(checkoutPrice * discount);
      const newCheckoutPrice = checkoutPrice - roundedDiscount;
      setDiscountPrice(roundedDiscount);
      setCheckoutPriceAfterDiscount(newCheckoutPrice);
      setDiscountApplied(true);
    } catch (e) {
      window.alert("Some error occured, please try again");
    }
  } else {
    window.alert("Please add a valid coupon code from the above given coupons");
    return;
  }
};
