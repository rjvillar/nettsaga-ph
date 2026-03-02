"use client";

import { MessageCircle, Code, Users, Rocket } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const icons = [MessageCircle, Code, Users, Rocket];
const accents = ["#3B82F6", "#22C55E", "#8B5CF6", "#F43F5E"];

export default function BuildPipeline() {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border border-dark/[0.06] bg-white p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
        <span className="font-mono text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-dark/40">
          Pipeline // How_It_Works
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-0">
        {t.buildPipeline.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <div key={step.label} className="flex items-start gap-3.5">
              <div className="flex flex-col items-center">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${accents[i]}14`,
                    color: accents[i],
                  }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                {i < icons.length - 1 && (
                  <div className="h-6 w-px border-l border-dashed border-dark/[0.12]" />
                )}
              </div>

              <div className="pt-1">
                <p className="text-xs font-semibold text-dark">{step.label}</p>
                <p className="font-mono text-[0.625rem] text-dark/40">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border border-dark/[0.05] bg-paper px-3 py-2 text-center">
        <p className="font-mono text-[0.625rem] font-semibold text-dark/50">
          {t.buildPipeline.footer}
        </p>
      </div>
    </div>
  );
}
