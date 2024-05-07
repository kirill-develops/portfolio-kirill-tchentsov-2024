import { SectionFrame } from '@/app/ui/Frames';
import { PageTitle, PageSubtitle } from '@/app/ui/Typography';
import GithubSVG from '../svg/github';
import Link from 'next/link';
import LinkedinSVG from '../svg/linkedin';
import { ReactChildProps } from '@/app/lib/genericTypes';

interface IconLinkProps extends ReactChildProps {
   url: string;
}

function IconLink({ children, url }: IconLinkProps): JSX.Element {
   return (
      <Link
         href={url}
         className=" cursor-pointer text-[#666666] hover:text-page-blue"
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
         className="gap-y-7"
      >
         <div className="flex flex-col gap-y-2">
            <PageTitle>Full-Stack Developer</PageTitle>
            <PageSubtitle>
               [JavaScript | React.js | Next.js | Node.js | AWS ]
            </PageSubtitle>
         </div>
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
