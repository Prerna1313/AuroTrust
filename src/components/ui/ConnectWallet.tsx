"use client";

import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useState } from 'react';

// Fake wallet display names
const WALLET_NAME_MAP = {
  'Petra (Aptos)': true,
  'Martian (Aptos)': false,
  'MetaMask (EVM)': false,
  'Phantom (Solana)': false
};

export function ConnectWallet() {
  const { account, connected, disconnect, wallets, connect } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const getAddressString = () => {
    if (!account?.address) return '';
    return account.address.toString();
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyAddress = () => {
    const addressStr = getAddressString();
    if (addressStr) {
      navigator.clipboard.writeText(addressStr);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (connected && account) {
    const addressStr = getAddressString();
    
    return (
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            padding: '11px 20px', 
            backgroundColor: 'rgba(26, 26, 26, 0.7)', 
            color: '#3EF67D', 
            borderRadius: '8px', 
            border: '1.5px solid #3EF67D', 
            fontSize: '14px', 
            fontWeight: '600', 
            cursor: 'pointer',
            transition: 'all 0.3s',
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: isHovered ? '0 4px 12px rgba(62, 246, 125, 0.2)' : 'none',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
          <div style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            backgroundColor: '#3EF67D'
          }} />
          {shortenAddress(addressStr)}
        </button>

        {showDropdown && (
          <>
            <div onClick={() => setShowDropdown(false)} style={{ position: 'fixed', inset: 0, zIndex: 998 }} />
            <div style={{ 
              position: 'absolute', 
              right: 0, 
              marginTop: '10px', 
              width: '300px', 
              backgroundColor: 'rgba(26, 26, 26, 0.95)', 
              backdropFilter: 'blur(20px)',
              borderRadius: '10px', 
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)', 
              border: '1px solid rgba(255,255,255,0.2)', 
              zIndex: 999,
              overflow: 'hidden'
            }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #333' }}>
                <div style={{ color: '#888', fontSize: '11px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Connected Wallet</div>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#2a2a2a',
                  padding: '10px 12px',
                  borderRadius: '6px'
                }}>
                  <div style={{ 
                    flex: 1,
                    color: '#FFF', 
                    fontSize: '13px', 
                    fontFamily: 'monospace',
                    wordBreak: 'break-all'
                  }}>
                    {addressStr}
                  </div>
                  <div style={{ position: 'relative' }}>
                    <button
                      onClick={copyAddress}
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      style={{
                        padding: '4px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.2s',
                        opacity: copied ? 1 : 0.6,
                        flexShrink: 0
                      }}
                      onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseOut={(e) => e.currentTarget.style.opacity = copied ? '1' : '0.6'}
                    >
                      {copied ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3EF67D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                    {showTooltip && !copied && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        right: 0,
                        marginBottom: '8px',
                        padding: '6px 10px',
                        backgroundColor: '#000',
                        color: '#fff',
                        fontSize: '11px',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}>
                        Copy to clipboard
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  disconnect();
                  setShowDropdown(false);
                }}
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: '14px 20px', 
                  color: '#EF4444', 
                  backgroundColor: 'transparent', 
                  border: 'none', 
                  fontSize: '14px', 
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2a2a2a'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Disconnect
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '11px 28px', 
          backgroundColor: '#3EF67D', 
          color: '#000', 
          borderRadius: '8px', 
          border: 'none', 
          fontSize: '14px', 
          fontWeight: '700', 
          cursor: 'pointer',
          transition: 'all 0.3s',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 4px 12px rgba(62, 246, 125, 0.4)' : 'none'
        }}>
        Connect Wallet
      </button>
      
      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 998 }} />
          <div style={{ position: 'absolute', right: 0, marginTop: '10px', width: '240px', backgroundColor: '#1a1a1a', borderRadius: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', zIndex: 999 }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #333', color: '#FFF', fontSize: '16px', fontWeight: '600' }}>Select Wallet</div>
            <div style={{ padding: '6px 0' }}>
              {Object.entries(WALLET_NAME_MAP).map(([displayName, isEnabled]) => (
                <button 
                  key={displayName} 
                  onClick={async () => { 
                    if (isEnabled && wallets && wallets.length > 0) {
                      try {
                        await connect(wallets[0].name);
                        setIsOpen(false);
                      } catch(e) {
                        console.error(e);
                      }
                    }
                  }} 
                  disabled={!isEnabled}
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    textAlign: 'left', 
                    padding: '14px 20px', 
                    color: isEnabled ? '#FFF' : '#555', 
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    fontSize: '14px', 
                    cursor: isEnabled ? 'pointer' : 'not-allowed',
                    opacity: isEnabled ? 1 : 0.5
                  }} 
                  onMouseOver={(e) => isEnabled && (e.currentTarget.style.backgroundColor = '#2a2a2a')} 
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {displayName}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
