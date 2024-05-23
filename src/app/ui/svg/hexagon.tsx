import { ReactChildProps } from '@/app/lib/genericTypes';
import { bgColorsArr } from '@/app/lib/themeClassNames';

interface StyledPolygon extends ReactChildProps {
   index: number;
}

export default function StyledPolygon({
   children,
   index,
}: StyledPolygon): JSX.Element {
   return (
      <span
         className={`hexagon-clip absolute -top-14 left-0 right-0 mx-auto flex h-28 w-24 items-center justify-center ${bgColorsArr[index]}`}
      >
         {children}
      </span>
   );
}
