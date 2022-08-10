import React from "react";

const Host = () => {
  return (
    <div className="py-16 px-14 flex flex-col lg:flex-row">
      <div className="flex-1 mx-5 my-2">
        <h1 className="text-2xl text-[#01254F]">
          Meet Your Host - Alistair Schultz
        </h1>
        <p className="text-gray-700 w-[480px] my-10">
          With more than 15 years of experience covering both the FX and CFD
          markets, Alistair has extensive knowledge covering algorithmic
          trading, market analysis & an impressive educational background. As
          the author of ‘Essentials for Trading Students – An Overview of the
          Basics for Aspiring Traders’, which was released in 2017, Alistair
          will take any aspiring trader from the basics right through to
          advanced analytics used in institutional funds. At the core of
          Alistair’s teachings is the ability to help each trader uncover their
          ‘Trading DNA', helping them flourish with the skills and timeframes
          that work best for them.
        </p>
      </div>
      <div className="flex-1 mx-5 my-2">
        <div>
          <iframe
            width={580}
            height={338}
            src="https://www.youtube.com/embed/Yid-EskklQk"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    </div>
  );
};

export default Host;
