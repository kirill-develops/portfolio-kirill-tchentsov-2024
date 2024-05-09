'use client';

import {
   DrawerHeading,
   DrawerSubheading,
   DrawerListItem,
   DrawerCopyright,
} from '@/app/ui/Typography';
import {
   Container,
   Wrapper,
   Center,
   List,
   Overlay,
   MenuIconButton,
} from '@/app/ui/DrawerComponent/elements';
import useDrawer from '@/app/ui/DrawerComponent/useDrawer';
import Link from 'next/link';
import pageSections from '@/app/lib/pageSections';
import useHash from './useHash';
import MenuLines from '../svg/menuLines';

function ListItems(): JSX.Element[] {
   const hash = useHash();

   return pageSections.map(({ title, url }) => {
      const selected = hash === url.substring(1);

      return (
         <Drawer.ListItem
            key={url}
            selected={selected}
         >
            <Link href={url}>{title}</Link>
         </Drawer.ListItem>
      );
   });
}

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
               <Drawer.List toggleDrawer={toggleClose}>
                  <ListItems />
               </Drawer.List>
               <Center>
                  <Drawer.Copyright>
                     © Copyright {currentYear} All rights reserved
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
