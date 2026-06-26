// Inline, blocking script that applies the saved theme before first paint —
// avoids a flash of the wrong theme on load. Must run as early as possible
// in <body>, before any other content.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem('ralph-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-dark', '1');
    }
  } catch (e) {}
})();
`;

export default function ThemeScript() {
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}
