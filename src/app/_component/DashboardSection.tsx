// import React from 'react';
// import Image from 'next/image';
// import AccessToChatbot from '../assets/access-to-chatbot.svg';
// import MonitorTranscript from '../assets/monitor-transcript.svg';
// import ManageAccess from '../assets/manage-access.svg';
// import UpdateOptimise from '../assets/update-optimize-chatbot.svg';
// import { Inter } from "next/font/google";

// const inter = Inter({
//     subsets: ["latin"],
//     display: "swap",
// });


// const DashboardSection: React.FC = () => {
//     return (
// <section
//   className="py-[80px] bg-gradient-to-b from-white to-[#F2F5F7]"
// >
//   <div className="container mx-auto max-w-[1353px]">
//     {/* First Row - 66.66% / 33.33% Distribution */}
//     <div className="flex flex-col lg:flex-row gap-5  px-5 py-3">
//       <div className="w-full bg-white lg:w-[64.5%] p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-[382px] flex flex-col">
//         <div className="w-full h-[207px] relative">
//           <Image
//             src={AccessToChatbot}
//             alt="AccessToChatbot"
//             fill
//             className="object-fill w-full h-full"
//           />
//         </div>
//         <div className="flex flex-col justify-start mt-4">
//           <p className="font-bold text-[24px] uppercase Cairo">
//             24/7 access to chatbot performance/statistics
//           </p>
//           <p className={`text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
//             Access your accounts data, performance reports and chatbot settings via your own personal dashboard.
//           </p>
//         </div>
//       </div>

//       {/* Right Card - 2/5 */}
//       <div className="w-full bg-white lg:w-[35.5%] p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-[382px] flex flex-col">
//         <div className="w-full h-[207px] relative">
//           <Image
//             src={MonitorTranscript}
//             alt="MonitorTranscript"
//             fill
//             className="object-fill w-full h-full"
//           />
//         </div>
//         <div className="flex flex-col justify-start mt-4">
//           <p className="font-bold text-[24px] uppercase Cairo">
//             Monitor transcripts & leads
//           </p>
//           <p className={`text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
//             Visit your dashboard to view all stored chatbot interactions and leads that have been captured.
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Second Row - 33.33% / 66.66% Distribution */}
//     <div className="flex flex-col lg:flex-row gap-5 px-5 py-3">
//       {/* Left Card - 2/5 */}
//       <div className="w-full bg-white lg:w-[36%] p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-[382px] flex flex-col">
//         <div className="w-full h-[207px] relative">
//           <Image
//             src={ManageAccess}
//             alt="ManageAccess"
//             fill
//             className="object-fill w-full h-full"
//           />
//         </div>
//         <div className="flex flex-col justify-start mt-4">
//           <p className="font-bold text-[24px] uppercase Cairo">
//             manage access & notifiers
//           </p>
//           <p className={`text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
//             Control your user management and set up who should receive leads via email & mobile.
//           </p>
//         </div>
//       </div>

//       {/* Right Card - 3/5 */}
//       <div className="w-full bg-white lg:w-[64%] p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-[382px] flex flex-col">
//         <div className="w-full h-[207px] relative">
//           <Image
//             src={UpdateOptimise}
//             alt="UpdateOptimise"
//             fill
//             className="object-fill w-full h-full"
//           />
//         </div>
//         <div className="flex flex-col justify-start mt-4">
//           <p className="font-bold text-[24px] uppercase Cairo">
//             Update & optimise chatbot and its capabilities
//           </p>
//           <p className={`text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
//             Continue to improve and develop your chatbot to achieve the best possible results by updating elements such as the AI knowledge base, intents, actions and many more.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     );
// };

// export default DashboardSection; 



