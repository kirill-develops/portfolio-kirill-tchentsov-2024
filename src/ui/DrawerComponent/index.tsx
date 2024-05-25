'use client';

import {
   DrawerHeading,
   DrawerSubheading,
   DrawerListItem,
   DrawerCopyright,
} from '@/ui/Typography';
import {
   Container,
   Wrapper,
   Center,
   List,
   Overlay,
   MenuIconButton,
} from '@/ui/DrawerComponent/elements';
import useDrawer from '@/ui/DrawerComponent/useDrawer';
import MenuLines from '@/ui/svg/menuLines';
import LinkedinSVG from '@/svg/linkedin';
import GithubSVG from '@/svg/github';
import IconLink from '@/ui/components/iconLink';

export default function Drawer(): JSX.Element {
   const [open, toggleOpen, toggleClose] = useDrawer();

   const currentYear = new Date().getFullYear();

   return (
      <>
         <MenuIconButton toggleDrawer={toggleOpen}>
            <MenuLines />
         </MenuIconButton>
         <Container>
            <Wrapper open={open}>
               <Center>
                  <Drawer.Heading>Kirill Tchentsov</Drawer.Heading>
                  <Drawer.Subheading>Full-Stack Developer</Drawer.Subheading>
               </Center>
               <Drawer.List toggleDrawer={toggleClose} />
               <Center>
                  <Drawer.Copyright>
                     © Copyright {currentYear} All rights reserved
                  </Drawer.Copyright>
                  <Drawer.Copyright>Made with Next.js</Drawer.Copyright>
                  <Drawer.Copyright>Deployed on AWS</Drawer.Copyright>
               </Center>
               <div className="flex gap-x-4">
                  <IconLink
                     url="https://www.linkedin.com/in/kirill-tchentsov/"
                     label="Kirill's LinkedIn"
                  >
                     <LinkedinSVG className="h-7 w-7" />
                  </IconLink>
                  <IconLink
                     url="https://github.com/kirill-develops"
                     label="Kirill's GitHub"
                  >
                     <GithubSVG className="h-7 w-7" />
                  </IconLink>
               </div>
            </Wrapper>
         </Container>
         <Overlay
            open={open}
            toggleDrawer={toggleClose}
         />
      </>
   );
}

Drawer.List = List;
Drawer.Heading = DrawerHeading;
Drawer.Subheading = DrawerSubheading;
Drawer.ListItem = DrawerListItem;
Drawer.Copyright = DrawerCopyright;
