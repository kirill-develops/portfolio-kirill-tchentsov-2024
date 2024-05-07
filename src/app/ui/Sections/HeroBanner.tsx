import { SectionFrame } from '@/app/ui/Frames';
import { PageTitle, PageSubtitle } from '@/app/ui/Typography';
import GithubSVG from '../svg/github';
import Link from 'next/link';
import LinkedinSVG from '../svg/linkedin';
import { ReactChildProps } from '@/app/lib/genericTypes';
import DownloadSVG from '../svg/download';

interface LinkProps extends ReactChildProps {
   url: string;
}

function IconLink({ children, url }: LinkProps): JSX.Element {
   return (
      <Link
         href={url}
         className="cursor-pointer text-[#666666] hover:text-page-blue"
         target="_blank"
         rel="noopener"
      >
         {children}
      </Link>
   );
}

function ButtonLink({ children, url }: LinkProps): JSX.Element {
   return (
      <Link
         href={url}
         className="flex w-9/12 justify-center gap-x-1 rounded px-4 py-3 font-sans text-sm font-semibold uppercase tracking-[1.25px] outline outline-2 hover:bg-drawer hover:outline-page-blue sm:w-max"
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
         className="snap-center items-center gap-y-7 sm:items-start"
      >
         <div className="flex flex-col items-center gap-y-2 sm:items-start">
            <PageTitle>Full-Stack Developer</PageTitle>
            <PageSubtitle>
               [JavaScript | React.js | Next.js | Node.js | AWS ]
            </PageSubtitle>
         </div>
         <ButtonLink url="https://drive.google.com/file/d/1mfVQmMqKMkeoGup0HQkNQ0a5cDCPKZuV/view?usp=drive_link">
            Download CV
            <DownloadSVG />
         </ButtonLink>
         <div className="flex gap-x-6">
            <IconLink url="https://www.linkedin.com/in/kirill-tchentsov/">
               <LinkedinSVG />
            </IconLink>
            <IconLink url="https://github.com/kirill-develops">
               <GithubSVG />
            </IconLink>
         </div>
      </SectionFrame>
   );
}
