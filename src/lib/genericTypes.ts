import React from 'react';

export type ReactChildProps = {
   readonly children: React.ReactNode;
   readonly id?: string;
   readonly className?: string;
};

export type SkillIconProps = {
   className?: string;
   fill?: string;
};
