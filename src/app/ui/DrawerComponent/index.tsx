'use client';

import {
   DrawerHeading,
   DrawerSubheading,
   DrawerListItem,
   DrawerCopyright,
} from '@/app/ui/Typography';
import {
   MenuLines,
   Container,
   Wrapper,
   Center,
   List,
   Overlay,
} from '@/app/ui/DrawerComponent/elements';
import useDrawer from '@/app/ui/DrawerComponent/useDrawer';

function Drawer(): JSX.Element {
   const [open, toggleOpen, toggleClose] = useDrawer();

   return (
      <>
         <MenuLines toggleDrawer={toggleOpen} />
         <Container>
            <Wrapper open={open}>
               <Center>
                  <Drawer.Heading>Kirill Tchentsov</Drawer.Heading>
                  <Drawer.Subheading>Full-Stack Developer</Drawer.Subheading>
               </Center>
               <Drawer.List toggleDrawer={toggleClose}>
                     <Drawer.ListItem>Home</Drawer.ListItem>
                     <Drawer.ListItem>About</Drawer.ListItem>
                     <Drawer.ListItem>Services</Drawer.ListItem>
                     <Drawer.ListItem>Skills</Drawer.ListItem>
                     <Drawer.ListItem>Work</Drawer.ListItem>
                     <Drawer.ListItem>Contact</Drawer.ListItem>
               </Drawer.List>
               <Center>
                  <Drawer.Copyright>
                     © Copyright {} All rights reserved
                  </Drawer.Copyright>
                  <Drawer.Copyright>Made with Next.js</Drawer.Copyright>
                  <Drawer.Copyright>Deployed on AWS</Drawer.Copyright>
               </Center>
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

export default Drawer;
