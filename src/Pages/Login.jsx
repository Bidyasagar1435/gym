import { Dumbbell } from "lucide-react";
import React from "react";

const Login = () => {
  return (
    <div className="login-root">
      {/* ── Animated background orbs ── */}
      <div className="login-orbs" aria-hidden="true">
        <span className="login-orb login-orb--1" />
        <span className="login-orb login-orb--2" />
        <span className="login-orb login-orb--3" />
      </div>

      {/* ── Dot-grid overlay ── */}
      <div className="login-grid" aria-hidden="true" />

      {/* ── Card wrapper (glow border) ── */}
      <div className="login-card-wrap">
        <div className="login-card-glow" aria-hidden="true" />

        {/* ── Glass card ── */}
        <div className="login-card">
          {/* Brand */}
          <div className="login-brand">
            <div className="login-logo" aria-hidden="true">
              {/* dumbbell icon */}
              <Dumbbell size={30} />
            </div>
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">
              Sign in to your <span className="login-brand-name">FITRD</span>{" "}
              account
            </p>
          </div>

          {/* Social buttons */}
          <div className="login-social">
            <button
              type="button"
              id="login-google"
              className="login-social-btn"
            >
              <svg
                viewBox="0 0 24 24"
                className="login-social-icon"
                fill="currentColor"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Google</span>
            </button>

            <button type="button" id="login-apple" className="login-social-btn">
              <svg
                viewBox="0 0 24 24"
                className="login-social-icon"
                fill="white"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.32.07 2.23.72 2.97.74.96-.19 1.88-.81 3.05-.87 1.26-.07 2.42.43 3.18 1.38-2.9 1.76-2.44 5.67.37 6.78-.57 1.55-1.26 3.01-2.57 4.83zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="login-divider">
            <span className="login-divider-line" />
            <span className="login-divider-text">or continue with email</span>
            <span className="login-divider-line" />
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="login-field">
              <label htmlFor="login-email" className="login-label">
                Email Address
              </label>
              <div className="login-input-wrap">
                <span className="login-input-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="login-input"
                />
              </div>
            </div>

            {/* Password */}
            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="login-password" className="login-label">
                  Password
                </label>
                <a href="#" id="login-forgot-password" className="login-forgot">
                  Forgot password?
                </a>
              </div>
              <div className="login-input-wrap">
                <span className="login-input-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="login-input login-input--password"
                />
                <button
                  type="button"
                  id="login-toggle-password"
                  className="login-eye"
                  aria-label="Show password"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="login-remember">
              <span
                className="login-checkbox"
                id="login-remember-me"
                role="checkbox"
                aria-checked="false"
                tabIndex={0}
              />
              <span className="login-remember-text">Keep me signed in</span>
            </div>

            {/* CTA */}
            <button type="submit" id="login-submit" className="login-cta">
              <span className="login-cta-shimmer" aria-hidden="true" />
              <span className="login-cta-inner">
                Sign In
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="login-cta-arrow"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </form>

          {/* Signup link */}
          <p className="login-footer-text">
            New to GymPro?{" "}
            <a href="#" id="login-signup-link" className="login-footer-link">
              Create a free account
            </a>
          </p>

          {/* SSL badge */}
          <div className="login-ssl">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="login-ssl-icon"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>256-bit SSL encrypted · Your data is always safe</span>
          </div>
        </div>
      </div>

      {/* ── All styles scoped inside the component ── */}
      <style>{`
        /* ─── Reset / root ─────────────────────────────────────────── */
        .login-root {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #060608;
          font-family: 'Geist Variable', 'Inter', sans-serif;
        }

        /* ─── Animated orbs ────────────────────────────────────────── */
        .login-orbs { position: absolute; inset: 0; pointer-events: none; }

        .login-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
        }
        .login-orb--1 {
          width: 520px; height: 520px;
          top: -130px; left: -130px;
          background: radial-gradient(circle, #f97316, #ef4444);
          opacity: .22;
          animation: loginOrb1 8s ease-in-out infinite;
        }
        .login-orb--2 {
          width: 600px; height: 600px;
          bottom: -160px; right: -160px;
          background: radial-gradient(circle, #8b5cf6, #ec4899);
          opacity: .15;
          animation: loginOrb2 10s ease-in-out infinite;
        }
        .login-orb--3 {
          width: 400px; height: 400px;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          background: radial-gradient(circle, #f97316, #8b5cf6);
          opacity: .10;
          animation: loginOrb3 12s ease-in-out infinite;
        }

        /* ─── Grid overlay ─────────────────────────────────────────── */
        .login-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: .028;
        }

        /* ─── Card wrapper / glow border ───────────────────────────── */
        .login-card-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 440px;
          margin: 0 16px;
          animation: loginSlideUp .7s cubic-bezier(.16,1,.3,1) both;
        }
        .login-card-glow {
          position: absolute;
          inset: -1px;
          border-radius: 28px;
          background: linear-gradient(135deg,
            rgba(249,115,22,.55),
            rgba(139,92,246,.32),
            rgba(249,115,22,.12));
          opacity: .72;
          pointer-events: none;
        }
        .login-card {
          position: relative;
          border-radius: 28px;
          padding: 40px;
          background: rgba(10,10,14,.9);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }

        /* ─── Brand ────────────────────────────────────────────────── */
        .login-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 36px;
        }
        .login-logo {
          width: 64px; height: 64px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #f97316, #ef4444);
          box-shadow: 0 8px 32px rgba(249,115,22,.42);
        }
        .login-logo-svg { width: 32px; height: 32px; }
        .login-title {
          font-size: 1.875rem;
          font-weight: 700;
          letter-spacing: -.02em;
          color: #fff;
          margin: 0 0 6px;
        }
        .login-subtitle {
          font-size: .875rem;
          color: rgba(255,255,255,.45);
          margin: 0;
        }
        .login-brand-name { color: #fb923c; font-weight: 600; }

        /* ─── Social buttons ───────────────────────────────────────── */
        .login-social {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }
        .login-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 14px;
          font-size: .875rem;
          font-weight: 500;
          color: rgba(255,255,255,.70);
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          cursor: pointer;
          transition: background .2s, border-color .2s, color .2s, transform .15s;
        }
        .login-social-btn:hover {
          background: rgba(255,255,255,.10);
          border-color: rgba(255,255,255,.18);
          color: #fff;
          transform: translateY(-1px);
        }
        .login-social-btn:active { transform: scale(.97); }
        .login-social-icon { width: 16px; height: 16px; flex-shrink: 0; }

        /* ─── Divider ──────────────────────────────────────────────── */
        .login-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .login-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,.08);
        }
        .login-divider-text {
          font-size: .75rem;
          font-weight: 500;
          white-space: nowrap;
          color: rgba(255,255,255,.30);
        }

        /* ─── Form ─────────────────────────────────────────────────── */
        .login-form { display: flex; flex-direction: column; gap: 16px; }

        .login-field { display: flex; flex-direction: column; gap: 8px; }

        .login-label {
          font-size: .7rem;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(255,255,255,.42);
        }
        .login-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .login-forgot {
          font-size: .75rem;
          font-weight: 500;
          color: #fb923c;
          text-decoration: none;
          transition: color .2s;
        }
        .login-forgot:hover { color: #fdba74; }

        .login-input-wrap { position: relative; }

        .login-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255,255,255,.30);
          display: flex;
          transition: color .2s;
        }
        .login-input-icon svg { width: 16px; height: 16px; }

        .login-input {
          width: 100%;
          padding: 14px 16px 14px 40px;
          border-radius: 14px;
          font-size: .875rem;
          color: #fff;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.09);
          outline: none;
          caret-color: #f97316;
          transition: border-color .2s, box-shadow .2s;
          box-sizing: border-box;
        }
        .login-input::placeholder { color: rgba(255,255,255,.22); }
        .login-input:focus {
          border-color: rgba(249,115,22,.65);
          box-shadow: 0 0 0 3px rgba(249,115,22,.13);
        }
        .login-input:focus + .login-eye,
        .login-input-wrap:focus-within .login-input-icon { color: #f97316; }

        .login-input--password { padding-right: 46px; }

        .login-eye {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: rgba(255,255,255,.30);
          display: flex;
          transition: color .2s;
        }
        .login-eye:hover { color: rgba(255,255,255,.75); }
        .login-eye svg { width: 16px; height: 16px; }

        /* ─── Remember me ──────────────────────────────────────────── */
        .login-remember {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 4px;
        }
        .login-checkbox {
          width: 20px; height: 20px;
          border-radius: 7px;
          flex-shrink: 0;
          cursor: pointer;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.14);
          display: inline-block;
          transition: background .2s, border-color .2s;
        }
        .login-checkbox:hover {
          border-color: rgba(249,115,22,.55);
        }
        .login-remember-text {
          font-size: .875rem;
          color: rgba(255,255,255,.45);
          user-select: none;
        }

        /* ─── CTA button ───────────────────────────────────────────── */
        .login-cta {
          position: relative;
          width: 100%;
          margin-top: 4px;
          padding: 16px;
          border-radius: 14px;
          font-size: .875rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          border: none;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(249,115,22,.38);
          transition: box-shadow .3s, transform .2s;
        }
        .login-cta:hover {
          box-shadow: 0 14px 40px rgba(249,115,22,.55);
          transform: translateY(-2px);
        }
        .login-cta:active { transform: scale(.98); }

        /* Shimmer sweep */
        .login-cta-shimmer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 38%,
            rgba(255,255,255,.18) 50%,
            transparent 62%
          );
          background-size: 200% 100%;
          animation: loginShimmer 2.5s infinite;
        }

        .login-cta-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .login-cta-arrow { width: 16px; height: 16px; }

        /* ─── Footer ───────────────────────────────────────────────── */
        .login-footer-text {
          margin: 32px 0 0;
          text-align: center;
          font-size: .875rem;
          color: rgba(255,255,255,.35);
        }
        .login-footer-link {
          font-weight: 600;
          color: #fb923c;
          text-decoration: none;
          transition: color .2s;
        }
        .login-footer-link:hover { color: #fdba74; }

        /* ─── SSL badge ────────────────────────────────────────────── */
        .login-ssl {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.07);
          font-size: .6875rem;
          color: rgba(255,255,255,.25);
        }
        .login-ssl-icon { width: 12px; height: 12px; flex-shrink: 0; }

        /* ─── Keyframes ────────────────────────────────────────────── */
        @keyframes loginOrb1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(40px,30px) scale(1.08); }
          66%      { transform: translate(-20px,50px) scale(.96); }
        }
        @keyframes loginOrb2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(-50px,-40px) scale(1.1); }
          70%     { transform: translate(28px,-20px) scale(.93); }
        }
        @keyframes loginOrb3 {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50%     { transform: translate(-50%,-50%) scale(1.16); }
        }
        @keyframes loginSlideUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loginShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ─── Responsive ───────────────────────────────────────────── */
        @media (max-width: 480px) {
          .login-card { padding: 28px 20px; }
          .login-title { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Login;
