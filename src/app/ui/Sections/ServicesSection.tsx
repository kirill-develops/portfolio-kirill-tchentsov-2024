import { ReactNode } from 'react';
import { borderColorsArr } from '@/app/lib/themeClassNames';
import { SectionFrame, HeadingsFrame } from '@/app/ui/Frames';
import {
   Body,
   CardHeading,
   SectionHeading,
   SectionSubheading,
} from '@/app/ui/Typography';
import MobileSVG from '../svg/mobile';
import Newspaper from '../svg/newspaper';
import Globe from '../svg/globe';
import StyledPolygon from '../svg/hexagon';

const serviceArr = [
   {
      title: 'Web Development',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat ipsam voluptas et ullam, eveniet sapiente qui hic veniam quaerat nesciunt aliquam. Voluptatem alias pariatur iste expedita numquam maiores voluptas!',
      icon: <Globe />,
   },
   {
      title: 'Marketing Services',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat ipsam voluptas et ullam, eveniet sapiente qui hic ',
      icon: <Newspaper />,
   },
   {
      title: 'Responsive Design',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat ipsam voluptas et ullam, eveniet sapiente qui hic veniam quaerat nesciunt aliquam. Voluptatem alias pariatur iste expedita numquam maiores voluptas!',
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
         className={`shadow-card relative flex flex-1 flex-col gap-y-5 border-b-2 bg-white p-5 pt-20 ${borderColorsArr[index]}`}
      >
         <StyledPolygon index={index}>{icon}</StyledPolygon>
         <CardHeading>{title}</CardHeading>
         <Body>{body}</Body>
      </section>
   );
}

export default function ServicesSection(): JSX.Element {
   return (
      <SectionFrame id="services">
         <HeadingsFrame>
            <SectionHeading>What I do?</SectionHeading>
            <SectionSubheading>Services</SectionSubheading>
         </HeadingsFrame>
         <div className="flex flex-col gap-x-8 gap-y-24 pt-10 lg:flex-row">
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
