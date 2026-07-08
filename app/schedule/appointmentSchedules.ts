// Ralph's real Google Calendar appointment schedules — linked out to
// directly rather than rebuilt from scratch, since these already work and
// are already synced to his calendar. Google's booking pages block being
// framed (confirmed by testing), so this links out to the real page
// rather than embedding it. Grouped into the same three categories used
// across /schedule/*. Update this list if Ralph adds, renames, or retires
// an appointment type in Google Calendar.
//
// Descriptions are copied verbatim from Ralph's own Google Calendar
// appointment listings so the wording matches what he'd write himself.

export type AppointmentOption = {
  id: string;
  label: string;
  duration: string;
  location: string;
  description: string;
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
    location: "Google Meet",
    description:
      "Meet Ralph Estep Jr., licensed accountant with 30+ years of experience, for a personalized virtual tax preparation session. We'll prepare and file your return together during the meeting. A $100 deposit secures your appointment and is applied to your total fee. Fees are based on our standard tax preparation fee schedule reflecting the complexity of your return.",
    scheduleId: "AcZssZ3FQFB7u1rhSki5cE4qGVuDBfTDB_DWS7WYb_HFg63Ho4QuKlIaBjSSfYVULLdY5BEplGe7CJvj",
  },
  {
    id: "tax-in-person",
    label: "In-Person Tax Preparation and Filing",
    duration: "60 min",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    description:
      "Meet Ralph Estep Jr., licensed accountant with 30+ years of experience, for a personalized in-person tax preparation session. I'll review your documents, answer questions, and ensure your return is filed accurately. A $100 deposit secures your appointment and is applied to your total fee. Fees are based on our standard tax preparation fee schedule reflecting the complexity of your return.",
    scheduleId: "AcZssZ30QVJxEMlNmZxRZwdRvxSKFDxSLWQZuc5KGyOXNK6laCELmGS9xabqvSu1FiSUj_R1JVj3g2Z9",
  },
];

export const DISCOVERY_OPTIONS: AppointmentOption[] = [
  {
    id: "discovery-free",
    label: "Free 15-Minute Discovery Call",
    duration: "15 min",
    location: "Google Meet",
    description:
      "Connect directly with Ralph Estep Jr., licensed accountant and business advisor with 30+ years of experience, for a free 15-minute discovery call. This session is designed to discuss your goals, challenges, and how our services can best support you. It's a great first step to see if we're the right fit before scheduling a full consultation or ongoing engagement.",
    scheduleId: "AcZssZ3mUhn49mLENQPYLl5TSKBqclDwbD0M5f1X1hbmVfjBl5TJDyvSg6jw9btFOGSNGi0vnJG5WszM",
  },
  {
    id: "discovery-remote-30",
    label: "Remote 30-Minute Strategy Session",
    duration: "30 min",
    location: "Google Meet",
    description:
      "Meet Ralph Estep Jr., licensed accountant with 30+ years of experience, for a focused 30-minute strategy session. We'll review your financial or business questions, identify key opportunities, and create a clear, actionable plan. Ideal for targeted tax, accounting, or business advice when you need expert guidance and practical next steps.",
    scheduleId: "AcZssZ0WxISiPDF_eP0dUEt9MeSROnXuuzG1vK_ATtiQ-ndJ8zO2-kALw6QrDkSgkL_Ld_ZOY0hQnr71",
  },
  {
    id: "discovery-remote-50",
    label: "Remote 50-Minute Strategy Session",
    duration: "60 min",
    location: "Google Meet",
    description:
      "Meet Ralph Estep Jr., licensed accountant with 30+ years of experience, for an in-depth 50-minute strategy session. We'll dive into your financial or business goals, analyze your numbers, and develop a clear, personalized plan. Ideal for detailed tax, accounting, or business strategy discussions. A short questionnaire is completed during booking to tailor your session.",
    scheduleId: "AcZssZ0KWR9q1iVCEe58OfS9InlT4fLMVriydAXiom22gxsZnauj4hda_Lklj9oqgi-hLgmYkL6VF8LC",
  },
  {
    id: "discovery-in-person",
    label: "In-Person Consultation",
    duration: "60 min",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    description:
      "Meet Ralph Estep Jr., licensed accountant with 30+ years of experience, for an in-depth in-person strategy session at our office. We'll review your goals, analyze your financials, and create a personalized, actionable plan for your business or taxes. Perfect for detailed discussions requiring face-to-face collaboration. A short questionnaire is completed during booking to prepare for your session.",
    scheduleId: "AcZssZ2QPq_KGpLwY_1hWvJ1O5NSaY1wbC3ytncOrOew-R0Yt0mcoZO-2WLAB3wlU0egHWEYsCD6tI8E",
  },
];

