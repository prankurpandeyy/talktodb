"use client";

import NLQueryForm from "@/components/ui/nl-query-form";
import { CopilotPopup } from "@copilotkit/react-ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container">
          <h1 className="text-3xl font-bold">
            Natural Language SQL Query Builder
          </h1>
        </div>
      </header>
      <main className="container py-8">
        <NLQueryForm />
      </main>

      <CopilotPopup
        instructions={
          "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
        }
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </div>
  );
}
