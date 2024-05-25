import { ReactChildProps } from '@/lib/genericTypes';
import { bgColorsArr } from '@/lib/themeClassNames';

interface StyledPolygon extends ReactChildProps {
   index: number;
}

export default function StyledPolygon({
   children,
   index,
}: StyledPolygon): JSX.Element {
   return (
      <span
         className={`absolute -top-14 left-0 right-0 mx-auto flex h-28 w-24 items-center justify-center hexagon-clip ${bgColorsArr[index]}`}
      >
         {children}
      </span>
   );
}
