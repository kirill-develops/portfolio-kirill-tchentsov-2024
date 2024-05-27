'use client';

import React from 'react';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from '../components/form';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Textarea } from '../components/textarea';
import LoaderSVG from '../svg/loader';
import useInitForm from './useInitForm';
import { FormWrapper } from './elements';

const inputFormFields: { id: 'name' | 'email'; name: string }[] = [
   { id: 'name', name: 'Name' },
   { id: 'email', name: 'Email' },
];

const buttonText = (isSubmitting: boolean): JSX.Element | string =>
   isSubmitting ? (
      <>
         <LoaderSVG />
         Submitting
      </>
   ) : (
      'Send Message'
   );

export default function ContactForm(): JSX.Element {
   const [form, isSubmitting, onSubmit] = useInitForm();

   return (
      <Form {...form}>
         <FormWrapper onSubmit={form.handleSubmit(onSubmit)}>
            {inputFormFields.map(({ name, id }) => (
               <FormField
                  key={id}
                  control={form.control}
                  name={id}
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input
                              autoComplete={'on'}
                              placeholder={name}
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            ))}
            <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <FormControl>
                        <Textarea
                           placeholder="Message"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button
               type="submit"
               className={isSubmitting ? 'justify-start' : 'justify-center'}
               disabled={isSubmitting}
            >
               {buttonText(isSubmitting)}
            </Button>
         </FormWrapper>
      </Form>
   );
}
