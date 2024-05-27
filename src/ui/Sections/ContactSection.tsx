import React from 'react';
import { HeadingsFrame, SectionFrame } from '../Frames';
import { Body, SectionHeading, SectionSubheading } from '../Typography';
import ContactForm from '../FormComponent';
import {
   Contact,
   ContactsWrapper,
   EmailContact,
   EmailString,
   IconFrame,
   SectionWrapper,
} from '../FormComponent/elements';
import EnvelopeSVG from '@/svg/envelope';
import MapSVG from '@/svg/map';

const locations = ['Ottawa, ON', 'Toronto, ON'];

export default function ContactSection(): JSX.Element {
   return (
      <SectionFrame
         id="contact"
         className="sm:min-h-full"
      >
         <HeadingsFrame>
            <SectionHeading>Get in Touch</SectionHeading>
            <SectionSubheading>Contact</SectionSubheading>
         </HeadingsFrame>
         <SectionWrapper>
            <ContactForm />
            <ContactsWrapper>
               <EmailContact>
                  <IconFrame>
                     <EnvelopeSVG />
                  </IconFrame>
                  <EmailString />
               </EmailContact>
               <Contact>
                  <IconFrame>
                     <MapSVG />
                  </IconFrame>
                  <ul className="list-image-none">
                     {locations.map((location) => (
                        <li key={location}>
                           <Body span>{location}</Body>
                        </li>
                     ))}
                  </ul>
               </Contact>
            </ContactsWrapper>
         </SectionWrapper>
      </SectionFrame>
   );
}
