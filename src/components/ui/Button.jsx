const styles = `
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    border-radius: var(--radius-md);
    padding: 0.6rem 1.25rem;
    transition: transform var(--transition), box-shadow var(--transition), background var(--transition), opacity var(--transition);
    white-space: nowrap;
    border: none;
    cursor: pointer;
  }

  .btn:active { transform: scale(0.97); }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; }

  /* Variants */
  .btn-primary {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 2px 14px var(--accent-glow);
  }
  .btn-primary:hover:not(:disabled) {
    background: var(--accent-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 22px var(--accent-glow);
  }

  .btn-secondary {
    background: var(--surface-2);
    color: var(--text);
    border: 1px solid var(--border);
  }
  .btn-secondary:hover:not(:disabled) {
    background: rgba(255,255,255,0.07);
    transform: translateY(-1px);
  }

  .btn-ghost {
    background: transparent;
    color: var(--muted);
    border: 1px solid var(--border);
  }
  .btn-ghost:hover:not(:disabled) {
    color: var(--text);
    background: rgba(255,255,255,0.05);
  }

  /* Sizes */
  .btn-sm { padding: 0.45rem 1rem; font-size: 0.8rem; }
  .btn-md { padding: 0.6rem 1.25rem; font-size: 0.9rem; }
  .btn-lg { padding: 0.75rem 1.6rem; font-size: 1rem; }
`;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
}) {
  return (
    <>
      <style>{styles}</style>
      <button
        type={type}
        className={`btn btn-${variant} btn-${size}`}
        style={fullWidth ? { width: '100%' } : {}}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}