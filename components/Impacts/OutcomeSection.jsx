import { Plus, Equal } from "lucide-react";

const OutcomeSection = () => {
  return (
    <section className="w-full bg-[#FFEDCE] my-[60px] md:my-[50px] py-[60px] md:py-[100px]">
      <div className="max-w-[1500px] mx-auto px-[20px]">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-[40px] md:gap-0">

          <div className="flex items-center col-span-12 md:col-span-3">
            <div className="grid grid-cols-12 w-full">

              <div className="col-span-12 md:col-span-10 flex flex-col items-center text-center">
                <h4 className="text-[22px] md:text-[26px] font-bold text-[#E2725B] mb-[12px]">
                  Increased academic Performance
                </h4>
                <p className="text-[#333] text-[15px] md:text-[18px] leading-[22px]">
                  (Foundational numeracy and literacy)
                </p>
              </div>

              {/* + */}
              <div className="col-span-12 md:col-span-2 flex justify-center items-center mt-[12px] md:mt-0">
                <Plus className="text-black w-6 h-6" />
              </div>

            </div>
          </div>

          <div className="flex items-center col-span-12 md:col-span-3">
            <div className="grid grid-cols-12 w-full">

              <div className="col-span-12 md:col-span-10 flex flex-col items-center text-center">
                <h4 className="text-[22px] md:text-[26px] font-bold text-[#E2725B] mb-[12px] leading-[28px]">
                  Increased attendance
                </h4>
              </div>

              {/* + */}
              <div className="col-span-12 md:col-span-2 flex justify-center items-center mt-[12px] md:mt-0">
                <Plus className="text-black w-6 h-6" />
              </div>

            </div>
          </div>

          <div className="flex items-center col-span-12 md:col-span-4">
            <div className="grid grid-cols-12 w-full">

              <div className="col-span-12 md:col-span-10 flex flex-col items-center text-center px-2">
                <h4 className="text-[22px] md:text-[26px] font-bold text-[#E2725B] mb-[12px]">
                  Social and emotional skills
                </h4>
                <p className="text-[#333] text-[15px] md:text-[18px] leading-[22px]">
                  (Resilience & grit, improved relationship skills & motivation)
                </p>
              </div>

              {/* = */}
              <div className="col-span-12 md:col-span-2 flex justify-center items-center mt-[12px] md:mt-0">
                <Equal className="text-black w-6 h-6" />
              </div>

            </div>
          </div>

          <div className="flex items-center col-span-12 md:col-span-2">
            <div className="w-full flex flex-col items-center text-center">
              <h4 className="text-[24px] md:text-[28px] font-bold text-[#E2725B]">
                Effective learners
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
