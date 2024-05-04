import { SectionFrame, HeadingsFrame } from '@/app/ui/Frames';
import {
   SectionHeading,
   SectionSubheading,
   Body,
   BodyOpener,
} from '@/app/ui/Typography';
export default function AboutSection() {
   return (
      <SectionFrame id="about">
         <HeadingsFrame>
            <SectionHeading>About</SectionHeading>
            <SectionSubheading>Who am I?</SectionSubheading>
         </HeadingsFrame>
         <Body>
            <BodyOpener>Hi I&apos;m Kirill Tchentsov </BodyOpener>I am a web
            developer specializing in
            <Body black>JavaScript</Body>, <Body black>React</Body> (including{' '}
            <Body black>Context API</Body>, building{' '}
            <Body black>custom hooks</Body> and <Body black>Redux</Body> for
            state management), <Body black>Next.js</Body>,{' '}
            <Body black>Node.js</Body> and <Body black>API construction</Body>{' '}
            to create responsive and engaging digital dashboards that drive
            customer engagement and revenue growth. Additionally, I have
            experience with <Body black>AWS</Body> and <Body black>Git</Body>,
            allowing me to optimize workflows and ensure efficient project
            delivery. I&apos;m enthusiastic about test-driven development
            principles through frameworks like <Body black>Jest</Body> and{' '}
            <Body black>Cyprus</Body>, relational & noSQL databases (
            <Body black>MySQL</Body> and <Body black>MongoDB</Body>),
            authentication using <Body black>Oauth2</Body> and{' '}
            <Body black>Passport.js</Body> and diving deeper into{' '}
            <Body black>TypeScript</Body>. My passion for competency into
            industry standards and adopting innovative approaches enables me to
            deliver top-notch solutions that exceed client expectations.
         </Body>
      </SectionFrame>
   );
}
