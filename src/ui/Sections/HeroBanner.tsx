import Link from 'next/link';
import { SectionFrame } from '@/ui/Frames';
import { PageTitle, PageSubtitle } from '@/ui/Typography';
import { ReactChildProps } from '@/lib/genericTypes';
import GithubSVG from '@/ui/svg/github';
import LinkedinSVG from '@/ui/svg/linkedin';
import DownloadSVG from '@/ui/svg/download';
import IconLink from '@/ui/components/iconLink';
import HeroImages from '../HeroImages';

const cvLink =
   'https://drive.google.com/file/d/1mfVQmMqKMkeoGup0HQkNQ0a5cDCPKZuV/view?usp=drive_link';

interface LinkProps extends ReactChildProps {
   url: string;
   label?: string;
}

function ButtonLink({ children, url }: LinkProps): JSX.Element {
   return (
      <Link
         href={url}
         className="flex w-9/12 justify-center gap-x-1 rounded bg-white px-4 py-3 font-sans text-sm font-semibold uppercase tracking-[1.25px] shadow-card outline outline-2 hover:bg-drawer hover:shadow-md hover:outline-page-blue sm:w-max"
         target="_blank"
         rel="noopener"
      >
         {children}
      </Link>
   );
}

export default function HeroBanner(): JSX.Element {
   return (
      <SectionFrame
         id="hero"
         className="relative h-screen max-h-[70rem] min-h-[50dvh] snap-end items-center gap-y-7 p-0 sm:items-start sm:p-0 lg:p-0"
      >
         <div className="z-[1] flex flex-col items-center gap-y-7 px-8 py-10 sm:items-start">
            <div className="flex flex-col items-center gap-y-2 sm:items-start">
               <PageTitle>Full-Stack Developer</PageTitle>
               <PageSubtitle>
                  [JavaScript | React.js | Next.js | Node.js | AWS ]
               </PageSubtitle>
            </div>
            <ButtonLink url={cvLink}>
               Download CV
               <DownloadSVG />
            </ButtonLink>
            <div className="flex gap-x-6">
               <IconLink
                  url="https://www.linkedin.com/in/kirill-tchentsov/"
                  label="Kirill's LinkedIn"
               >
                  <LinkedinSVG />
               </IconLink>
               <IconLink
                  url="https://github.com/kirill-develops"
                  label="Kirill's GitHub"
               >
                  <GithubSVG />
               </IconLink>
            </div>
         </div>
         <HeroImages />
      </SectionFrame>
   );
}
