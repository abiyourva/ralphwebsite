"use client";

import { useState } from "react";
import type { AppointmentOption } from "@/app/schedule/appointmentSchedules";
import { directUrl } from "@/app/schedule/appointmentSchedules";

type OptionGroup = { label?: string; icon?: string; options: AppointmentOption[] };

type AppointmentPickerProps = {
  options?: AppointmentOption[];
  groups?: OptionGroup[];
  icon?: string;
};

// Google's booking pages actively block being framed (iframe requests get
// aborted — confirmed by testing, not just X-Frame-Options in theory), so
// the flow here is: pick a type, then open Ralph's real booking page in a
// new tab. Two interactions total on one page: pick from the dropdown,
// click book — no intermediate category page required.
export default function AppointmentPicker({ options, groups, icon }: AppointmentPickerProps) {
  const resolvedGroups: OptionGroup[] = groups ?? [{ options: options ?? [], icon }];
  const allOptions = resolvedGroups.flatMap((g) => g.options);

  const [selectedId, setSelectedId] = useState(allOptions[0].id);
  const selected = allOptions.find((o) => o.id === selectedId) ?? allOptions[0];
  const selectedGroup = resolvedGroups.find((g) => g.options.some((o) => o.id === selectedId)) ?? resolvedGroups[0];

  const optionLabel = (o: AppointmentOption) => `${o.label} — ${o.duration}`;

  return (
    <div className="appt-picker rv">
      <div className="appt-picker-form">
        <span className="eyebrow">Get Started</span>
        {allOptions.length > 1 && (
          <label className="appt-picker-select">
            <span>Choose your appointment type</span>
            <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
              {resolvedGroups.map((group) =>
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
        <p className="appt-picker-reassure">
          You&apos;ll pick a specific date and time on the next screen, then get an
          instant email confirmation and calendar invite.
        </p>
      </div>

      <div className="appt-picker-panel">
        <div className="appt-picker-panel-glow" aria-hidden="true" />
        {selectedGroup.icon && <div className="appt-picker-icon">{selectedGroup.icon}</div>}
        <h3>{selected.label}</h3>
        <p className="appt-picker-meta">
          {selected.duration} · {selected.location}
        </p>
        <a className="btn btn-gold appt-picker-cta" href={directUrl(selected.scheduleId)} target="_blank" rel="noopener noreferrer">
          Book This Appointment →
        </a>
        <p className="appt-picker-fine">Opens Ralph&apos;s secure Google Calendar booking page in a new tab.</p>
      </div>
    </div>
  );
}
