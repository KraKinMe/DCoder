import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
export default ThemeToggle;
