// Ralph's real Google Calendar appointment schedules — linked out to
// directly rather than rebuilt from scratch, since these already work and
// are already synced to his calendar. Google's booking pages block being
// framed (confirmed by testing), so this links out to the real page
// rather than embedding it. Grouped into the same three categories used
// across /schedule/*. Update this list if Ralph adds, renames, or retires
// an appointment type in Google Calendar.

export type AppointmentOption = {
  id: string;
  label: string;
  duration: string;
  price?: string;
  location: string;
  scheduleId: string;
};

export function directUrl(scheduleId: string) {
  return `https://calendar.google.com/calendar/u/0/appointments/schedules/${scheduleId}`;
}

export const TAX_OPTIONS: AppointmentOption[] = [
  {
    id: "tax-virtual",
    label: "Virtual Tax Preparation and Filing",
    duration: "60 min",
    price: "$100 deposit",
    location: "Google Meet",
    scheduleId: "AcZssZ3FQFB7u1rhSki5cE4qGVuDBfTDB_DWS7WYb_HFg63Ho4QuKlIaBjSSfYVULLdY5BEplGe7CJvj",
  },
  {
    id: "tax-in-person",
    label: "In-Person Tax Preparation and Filing",
    duration: "60 min",
    price: "$100 deposit",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    scheduleId: "AcZssZ30QVJxEMlNmZxRZwdRvxSKFDxSLWQZuc5KGyOXNK6laCELmGS9xabqvSu1FiSUj_R1JVj3g2Z9",
  },
];

export const DISCOVERY_OPTIONS: AppointmentOption[] = [
  {
    id: "discovery-free",
    label: "Free 15-Minute Discovery Call",
    duration: "15 min",
    price: "Free",
    location: "Google Meet",
    scheduleId: "AcZssZ3mUhn49mLENQPYLl5TSKBqclDwbD0M5f1X1hbmVfjBl5TJDyvSg6jw9btFOGSNGi0vnJG5WszM",
  },
  {
    id: "discovery-remote-30",
    label: "Remote 30-Minute Strategy Session",
    duration: "30 min",
    price: "$99",
    location: "Google Meet",
    scheduleId: "AcZssZ0WxISiPDF_eP0dUEt9MeSROnXuuzG1vK_ATtiQ-ndJ8zO2-kALw6QrDkSgkL_Ld_ZOY0hQnr71",
  },
  {
    id: "discovery-remote-50",
    label: "Remote 50-Minute Strategy Session",
    duration: "60 min",
    price: "$199",
    location: "Google Meet",
    scheduleId: "AcZssZ0KWR9q1iVCEe58OfS9InlT4fLMVriydAXiom22gxsZnauj4hda_Lklj9oqgi-hLgmYkL6VF8LC",
  },
  {
    id: "discovery-in-person",
    label: "In-Person Consultation",
    duration: "60 min",
    price: "$199",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    scheduleId: "AcZssZ2QPq_KGpLwY_1hWvJ1O5NSaY1wbC3ytncOrOew-R0Yt0mcoZO-2WLAB3wlU0egHWEYsCD6tI8E",
  },
];

export const MONTHLY_OPTIONS: AppointmentOption[] = [
  {
    id: "mc-remote-30",
    label: "30-Minute Remote Strategy Session",
    duration: "30 min",
    location: "Google Meet",
    scheduleId: "AcZssZ0OhRVjJJyI-4HL6g3jkbl-zX7Gv8quukKLTnyxIdzHBEKLGXvx-_3ShrJwXCNzGn3iDG200pBE",
  },
  {
    id: "mc-remote-50",
    label: "50-Minute Remote Strategy Session",
    duration: "60 min",
    location: "Google Meet",
    scheduleId: "AcZssZ2Ij9q67E8R5gsnjrEr7eEmD8e1nmj2FkVkhoWwnehs7dC9IuRZGyceO4c8X9Ol6ObUIUd_UH3q",
  },
  {
    id: "mc-quick-call",
    label: "Quick Call with Ralph",
    duration: "15 min",
    location: "Google Meet",
    scheduleId: "AcZssZ2qzbUEvym6WZPrvNySwbgGkSd6EGj1mmfRGk2tqITdBDJ1m00MjDPaHSO-RjA9tkKsA6E4r8NO",
  },
  {
    id: "mc-virtual-tax",
    label: "Virtual Tax Preparation and Filing",
    duration: "60 min",
    location: "Google Meet",
    scheduleId: "AcZssZ0U27KbB2epVa7Kcqu7X_PS7KeN-3WV8KQCI7wft3EFNV5cauxtd62f34fviq4ZSqcGTqiiTliV",
  },
  {
    id: "mc-in-person-tax",
    label: "In-Person Tax Preparation and Filing",
    duration: "60 min",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    scheduleId: "AcZssZ36lSr3jYebAhzR3Q07w_ufOX5vKTy17146Op090lBKSBD9sdhy0nImTFSdWDnZq4SomjyZyDC4",
  },
  {
    id: "mc-in-person-consult",
    label: "In-Person Consultation",
    duration: "60 min",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    scheduleId: "AcZssZ199haZwQGEMht9u0998I32MohjN-bKC9DKang-xncpkBaBt_q0lrpuuGAspEFw80wM83L6Rqel",
  },
];
