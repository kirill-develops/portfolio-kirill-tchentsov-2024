import { PageFrame, MainFrame } from '@/ui/Frames';
import Drawer from '@/ui/DrawerComponent';
import AboutSection from '@/ui/Sections/AboutSection';
import HeroBanner from '@/ui/Sections/HeroBanner';
import ServicesSection from '@/ui/Sections/ServicesSection';
import SkillsSection from '@/ui/Sections/SkillsSection';
import ContactSection from '@/ui/Sections/ContactSection';
import WorkSection from '@/ui/Sections/WorkSection';
import Footer from '@/ui/Sections/Footer';

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
            <Footer />
         </MainFrame>
      </PageFrame>
   );
}
