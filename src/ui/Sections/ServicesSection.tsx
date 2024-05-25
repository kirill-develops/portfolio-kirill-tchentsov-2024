import { ReactNode } from 'react';
import { borderColorsArr } from '@/lib/themeClassNames';
import { SectionFrame, HeadingsFrame } from '@/ui/Frames';
import {
   Body,
   CardHeading,
   SectionHeading,
   SectionSubheading,
} from '@/ui/Typography';
import MobileSVG from '@/ui/svg/mobile';
import Newspaper from '@/ui/svg/newspaper';
import Globe from '@/ui/svg/globe';
import StyledPolygon from '@/ui/svg/hexagon';

const serviceArr = [
   {
      title: 'Web Development',
      body: `I meticulously and skillfully craft engaging digital experiences that are intuitive & adaptive to all users. My web development skills will give your project smooth functionality and innovative, unique features.`,
      icon: <Globe />,
   },
   {
      title: 'Marketing Services',
      body: `Leveraging my marketing background, I craft web applications that enhance brand recognition. My aim is to forge impactful relationships that drive business outcomes and leave a lasting impression.`,
      icon: <Newspaper />,
   },
   {
      title: 'Responsive Design',
      body: `My work focuses on responsive design for a striking presence on all devices, delivering elegance & accessibility. I'm committed to a flawless user experience, ensuring your brand's impact across all platforms.`,
      icon: <MobileSVG />,
   },
];

type ServiceCardProps = {
   index: number;
   serviceObj: {
      title: string;
      body: string;
      icon: ReactNode;
   };
};

function ServiceCard({ serviceObj, index }: ServiceCardProps): JSX.Element {
   const { icon, title, body } = serviceObj;

   return (
      <section
         className={`relative flex flex-1 flex-col justify-between gap-y-5 border-b-2 bg-white p-5 pt-20 shadow-card ${borderColorsArr[index]}`}
      >
         <StyledPolygon index={index}>{icon}</StyledPolygon>
         <CardHeading>{title}</CardHeading>
         <Body justify="text-center">{body}</Body>
      </section>
   );
}

export default function ServicesSection(): JSX.Element {
   return (
      <SectionFrame
         id="services"
         className="lg:min-h-screen"
      >
         <HeadingsFrame>
            <SectionHeading>What I do?</SectionHeading>
            <SectionSubheading>Services</SectionSubheading>
         </HeadingsFrame>
         <div className="flex flex-col gap-x-7 gap-y-24 pt-10 lg:flex-row">
            {serviceArr.map((serviceObj, index) => (
               <ServiceCard
                  serviceObj={serviceObj}
                  index={index}
                  key={serviceObj.title}
               />
            ))}
         </div>
      </SectionFrame>
   );
}
