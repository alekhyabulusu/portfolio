'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#1a1814',
          color: '#f5f0e8',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '1.6rem', fontWeight: 600 }}>Something went wrong</h1>
        <p style={{ color: '#b8a894', fontSize: '0.9rem' }}>
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: '0.65rem 1.3rem',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500,
            background: 'linear-gradient(135deg, #c9a66b 0%, #a07d4a 100%)',
            color: '#1a1814',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
