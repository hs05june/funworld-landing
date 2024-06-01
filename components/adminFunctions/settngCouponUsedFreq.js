import React from 'react'

const settngCouponUsedFreq = (setSoldTicketsCategories,setCouponsDistribution,soldTicketsArray) => {
    let child = 0, adult = 0, senior = 0;
    let a = 0, b= 0,c= 0,d= 0,e= 0,f= 0;
    soldTicketsArray?.forEach(e=>{
      child += e?.tickets[0]?.child;
      adult += e?.tickets[0]?.adult;
      senior += e?.tickets[0]?.senior;

      if(e?.coupon_used == '10SUMMEROFF'){
        a++;
      }
      else if(e?.coupon_used == "20GOVTOFF"){
        b++;
      }
      else if(e?.coupon_used == "30STUDENTOFF"){
        c++;
      }
      else if(e?.coupon_used == "FUN5"){
        d++;
      }
      else if(e?.coupon_used== "WONDERWOMEN"){
        e++;
      }
      else{
        f++;
      }
    })
    setCouponsDistribution({a,b,c,d,e,f})
    setSoldTicketsCategories({child,adult,senior});


}

export default settngCouponUsedFreq


