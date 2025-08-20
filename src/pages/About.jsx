import React from "react";

const About = () => {
  return (
    <div className="bg-white py-20 px-6 mt-3 md:px-16 lg:px-28">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Hotel Policies & Guidelines
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto">
        To ensure an exceptional and worry-free experience for all our guests,
        please review our core policies and guidelines.
      </p>

      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-0 pt-20 gap-y-10">
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-[520px] md:h-[520px] -top-32 sm:-top-40 md:-top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>

        <div className="py-10  md:py-0 md:px-10 mb-5">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            🕓
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Check-in & Check-out
            </h3>
            <p className="text-sm text-slate-500">
              Check-in is available from 1:00 PM. Check-out is required by 11:00
              AM. Late check-out will incur an additional fee, which may be
              deducted from your deposit.
            </p>
          </div>
        </div>

        <div className="py-10 md:py-0  md:px-10 mb-5">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            💳
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Payment & Cancellation
            </h3>
            <p className="text-sm text-slate-500">
              Bookings are non-refundable. Deposits are required at check-in to
              cover potential damages or losses during your stay.
            </p>
          </div>
        </div>

        <div className="py-10 md:py-0 md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            🚭
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Non-Smoking Policy
            </h3>
            <p className="text-sm text-slate-500">
              All rooms and indoor areas are 100% smoke-free. A cleaning fee
              applies for violations.
            </p>
          </div>
        </div>

        {/* La política de mascotas queda eliminada, ya que es no pet friendly */}
        {/* 
        <div className="py-10 border-b md:py-0 lg:border-r md:border-b-0 md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            🐶
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Pet Policy
            </h3>
            <p className="text-sm text-slate-500">
              Pets are welcome in designated rooms. A small additional fee applies. Service animals stay free. A second pet will be charged as an additional stay.
            </p>
          </div>
        </div>
        */}

        <div className="py-10  md:py-0  md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            🧑‍🤝‍🧑
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Visitors Policy
            </h3>
            <p className="text-sm text-slate-500">
              Visitors are only allowed in social areas during non-quiet hours.
              Please respect quiet hours from 9:00 PM to 8:00 AM.
            </p>
          </div>
        </div>

        <div className="py-10 md:py-0 md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            🧼
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              Cleanliness & Safety
            </h3>
            <p className="text-sm text-slate-500">
              Our rooms are sanitized upon request with the door sign. Hand
              sanitizers are available upon request for your safety.
            </p>
          </div>
        </div>

        <div className="py-10 md:py-0 md:px-10">
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            🚪
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600">
              After Hours Service
            </h3>
            <p className="text-sm text-slate-500">
              Opening the door after 11:00 PM will incur an additional service
              fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
