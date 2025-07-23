"use client"

import { useState } from 'react';

import { sql } from 'drizzle-orm';

import { db } from '@/db';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createAction } from '@/actions';

export default function Home() {
  function handleOnSubmit() {

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
            <Button variant="ghost" type="submit" className="w-full font-semibold">
                Submit Invoice
            </Button>
        </div>

      </form>
    </main>
  );
}
