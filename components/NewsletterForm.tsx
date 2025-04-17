'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Controller, useForm } from 'react-hook-form';
// import axios from 'axios';

type FormValues = {
  email: string;
};

const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setMessage(null);
    console.log('Form submitted:', data);
    reset();

    // try {
    //   const res = await axios.post('/api/waitlist', { email: data.email });

    //   if (res.status === 200) {
    //     setMessage('🎉 You’ve been added to the waitlist!');
    //     reset();
    //   }
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {
    //   const errorMsg =
    //     '❌ Something went wrong';
    //   setMessage(errorMsg);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-ghana-yellow">
      <h3 className="text-xl font-semibold mb-3 text-ghana-black">
        Get notified when we launch
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Be the first to discover Ghana&apos;s untold stories, culture and hidden gems.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              type="email"
              placeholder="Enter your email"
              {...field}
              required
              className="flex-grow border-ghana-green/50 focus-visible:ring-ghana-green"
              disabled={isSubmitting}
            />
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-ghana-green hover:bg-ghana-green/90 text-white"
        >
          {isSubmitting ? 'Subscribing...' : 'Notify Me'}
        </Button>
      </form>

      {message && (
        <p className="text-sm mt-4 text-center text-ghana-black">{message}</p>
      )}
    </Card>
  );
};

export default NewsletterForm;
