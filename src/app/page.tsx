import { PageFrame, MainFrame } from '@/app/ui/Frames';
import Drawer from '@/app/ui/DrawerComponent';
import AboutSection from './ui/Sections/AboutSection';
import HeroBanner from './ui/Sections/HeroBanner';
import ServicesSection from './ui/Sections/ServicesSection';
import SkillsSection from './ui/Sections/SkillsSection';
import ContactSection from './ui/Sections/ContactSection';
import WorkSection from './ui/Sections/WorkSection';

export default function Home(): JSX.Element {
   return (
      <PageFrame>
         <Drawer />
         <MainFrame>
            <HeroBanner />
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <WorkSection />
            <ContactSection />
         </MainFrame>
      </PageFrame>
   );
}
