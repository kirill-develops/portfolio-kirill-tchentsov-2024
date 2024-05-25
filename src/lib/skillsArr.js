import JavaScriptSVG from '@/svg/javascript';
import ReactSVG from '@/svg/react';
import NextSVG from '@/svg/next';
import NodeSVG from '@/svg/node';
import AwsSVG from '@/svg/aws';
import TailwindSVG from '@/svg/tailwind';
import MuiSVG from '@/svg/mui';
import SassSVG from '@/svg/sass';
import FigmaSVG from '@/svg/figma';
import ExpressSVG from '@/svg/express';
import KnexSVG from '@/svg/knex';
import PassportSVG from '@/svg/passport';
import OauthSVG from '@/svg/oauth';
import AmplifySVG from '@/svg/amplify';
import S3SVG from '@/svg/s3';
import LambdaSVG from '@/svg/lambda';
import Route53SVG from '@/svg/route53';
import GitSVG from '@/svg/git';
import GithubSVG from '@/svg/github';
import JiraSVG from '@/svg/jira';
import NpmSVG from '@/svg/npm';
import MysqlSVG from '@/svg/mysql';
import MongodbSVG from '@/svg/mongodb';
import JestSVG from '@/svg/jest';
import PostmanSVG from '@/svg/postman';

export const skillsGroupArr = [
   {
      groupTitle: 'Core Languages & Tools',
      id: 'coreSkills',
      skillsArr: [
         { title: 'JavaScript', id: 'js_core', icon: <JavaScriptSVG /> },
         { title: 'React.js', id: 'react_core', icon: <ReactSVG /> },
         { title: 'Next.js', id: 'next_core', icon: <NextSVG /> },
         { title: 'Node.js', id: 'node_core', icon: <NodeSVG /> },
         { title: 'Amazon Web Services', id: 'aws_core', icon: <AwsSVG /> },
      ],
   },
   {
      groupTitle: 'Front-End',
      id: 'fe',
      skillsArr: [
         { title: 'React.js', id: 'react_fe', icon: <ReactSVG /> },
         { title: 'Next.js', id: 'next_fe', icon: <NextSVG /> },
         { title: 'Tailwind', id: 'tailwind_fe', icon: <TailwindSVG /> },
         { title: 'Material-UI', id: 'mui_fe', icon: <MuiSVG /> },
         { title: 'SASS', id: 'sass_fe', icon: <SassSVG /> },
         { title: 'Figma', id: 'figma_fe', icon: <FigmaSVG /> },
      ],
   },
   {
      groupTitle: 'Back-End',
      id: 'be',
      skillsArr: [
         { title: 'Node.js', id: 'node_be', icon: <NodeSVG /> },
         { title: 'Express.js', id: 'express_be', icon: <ExpressSVG /> },
         { title: 'Knex.js', id: 'knex_be', icon: <KnexSVG /> },
         { title: 'Passport.js', id: 'passport_be', icon: <PassportSVG /> },
         { title: 'oAuth', id: 'oauth_be', icon: <OauthSVG /> },
      ],
   },
   {
      groupTitle: 'Amazon Web Services',
      id: 'aws',
      skillsArr: [
         { title: 'AWS Amplify', id: 'amplify_aws', icon: <AmplifySVG /> },
         { title: 'AWS S3', id: 's3_aws', icon: <S3SVG /> },
         { title: 'AWS Lambda', id: 'lambda_aws', icon: <LambdaSVG /> },
         { title: 'Route 53', id: 'route53_aws', icon: <Route53SVG /> },
      ],
   },
   {
      groupTitle: 'Workflow',
      id: 'wf',
      skillsArr: [
         { title: 'Git', id: 'git_wf', icon: <GitSVG /> },
         { title: 'GitHub', id: 'github_wf', icon: <GithubSVG /> },
         { title: 'Jira', id: 'jira_wf', icon: <JiraSVG /> },
         { title: 'npm', id: 'npm_wf', icon: <NpmSVG /> },
      ],
   },
   {
      groupTitle: 'Database',
      id: 'db',
      skillsArr: [
         { title: 'MySQL', id: 'mysql_db', icon: <MysqlSVG /> },
         { title: 'MongoDB', id: 'mongo_db', icon: <MongodbSVG /> },
      ],
   },
   {
      groupTitle: 'Testing',
      id: 'test',
      skillsArr: [
         { title: 'Jest', id: 'jest_test', icon: <JestSVG /> },
         { title: 'Postman', id: 'postman_test', icon: <PostmanSVG /> },
      ],
   },
];

export const complimentarySkills = [
   'Mobile-First, responsive Design',
   'Agile Development & Scrum',
   'Strong Written & Oral Communication',
   '8+ years of marketing experience',
   '4+ years of teaching experience',
];
