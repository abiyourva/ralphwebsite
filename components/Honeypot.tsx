// A decoy field real users never see or fill in, but naive form-filling
// bots (which enumerate and fill every input) typically do. Deliberately
// NOT `type="hidden"` and NOT `display:none` — bots specifically know to
// skip those well-known honeypot tells. Instead it's a real text input
// pushed off-screen with absolute positioning.
type HoneypotProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function Honeypot({ value, onChange }: HoneypotProps) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
    >
      <label htmlFor="website">Website</label>
      <input
        type="text"
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
