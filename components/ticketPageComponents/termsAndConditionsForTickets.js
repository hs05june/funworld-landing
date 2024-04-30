export const TermsAndConditionsForTickets = () => {
  return (
    <div className="w-[80vw] mx-auto flex flex-col gap-8 mt-12">
      <div className="flex items-center justify-center">
        <h5 className="text-[#0B1A48] xl:text-[55px] lg:text-[42px] md:text-[35px] text-[28px] font-[550] ">
          Terms & Conditions:
        </h5>
      </div>

      <div className="flex flex-col gap-3 text-[#5B5B5B] xl:text-[21px] lg:text-[20px] md:text-[18px] text-[16px]">
        <div className="flex gap-4">
          <span className="h-[40px] flex justify-center items-center w-[40px]">
            <img
              src={
                "https://funworldblr.s3.amazonaws.com/public/bulletIcon.webp"
              }
              alt="abc"
            ></img>
          </span>
          <p>
            Child Ticket is not applicable for children below 80 cms. Child
            Ticket is applicable only for children between 80 cms – 140 cms of
            height only.
          </p>
        </div>

        <div className="flex gap-4">
          <span className="h-[40px] flex justify-center items-center w-[40px]">
            <img
              src={
                "https://funworldblr.s3.amazonaws.com/public/bulletIcon.webp"
              }
              alt="abc"
            />
          </span>
          <p>
            No Refunds | No Cancellations | No Exchanges | No Date Extensions
            under any circumstances.
          </p>
        </div>

        <div className="flex gap-4">
          <span className="h-[40px] flex justify-center items-center w-[40px]">
            <img
              src={
                "https://funworldblr.s3.amazonaws.com/public/bulletIcon.webp"
              }
              alt="abc"
            />
          </span>
          <p>Please wear masks at all times.</p>
        </div>

        <div className="flex gap-4">
          <span className="h-[40px] flex justify-center items-center w-[40px]">
            <img
              src={
                "https://funworldblr.s3.amazonaws.com/public/bulletIcon.webp"
              }
              alt="abc"
            />
          </span>
          <p>
            Timings due to Covid Restrictions are Funworld (10:30 Am – 7:00 Pm)
            and Waterworld (10:30 Am – 5:00 Pm){" "}
          </p>
        </div>

        <div className="flex gap-4">
          <span className="h-[40px] flex justify-center items-center w-[40px]"></span>
          <p>
            All Government and Public Holidays – Weekend Ticket Prices
            applicable.
          </p>
        </div>

        <div className="flex gap-4">
          <span>
            <img
              src="https://funworldblr.s3.amazonaws.com/public/bulletIcon.webp"
              alt="abc"
            ></img>
          </span>
          <p>
            STUDENT Discount if used, Must Carry a Valid Student ID Card for
            verification. Valid only for School & College Students.
          </p>
        </div>
      </div>
    </div>
  );
};
