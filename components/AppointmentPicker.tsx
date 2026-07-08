"use client";

import { useState } from "react";
import type { AppointmentOption } from "@/app/schedule/appointmentSchedules";
import { directUrl } from "@/app/schedule/appointmentSchedules";

type OptionGroup = { label?: string; options: AppointmentOption[] };

type AppointmentPickerProps = {
  options?: AppointmentOption[];
  groups?: OptionGroup[];
};

// Google's booking pages actively block being framed (iframe requests get
// aborted — confirmed by testing, not just X-Frame-Options in theory), so
// the flow here is: pick a type, then open Ralph's real booking page in a
// new tab. Two interactions total on one page: pick from the dropdown,
// click book — no intermediate category page required.
export default function AppointmentPicker({ options, groups }: AppointmentPickerProps) {
  const resolvedGroups: OptionGroup[] = groups ?? [{ options: options ?? [] }];
  const allOptions = resolvedGroups.flatMap((g) => g.options);

  const [selectedId, setSelectedId] = useState(allOptions[0].id);
  const selected = allOptions.find((o) => o.id === selectedId) ?? allOptions[0];

  const optionLabel = (o: AppointmentOption) => `${o.label} — ${o.duration}`;

  return (
    <div className="appt-picker">
      {allOptions.length > 1 && (
        <label className="appt-picker-select">
          <span>Choose your appointment type</span>
          <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
            {resolvedGroups.map((group, i) =>
              group.label ? (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((o) => (
                    <option key={o.id} value={o.id}>
                      {optionLabel(o)}
                    </option>
                  ))}
                </optgroup>
              ) : (
                group.options.map((o) => (
                  <option key={o.id} value={o.id}>
                    {optionLabel(o)}
                  </option>
                ))
              )
            )}
          </select>
        </label>
      )}

      <div className="appt-picker-summary">
        <h3>{selected.label}</h3>
        <p>
          {selected.duration} · {selected.location}
        </p>
      </div>

      <a className="btn btn-gold appt-picker-cta" href={directUrl(selected.scheduleId)} target="_blank" rel="noopener noreferrer">
        Book This Appointment →
      </a>
      <p className="appt-picker-fine">Opens Ralph&apos;s secure Google Calendar booking page in a new tab.</p>
    </div>
  );
}
