import React from 'react';
import { HeadingsFrame, SectionFrame } from '../Frames';
import {
   Body,
   CardHeading,
   SectionHeading,
   SectionSubheading,
} from '../Typography';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '../components/accordion';
import { ReactChildProps } from '@/lib/genericTypes';
import { borderColorsArr } from '@/lib/themeClassNames';
import { skillsGroupArr } from '@/lib/skillsArr';

function IconWrapper({ children }: ReactChildProps) {
   if (!React.isValidElement(children)) {
      return null;
   }

   const ChildComponent = children.type;
   return (
      <ChildComponent
         className="h-8 w-8 text-font"
         fill="currentColor"
      />
   );
}

export default function SkillsSection(): JSX.Element {
   return (
      <SectionFrame
         id="skills"
         className="bg-gradient-to-bl from-[#f0efe9] via-[#d0d0d0] to-[#cccbbf]"
      >
         <HeadingsFrame>
            <SectionHeading>My Specialty</SectionHeading>
            <SectionSubheading>My Skills</SectionSubheading>
         </HeadingsFrame>
         <Accordion
            type="single"
            defaultValue="coreSkills"
         >
            {skillsGroupArr.map(({ groupTitle, id, skillsArr }, index) => (
               <AccordionItem
                  key={id}
                  value={id}
                  className={`${borderColorsArr[index]}`}
               >
                  <AccordionTrigger>
                     <CardHeading span>{groupTitle}</CardHeading>
                  </AccordionTrigger>
                  {skillsArr.map(({ title, id, icon }) => (
                     <AccordionContent key={id}>
                        <IconWrapper>{icon}</IconWrapper>
                        <Body span>{title}</Body>
                     </AccordionContent>
                  ))}
               </AccordionItem>
            ))}
         </Accordion>
      </SectionFrame>
   );
}
