"use client";

import { useState } from 'react';

export function SignInButton() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleGoogleAuth = () => {
    alert('Google OAuth - Implement with NextAuth or Firebase');
  };

  const handleAppleAuth = () => {
    alert('Apple Sign In - Implement with NextAuth');
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Email/Password Sign In - Add your backend API');
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account Created! - Add your backend API');
    setShowSignUp(false);
    setShowSignIn(true);
  };

  return (
    <>
      <button
        onClick={() => setShowSignIn(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '10px 24px',
          backgroundColor: 'transparent',
          color: '#FFF',
          borderRadius: '8px',
          border: '1.5px solid #3EF67D',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 4px 12px rgba(62, 246, 125, 0.2)' : 'none'
        }}
      >
        Sign In
      </button>

      {showSignIn && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 999999, overflowY: 'scroll', paddingTop: '80px', paddingBottom: '50px' }}>
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '14px', width: '90%', maxWidth: '420px', padding: '35px 30px', position: 'relative', border: '1px solid #333', margin: '0 auto' }}>
            <button onClick={() => setShowSignIn(false)} style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '28px', background: 'none', border: 'none', color: '#888', cursor: 'pointer', lineHeight: '1' }}>×</button>
            
            <h2 style={{ color: '#fff', textAlign: 'center', margin: '0 0 25px 0', fontSize: '22px' }}>Sign In</h2>
            
            <button onClick={handleGoogleAuth} style={{ width: '100%', padding: '12px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/><path fill="#FBBC05" d="M3.964 10.706c-.18-.54-.282-1.117-.282-1.706 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.336z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/></svg>
              Continue with Google
            </button>
            
            <button onClick={handleAppleAuth} style={{ width: '100%', padding: '12px', backgroundColor: '#000', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="16" height="18" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
              </svg>
              Continue with Apple
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', margin: '18px 0', fontSize: '12px', color: '#666' }}>
              <div style={{ flex: 1, height: '1px', background: '#333' }} />
              <span style={{ padding: '0 10px' }}>OR</span>
              <div style={{ flex: 1, height: '1px', background: '#333' }} />
            </div>
            
            <form onSubmit={handleSignIn}>
              <input type="email" placeholder="Email" required style={{ width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '13px', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }} />
              <input type="password" placeholder="Password" required style={{ width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '13px', marginBottom: '14px', outline: 'none', boxSizing: 'border-box' }} />
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#3EF67D', color: '#000', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>Sign In</button>
            </form>
            
            <p style={{ textAlign: 'center', color: '#888', fontSize: '12px', marginTop: '16px', marginBottom: 0 }}>
              Don't have an account? <span onClick={() => { setShowSignIn(false); setShowSignUp(true); }} style={{ color: '#3EF67D', cursor: 'pointer' }}>Sign Up</span>
            </p>
          </div>
        </div>
      )}

      {showSignUp && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 999999, overflowY: 'scroll', paddingTop: '80px', paddingBottom: '50px' }}>
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '14px', width: '90%', maxWidth: '420px', padding: '35px 30px', position: 'relative', border: '1px solid #333', margin: '0 auto' }}>
            <button onClick={() => setShowSignUp(false)} style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '28px', background: 'none', border: 'none', color: '#888', cursor: 'pointer', lineHeight: '1' }}>×</button>
            
            <h2 style={{ color: '#fff', textAlign: 'center', margin: '0 0 25px 0', fontSize: '22px' }}>Create Account</h2>
            
            <button onClick={handleGoogleAuth} style={{ width: '100%', padding: '12px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/><path fill="#FBBC05" d="M3.964 10.706c-.18-.54-.282-1.117-.282-1.706 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.336z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/></svg>
              Continue with Google
            </button>
            
            <button onClick={handleAppleAuth} style={{ width: '100%', padding: '12px', backgroundColor: '#000', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="16" height="18" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
              </svg>
              Continue with Apple
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', margin: '18px 0', fontSize: '12px', color: '#666' }}>
              <div style={{ flex: 1, height: '1px', background: '#333' }} />
              <span style={{ padding: '0 10px' }}>OR</span>
              <div style={{ flex: 1, height: '1px', background: '#333' }} />
            </div>
            
            <form onSubmit={handleSignUp}>
              <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '13px', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }} />
              <input type="email" placeholder="Email" required style={{ width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '13px', marginBottom: '10px', outline: 'none', boxSizing: 'border-box' }} />
              <input type="password" placeholder="Password" required style={{ width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', fontSize: '13px', marginBottom: '14px', outline: 'none', boxSizing: 'border-box' }} />
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#3EF67D', color: '#000', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>Create Account</button>
            </form>
            
            <p style={{ textAlign: 'center', color: '#888', fontSize: '12px', marginTop: '16px', marginBottom: 0 }}>
              Already have an account? <span onClick={() => { setShowSignUp(false); setShowSignIn(true); }} style={{ color: '#3EF67D', cursor: 'pointer' }}>Sign In</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
