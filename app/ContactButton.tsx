"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EMAIL = "jeffreza041992@gmail.com";

export default function ContactButton({ className, label }: { className: string; label: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setCopied(false);
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Clipboard API is unavailable (older browsers, non-secure origins): select
      // the address so the visitor can copy it with the keyboard instead.
      const node = document.getElementById("contact-email-value");
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  }, []);

  return (
    <>
      <button type="button" className={className} onClick={() => dialogRef.current?.showModal()}>
        {label}
      </button>

      <dialog
        className="contact-dialog"
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClose={() => setCopied(false)}
        onClick={event => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="contact-panel">
          <button type="button" className="contact-close" onClick={close} aria-label="Close">
            ✕
          </button>
          <small>GET IN TOUCH</small>
          <h2 id="contact-dialog-title">Let&apos;s talk growth.</h2>
          <p>Drop me a line and I&apos;ll get back to you.</p>
          <div className="contact-email">
            <span id="contact-email-value">{EMAIL}</span>
            <button type="button" onClick={copy} aria-live="polite">
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
