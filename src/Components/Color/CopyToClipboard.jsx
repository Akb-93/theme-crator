import { useState, useEffect } from 'react';

export default function CopyToClipboard({ hex }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
//
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [copied]);

  return (
    <div>
      <button onClick={copyToClipboard}>Copy</button>
      {copied && <p>Color copied</p>}
    </div>
  );
}

