import {
   PageFrame,
   MainFrame,
   SectionFrame,
   HeadingsFrame,
} from '@/app/ui/Frames';
import Drawer from '@/app/ui/DrawerComponent';
import { SectionHeading, SectionSubheading } from '@/app/ui/Typography';
import AboutSection from './ui/Sections/AboutSection';
import HeroBanner from './ui/Sections/HeroBanner';
import ServicesSection from './ui/Sections/ServicesSection';
import SkillsSection from './ui/Sections/SkillsSection';
import ContactSection from './ui/Sections/ContactSection';

export default function Home(): JSX.Element {
   return (
      <PageFrame>
         <Drawer />
         <MainFrame>
            <HeroBanner />
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <SectionFrame id="work">
               <HeadingsFrame>
                  <SectionHeading>Experience</SectionHeading>
                  <SectionSubheading>My Work</SectionSubheading>
               </HeadingsFrame>
            </SectionFrame>
            <ContactSection />
         </MainFrame>
      </PageFrame>
   );
}
