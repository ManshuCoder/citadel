"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type State =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = React.useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting" });

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);

    if (!res || !res.ok) {
      setState({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
      return;
    }

    setState({ status: "success" });
    e.currentTarget.reset();
  }

  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2 md:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Doe" required />
            <Field
              label="Email"
              name="email"
              placeholder="jane@company.com"
              type="email"
              required
            />
          </div>
          <Field label="Company (optional)" name="company" placeholder="Company name" />
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              placeholder="What are you looking to build or improve?"
              className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="flex flex-col-reverse items-start justify-between gap-3 md:flex-row md:items-center">
            <div className="text-sm text-muted-foreground">
              {state.status === "success"
                ? "Thanks—your message has been received."
                : state.status === "error"
                  ? state.message
                  : "By submitting, you agree this is a non-confidential inquiry."}
            </div>
            <Button type="submit" size="lg" disabled={state.status === "submitting"}>
              {state.status === "submitting" ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}

