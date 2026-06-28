import { useEffect, useState } from 'react';

let showToastFn: ((message: string) => void) | null = null;

export function showToast(message: string) {
  showToastFn?.(message);
}

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    showToastFn = (msg: string) => {
      setMessage(msg);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };
    return () => { showToastFn = null; };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] bg-[#c4956a] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-xl transition-all duration-400 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
}
