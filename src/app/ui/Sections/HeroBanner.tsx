import { SectionFrame } from '@/app/ui/Frames';
import { PageTitle, PageSubtitle } from '@/app/ui/Typography';

export default function HeroBanner(): JSX.Element {
   return (
      <SectionFrame id="top">
         <PageTitle>Full-Stack Developer</PageTitle>
         <PageSubtitle>
            [JavaScript | React.js | Next.js | Node.js | AWS ]
         </PageSubtitle>
      </SectionFrame>
   );
}
