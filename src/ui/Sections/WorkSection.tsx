import React from 'react';
import { HeadingsFrame, SectionFrame } from '@/ui/Frames';
import {
   CardHeading,
   SectionHeading,
   SectionSubheading,
} from '@/ui/Typography';
import projectList from '@/lib/projectList';
import Image from 'next/image';
import Link from 'next/link';

type WorkCardTypes = {
   project: {
      name: string;
      id: string;
      img: string;
      stack: string[];
      url: string;
   };
};

function WorkCard({ project }: WorkCardTypes): JSX.Element {
   const { name, img, stack, url } = project;
   const stackString = stack.join(' | ');

   return (
      <Link
         href={url}
         target="_blank"
         rel="noopener"
      >
         <section className="group flex w-fit flex-col items-center gap-y-7">
            <Image
               src={img}
               alt={`${name} thumbnail`}
               width={243}
               height={193}
               className="h-auto w-auto border shadow-card group-hover:border-page-blue group-hover:shadow-lg"
            />
            <div className="flex flex-col items-center gap-y-3">
               <div className="space-y-1 text-center">
                  <CardHeading className="group-hover:text-page-blue group-hover:underline">
                     {name}
                  </CardHeading>
                  <h4 className="card-subheading group-hover:text-page-blue">
                     {stackString}
                  </h4>
               </div>
            </div>
         </section>
      </Link>
   );
}

export default function WorkSection(): JSX.Element {
   return (
      <SectionFrame
         id="work"
         className="bg-gradient-to-br from-[#ECE9E6] via-[#fff] to-[#d8dbe9]"
      >
         <HeadingsFrame>
            <SectionHeading>Experience</SectionHeading>
            <SectionSubheading>My Work</SectionSubheading>
         </HeadingsFrame>
         <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectList.map((projectObj) => (
               <WorkCard
                  key={projectObj.id}
                  project={projectObj}
               />
            ))}
         </div>
      </SectionFrame>
   );
}
