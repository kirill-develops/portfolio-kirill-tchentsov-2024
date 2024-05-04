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
import Link from 'next/link';

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
                  <Link href="/#top">
                     <Drawer.ListItem>Home</Drawer.ListItem>
                  </Link>
                  <Link href="/#about">
                     <Drawer.ListItem>About</Drawer.ListItem>
                  </Link>
                  <Link href="/#services">
                     <Drawer.ListItem>Services</Drawer.ListItem>
                  </Link>
                  <Link href="/#skills">
                     <Drawer.ListItem>Skills</Drawer.ListItem>
                  </Link>
                  <Link href="/#work">
                     <Drawer.ListItem>Work</Drawer.ListItem>
                  </Link>
                  <Link href="/#contact">
                     <Drawer.ListItem>Contact</Drawer.ListItem>
                  </Link>
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
