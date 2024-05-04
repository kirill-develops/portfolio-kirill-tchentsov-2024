import {
   PageFrame,
   MainFrame,
   SectionFrame,
   HeadingsFrame,
} from '@/app/ui/Frames';
import Drawer from '@/app/ui/DrawerComponent';
import {
   SectionHeading,
   SectionSubheading,
} from '@/app/ui/Typography';
import AboutSection from './ui/Sections/AboutSection';
import HeroBanner from './ui/Sections/HeroBanner';

export default function Home(): JSX.Element {
   return (
      <PageFrame>
         <Drawer />
         <MainFrame>
            <AboutSection />
            <SectionFrame id="services">
               <HeadingsFrame>
                  <SectionHeading>What I do?</SectionHeading>
                  <SectionSubheading>Services</SectionSubheading>
               </HeadingsFrame>
            </SectionFrame>
            <SectionFrame id="skills">
               <HeadingsFrame>
                  <SectionHeading>My Specialty</SectionHeading>
                  <SectionSubheading>My Skills</SectionSubheading>
               </HeadingsFrame>
            </SectionFrame>
            <SectionFrame id="work">
               <HeadingsFrame>
                  <SectionHeading>Experience</SectionHeading>
                  <SectionSubheading>My Work</SectionSubheading>
               </HeadingsFrame>
            </SectionFrame>
            <SectionFrame id="contact">
               <HeadingsFrame>
                  <SectionHeading>Get in Touch</SectionHeading>
                  <SectionSubheading>Contact</SectionSubheading>
               </HeadingsFrame>
            </SectionFrame>
         </MainFrame>
      </PageFrame>
   );
}
