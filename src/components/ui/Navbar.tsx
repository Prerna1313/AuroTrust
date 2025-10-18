"use client";

import { ConnectWallet } from './ConnectWallet';
import { SignInButton } from './SignInButton';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '16px 50px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '2.5px solid #3EF67D',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3EF67D',
            fontSize: '20px',
            fontWeight: '700'
          }}>
            0
          </div>
          <span style={{
            fontSize: '26px',
            fontWeight: '700',
            color: '#FFFFFF'
          }}>
            AuroTrust
          </span>
        </div>
        
        {/* Navigation Links + Buttons */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="/" style={{
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s',
            position: 'relative'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#3EF67D';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Home
          </a>
          <a href="/donate" style={{
            color: '#B0B0B0',
            fontSize: '15px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#B0B0B0';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Donate
          </a>
          <a href="/track" style={{
            color: '#B0B0B0',
            fontSize: '15px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#B0B0B0';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Track
          </a>
          <a href="/ngo-portal" style={{
            color: '#B0B0B0',
            fontSize: '15px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#B0B0B0';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            NGO Portal
          </a>
          <a href="/dashboard" style={{
            color: '#B0B0B0',
            fontSize: '15px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#B0B0B0';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Dashboard
          </a>
          
          <SignInButton />
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
}
