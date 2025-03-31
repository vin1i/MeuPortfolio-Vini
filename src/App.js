"use client"

export default function NotificationScreen() {
  return (
    <div className="container">
      <div className="notification-card">
        <div className="loader-container">
          <div className="loader"></div>
          <div className="loader-ring"></div>
        </div>

        <h1 className="title">Portfolio novo em desenvolvimento</h1>

        <div className="divider"></div>

        <p className="subtitle">Em breve, novidades incríveis.</p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(to bottom right, #ffffff, #f5f5f5);
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .notification-card {
          position: relative;
          max-width: 400px;
          padding: 2rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          border: 1px solid #eaeaea;
          z-index: 1;
        }
        
        .notification-card::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(to right, rgba(0, 100, 255, 0.2), rgba(0, 100, 255, 0.6), rgba(0, 100, 255, 0.2));
          border-radius: 10px;
          z-index: -1;
          filter: blur(8px);
          opacity: 0.75;
        }
        
        .loader-container {
          position: relative;
          width: 40px;
          height: 40px;
          margin: 0 auto 1rem;
        }
        
        .loader {
          width: 40px;
          height: 40px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #0070f3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        .loader-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border-top: 2px solid #0070f3;
          opacity: 0.2;
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .title {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          color: #333;
          line-height: 1.2;
        }
        
        .divider {
          height: 2px;
          width: 80px;
          background-color: #0070f3;
          margin: 1rem auto;
          border-radius: 9999px;
        }
        
        .subtitle {
          color: #666;
          margin: 0;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @media (min-width: 768px) {
          .title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

