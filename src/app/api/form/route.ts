import { contactFormSchema } from '@/app/ui/FormComponent/formSchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
   const body = await request.json();

   const result = contactFormSchema.safeParse(body);

   if (result.error) {
      const errorEntries =
         result.error?.issues?.map((issue) => [issue.path[0], issue.message]) ||
         [];

      const formErrors = Object.fromEntries(errorEntries);

      return NextResponse.json(
         { errors: formErrors, type: 'form' },
         { status: 400 },
      );
   }

   if (result.success) {
      const transporter = initTransporter();

      const mailData = getMailData(body);

      try {
         await transporter.sendMail(mailData);

         return NextResponse.json({ success: true }, { status: 200 });
      } catch (err) {
         return NextResponse.json(
            {
               success: false,
               error: 'Failed to send email',
               type: 'server',
               errorData: err,
            },
            { status: 500 },
         );
      }
   }
}

function initTransporter() {
   const nodemailer = require('nodemailer');
   const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
      secure: true,
   });

   return transporter;
}

function getMailData(body: { name: string; email: string; message: string }) {
   const { name, email, message } = body;

   return {
      from: { name: name },
      replyTo: email,
      to: 'kirill.develops@gmail.com',
      subject: `Portfolio Contact - Message from ${name}`,
      text: `from: ${name}\nemail: ${email}\n\nmessage:\n${message}`,
      html: `<h3>from: ${name}</h3><h3>email: ${email}</h3><h3>message:</h3><p>${message}</p>`,
   };
}