import React from 'react';
import Image from 'next/image';
import AccessToChatbot from '../assets/access-to-chatbot-desk.png';
import MonitorTranscript from '../assets/monitor-transcript-desk.png';
import ManageAccess from '../assets/manage-access-desk.png';
import UpdateOptimise from '../assets/update-optimize-chatbot-desk.png';
import AccessToChatbotMob from '../assets/access-to-chatbot-mob.png';
import MonitorTranscriptMob from '../assets/monitor-transcript-mob.png';
import ManageAccessMob from '../assets/manage-access-mob.png';
import UpdateOptimiseMob from '../assets/update-optimize-chatbot-mob.png';

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const DashboardSection: React.FC = () => {
  return (
    <section className="py-[60px] bg-gradient-to-b from-white to-[#F2F5F7]">
      <div className="container mx-auto max-w-[1353px] sm:px-5 px-4">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row sm:gap-4 gap-2 py-3">
          {/* Left Card */}
          <div className="w-full bg-white lg:w-[64.5%] p-6 md:p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-auto flex flex-col">
            <div className="w-full h-[240px] md:h-[207px] relative">
              {/* Desktop Image */}
              <Image
                src={AccessToChatbot}
                alt="AccessToChatbot"
                fill
                className="object-contain w-full h-full hidden md:block"
              />
              {/* Mobile Image */}
              <Image
                src={AccessToChatbotMob}
                alt="AccessToChatbot Mobile"
                fill
                className="object-contain w-full h-full md:hidden"
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <p className="font-bold text-lg md:text-[24px] mb-3 lg:mt-2 uppercase Cairo">
                24/7 access to chatbot performance/statistics
              </p>
              <p className={`text-sm md:text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
                Access your accounts data, performance reports and chatbot settings via your own personal dashboard.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full bg-white lg:w-[35.5%] p-6 md:p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-auto flex flex-col">
            <div className="w-full h-[240px] md:h-[207px] relative">
              {/* Desktop Image */}
              <Image
                src={MonitorTranscript}
                alt="MonitorTranscript"
                fill
                className="object-contain w-full h-full hidden md:block"
              />
              {/* Mobile Image */}
              <Image
                src={MonitorTranscriptMob}
                alt="MonitorTranscript Mobile"
                fill
                className="object-contain w-full h-full md:hidden"
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <p className="font-bold text-lg md:text-[24px] mb-3 lg:mt-2 uppercase Cairo">
                Monitor transcripts & leads
              </p>
              <p className={`text-sm md:text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
                Visit your dashboard to view all stored chatbot interactions and leads that have been captured.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row sm:gap-4 gap-2 py-3">
          {/* Left Card */}
          <div className="w-full bg-white lg:w-[36%] p-6 md:p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-auto flex flex-col">
            <div className="w-full h-[240px] md:h-[207px] relative">
              {/* Desktop Image */}
              <Image
                src={ManageAccess}
                alt="ManageAccess"
                fill
                className="object-contain w-full h-full hidden md:block"
              />
              {/* Mobile Image */}
              <Image
                src={ManageAccessMob}
                alt="ManageAccess Mobile"
                fill
                className="object-contain w-full h-full md:hidden"
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <p className="font-bold text-lg md:text-[24px] mb-3 lg:mt-2 uppercase Cairo">
                manage access & notifiers
              </p>
              <p className={`text-sm md:text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
                Control your user management and set up who should receive leads via email & mobile.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full bg-white lg:w-[64%] p-6 md:p-8 border-[3px] border-[#E4E6EC] rounded-2xl h-auto flex flex-col">
            <div className="w-full h-[240px] md:h-[207px] relative">
              {/* Desktop Image */}
              <Image
                src={UpdateOptimise}
                alt="UpdateOptimise"
                fill
                className="object-contain w-full h-full hidden md:block"
              />
              {/* Mobile Image */}
              <Image
                src={UpdateOptimiseMob}
                alt="UpdateOptimise Mobile"
                fill
                className="object-contain w-full h-full md:hidden"
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <p className="font-bold text-lg md:text-[24px] mb-3 lg:mt-2 uppercase Cairo">
                Update & optimise chatbot and its capabilities
              </p>
              <p className={`text-sm md:text-[16px] font-medium text-[#000000CC] capitalize ${inter.className}`}>
                Continue to improve and develop your chatbot to achieve the best possible results by updating elements such as the AI knowledge base, intents, actions and many more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
