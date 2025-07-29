'use client'

import { SyntheticEvent, useState, startTransition } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SubmitButton  from "@/components/SubmitButton";

import { createAction } from '@/actions';

export default function Home() {
  const [state, setState] = useState('ready');
  async function handleOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (state === 'pending') return;
    const target = event.target as HTMLFormElement;

    startTransition(async () => {
    const formData = new FormData(target);
    await createAction(formData);
    setState('pending');
    console.log('hey');
    })


  }
  return (
    <main className="flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">
          Invoices
        </h1>
      </div>

      <form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
        <div>
          <Label htmlFor="name" className="block mb-2 text-sm font-semibold">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" autoComplete="name" />
        </div>

        <div>
          <Label htmlFor="email" className="block mb-2 text-sm font-medium">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>

        <div>
          <Label htmlFor="value" className="block mb-2 text-sm font-medium">
            Billing Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>

        <div>
          <Label htmlFor="description" className="block mb-2 text-sm font-medium">
            Description
          </Label>
          <Textarea id="description" name="description" />
        </div>

        <div>
            <SubmitButton />
        </div>

      </form>
    </main>
  );
}
