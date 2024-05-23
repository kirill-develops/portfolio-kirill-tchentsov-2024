import axios, { AxiosDefaults, AxiosError } from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormReturn, UseFormSetError, useForm } from 'react-hook-form';
import { ContactFormSchema, contactFormSchema } from './formSchema';
import { useState } from 'react';

type ReturnProps = [
   UseFormReturn<ContactFormSchema>,
   boolean,
   (values: ContactFormSchema) => Promise<void>,
];

export default function useInitForm(): ReturnProps {
   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

   const form = useForm<ContactFormSchema>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
         name: '',
         email: '',
         message: '',
      },
   });

   async function onSubmit(values: ContactFormSchema) {
      try {
         setIsSubmitting(true);

         const response = await axios.post('/api/form/', values);

         if (response?.data?.success) {
            // todo handle success
         }
      } catch (error) {
         const err = error as AxiosError;
         const data: any = err?.response?.data;

         if (data?.type === 'form') {
            handleFormErrors(values, data?.errors, form.setError);
         } else {
            alert('Submitting form failed! Please try again');
         }
      } finally {
         setIsSubmitting(false);
      }
   }

   return [form, isSubmitting, onSubmit];
}

function handleFormErrors(
   values: ContactFormSchema,
   errors: [string, string],
   setError: UseFormSetError<ContactFormSchema>,
) {
   Object.entries(errors).forEach(([errorField, errorMessage]) => {
      const fieldWithError = Object.keys(values).find(
         (field) => field === errorField,
      );

      if (fieldWithError) {
         setError(fieldWithError as keyof ContactFormSchema, {
            type: 'server',
            message: errorMessage as string | undefined,
         });
      }
   });
}