export const MONTHLY_OPTIONS: AppointmentOption[] = [
  {
    id: "mc-remote-30",
    label: "30-Minute Remote Strategy Session",
    duration: "30 min",
    location: "Google Meet",
    description:
      "A focused 30-minute strategy session with Ralph to tackle your top financial or business questions. We'll review your situation, identify key opportunities, and outline clear, actionable next steps. Perfect for quick, targeted advice when you need expert insight and direction. A short questionnaire is completed during booking to tailor your session.",
    scheduleId: "AcZssZ0OhRVjJJyI-4HL6g3jkbl-zX7Gv8quukKLTnyxIdzHBEKLGXvx-_3ShrJwXCNzGn3iDG200pBE",
  },
  {
    id: "mc-remote-50",
    label: "50-Minute Remote Strategy Session",
    duration: "60 min",
    location: "Google Meet",
    description:
      "An in-depth 50-minute strategy session with Ralph for detailed financial or business planning. We'll dive into your goals, analyze your numbers, and develop a clear, personalized action plan. Ideal for complex tax, accounting, or business strategy discussions. A short questionnaire is completed during booking to tailor your session.",
    scheduleId: "AcZssZ2Ij9q67E8R5gsnjrEr7eEmD8e1nmj2FkVkhoWwnehs7dC9IuRZGyceO4c8X9Ol6ObUIUd_UH3q",
  },
  {
    id: "mc-quick-call",
    label: "Quick Call with Ralph",
    duration: "15 min",
    location: "Google Meet",
    description:
      "A brief call with Ralph for quick updates, clarifications, or time-sensitive questions. This short meeting is ideal for existing clients who need to review one issue, confirm details, or get professional guidance without a full session. Please include your topic when booking so our call stays focused and productive.",
    scheduleId: "AcZssZ2qzbUEvym6WZPrvNySwbgGkSd6EGj1mmfRGk2tqITdBDJ1m00MjDPaHSO-RjA9tkKsA6E4r8NO",
  },
  {
    id: "mc-virtual-tax",
    label: "Virtual Tax Preparation and Filing",
    duration: "60 min",
    location: "Google Meet",
    description:
      "Virtual tax preparation and filing for monthly contracted clients. Your return will be prepared and filed during this appointment. Please have all tax documents, identification, and deduction or expense records ready to review. This session provides convenient, personalized service as part of your ongoing monthly engagement.",
    scheduleId: "AcZssZ0U27KbB2epVa7Kcqu7X_PS7KeN-3WV8KQCI7wft3EFNV5cauxtd62f34fviq4ZSqcGTqiiTliV",
  },
  {
    id: "mc-in-person-tax",
    label: "In-Person Tax Preparation and Filing",
    duration: "60 min",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    description:
      "In-person tax preparation and filing for monthly contracted clients. Your tax return will be prepared and filed during this appointment. Please bring all current tax documents, identification, and any deduction or expense records you'd like reviewed. This session provides personalized, hands-on preparation as part of your ongoing monthly service.",
    scheduleId: "AcZssZ36lSr3jYebAhzR3Q07w_ufOX5vKTy17146Op090lBKSBD9sdhy0nImTFSdWDnZq4SomjyZyDC4",
  },
  {
    id: "mc-in-person-consult",
    label: "In-Person Consultation",
    duration: "60 min",
    location: "1100 Dutch Neck Rd, Middletown, DE",
    description:
      "In-person professional consultation for monthly contracted clients. Use this session to review financials, discuss strategy, or address specific accounting or tax matters. Designed for personalized, face-to-face collaboration as part of your ongoing service. Please bring any relevant documents or reports you'd like to review during the meeting.",
    scheduleId: "AcZssZ199haZwQGEMht9u0998I32MohjN-bKC9DKang-xncpkBaBt_q0lrpuuGAspEFw80wM83L6Rqel",
  },
];

// Renee Poole's own appointment schedules — QuickBooks and payroll
// support, booked separately from Ralph's calendar.
export const RENEE_OPTIONS: AppointmentOption[] = [
  {
    id: "renee-qbo-assistance",
    label: "30 Minute QBO Assistance",
    duration: "30 min",
    location: "Google Meet",
    description:
      "Schedule a Virtual QuickBooks Technical Assistance session with Renee Poole. This meeting is designed to troubleshoot QuickBooks issues, answer questions, or provide guidance on bookkeeping tasks. Perfect for existing clients needing one-on-one help. Please have your QuickBooks Online account open and ready to share your screen.",
    scheduleId: "AcZssZ1u1w6JiWgrMiwIBQSDoZwacTI7kty8TlEcNoAPvht94K6iST2_3s7_fKQCN4XS583nlFyuux6q",
  },
  {
    id: "renee-payroll-onboarding",
    label: "Payroll On-Boarding",
    duration: "60 min",
    location: "Google Meet",
    description:
      "Meet with Renee Poole for your Virtual Payroll On-Boarding session. This meeting will walk you through payroll setup, employee entry, and firm connection. Ideal for new clients starting payroll services. Please have your employee details, business banking info, and payroll schedule available for setup during the call.",
    scheduleId: "AcZssZ1VyiMvKPKpiAuH5Iw1y0WJJ9tCpRzSM6dajxxlsAoSBKuDus2O1AF9XlckSkeIfQpRuYVXHn6P",
  },
  {
    id: "renee-payroll-assistance",
    label: "Virtual Payroll Assistance",
    duration: "30 min",
    location: "Google Meet",
    description:
      "Schedule a Virtual Payroll Assistance session with Renee Poole. This meeting is for troubleshooting payroll issues, updating employee details, or reviewing reports. Ideal for existing clients needing one-on-one support. Please have your payroll system open and ready to share your screen during the session.",
    scheduleId: "AcZssZ0IT1ITw637INJxlLikpweUwEMSgILfzHTcMRcy3vC8q_cLXcuXRa8qc3SVepin_mArPnYHXOwO",
  },
];
