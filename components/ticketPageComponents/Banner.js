export const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://funworldblr.s3.amazonaws.com/public/ticketspageimg.webp')",
      }}
      className="w-[80vw] lg:flex hidden mt-16 mx-auto bg-no-repeat h-[250px] bg-cover rounded-xl bg-center justify-around gap-6 items-center px-4"
    >
      <div className="flex flex-col items-center justify-start text-white">
        <img
          src={
            "https://funworldblr.s3.amazonaws.com/public/Reusable/ticketsicon1.webp"
          }
          alt="abc"
        />
        <span className="text-center text-[23px] font-[700] ">
          100% Secure Payments
        </span>
        <span className="text-center text-[18px] ">
          Go cashless. Make 100% secure payments
        </span>
      </div>
      <div className="flex flex-col items-center justify-start text-white">
        <img
          src={
            "https://funworldblr.s3.amazonaws.com/public/Reusable/ticketsicon2.webp"
          }
          alt="abc"
        />
        <span className="text-center text-[23px] font-[700] ">Trust pay</span>
        <span className="text-center text-[18px] ">
          100% Payment Protection
        </span>
      </div>
      <div className="flex flex-col items-center justify-start text-white">
        <img
          src={
            "https://funworldblr.s3.amazonaws.com/public/Reusable/ticketsicon3.webp"
          }
          alt="abc"
        />
        <span className="text-center text-[23px] font-[700] ">
          Instant Booking
        </span>
        <span className="text-center text-[18px] ">
          Book & get instant tickets
        </span>
      </div>
      <div className="flex flex-col items-center justify-start text-white">
        <img
          src={
            "https://funworldblr.s3.amazonaws.com/public/Reusable/ticketsicon4.webp"
          }
          alt="abc"
        />
        <span className="text-center text-[23px] font-[700] ">
          24X7 Support
        </span>
        <span className="text-center text-[18px] ">
          Have a query and need help ? Click here
        </span>
      </div>
    </div>
  );
};
