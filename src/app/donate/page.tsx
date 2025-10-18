"use client";

import { useState } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useDonation } from '@/hooks/useDonation';
import { getTxUrl } from '@/lib/aptos';
import ParticleBackground from '@/components/ui/ParticleBackground';

const NGOS = [
  { id: 1, name: 'Clean Water Project', wallet: '0x1' },
  { id: 2, name: 'Education for All', wallet: '0x2' },
  { id: 3, name: 'Rural Health Clinics', wallet: '0x3' },
  { id: 4, name: 'Custom Wallet Address', wallet: 'custom' }, // ADD THIS
];

const TOKENS = ['APT', 'ETH', 'USDC'];
const CHAINS = ['Aptos', 'Ethereum', 'Polygon'];

const LIVE_DONATIONS = [
  { from: '0x3a2b...c4d5', to: 'NGO Water Aid', amount: '150 APT', chain: 'Aptos', time: '2 min ago' },
  { from: '0x5d6e...a9c2', to: 'Green Education', amount: '0.8 ETH', chain: 'Ethereum', time: '5 min ago' },
  { from: '0x7f8g...b3c4', to: 'Health First', amount: '200 USDC', chain: 'Polygon', time: '8 min ago' },
];

const FEATURED_CAMPAIGNS = [
  { name: 'Water for All', goal: 1000, raised: 720 },
  { name: 'Rural Education', goal: 2500, raised: 1850 },
  { name: 'Health Clinics', goal: 1500, raised: 900 },
];

export default function DonatePage() {
  const { connected } = useWallet();
  const { donate } = useDonation();
  
  const [selectedNGO, setSelectedNGO] = useState('');
  const [customWallet, setCustomWallet] = useState(''); // ADD THIS
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('APT');
  const [chain, setChain] = useState('Aptos');
  const [message, setMessage] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // UPDATED: Get wallet address - use custom if selected
  const recipientWallet = selectedNGO === 'Custom Wallet Address' 
    ? customWallet 
    : (NGOS.find(ngo => ngo.name === selectedNGO)?.wallet || '');

  const handleDonate = async () => {
    if (!connected) {
      alert('Please connect your wallet first!');
      return;
    }

    if (!selectedNGO || !amount) {
      alert('Please select a cause and enter amount');
      return;
    }

    if (selectedNGO === 'Custom Wallet Address' && !customWallet) {
      alert('Please enter a wallet address');
      return;
    }

    setLoading(true);

    try {
      const result = await donate(recipientWallet, parseFloat(amount));
      setTxHash(result.hash);
      setShowConfirmation(true);
      setAmount('');
      setMessage('');
      setCustomWallet('');
    } catch (err: any) {
      alert('Donation failed: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', position: 'relative', paddingTop: '100px' }}>
      <ParticleBackground />
      
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '0 40px 80px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', background: 'linear-gradient(135deg, #3EF67D, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Make a Donation
          </h1>
          <p style={{ fontSize: '18px', color: '#888', maxWidth: '700px', margin: '0 auto' }}>
            Support causes you believe in — every transaction is traceable and verifiable on-chain
          </p>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', marginBottom: '60px' }}>
          
          {/* Donation Form */}
          <div style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)', backdropFilter: 'blur(20px)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '30px' }}>Donation Details</h2>

            {/* Select Cause */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Select Cause / NGO</label>
              <select 
                value={selectedNGO} 
                onChange={(e) => setSelectedNGO(e.target.value)}
                style={{ width: '100%', padding: '14px', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px', cursor: 'pointer' }}
              >
                <option value="">Choose a cause...</option>
                {NGOS.map(ngo => (
                  <option key={ngo.id} value={ngo.name}>{ngo.name}</option>
                ))}
              </select>
            </div>

            {/* Custom Wallet Input - SHOWS WHEN "Custom Wallet Address" IS SELECTED */}
            {selectedNGO === 'Custom Wallet Address' && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Enter Wallet Address</label>
                <input 
                  type="text"
                  value={customWallet}
                  onChange={(e) => setCustomWallet(e.target.value)}
                  placeholder="0x..."
                  style={{ width: '100%', padding: '14px', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px' }}
                />
              </div>
            )}

            {/* Recipient Wallet Display */}
            {recipientWallet && recipientWallet !== 'custom' && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Recipient Wallet</label>
                <div style={{ padding: '14px', backgroundColor: '#0a0a0a', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', color: '#3EF67D', wordBreak: 'break-all' }}>
                  {recipientWallet}
                </div>
              </div>
            )}

            {/* Amount + Token */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '12px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Donation Amount</label>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  style={{ width: '100%', padding: '14px', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Token</label>
                <select 
                  value={token} 
                  onChange={(e) => setToken(e.target.value)}
                  style={{ width: '100%', padding: '14px', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px', cursor: 'pointer' }}
                >
                  {TOKENS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Select Chain */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Select Chain</label>
              <select 
                value={chain} 
                onChange={(e) => setChain(e.target.value)}
                style={{ width: '100%', padding: '14px', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px', cursor: 'pointer' }}
              >
                {CHAINS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Message (optional)</label>
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Add a personal message..."
                rows={3}
                style={{ width: '100%', padding: '14px', backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '8px', fontSize: '14px', resize: 'none' }}
              />
            </div>

            {/* Donation Type */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#888', marginBottom: '12px' }}>Donation Type</label>
              <div style={{ display: 'flex', gap: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="donationType" 
                    value="one-time" 
                    checked={donationType === 'one-time'} 
                    onChange={(e) => setDonationType(e.target.value)}
                  />
                  <span>One-time</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="donationType" 
                    value="monthly" 
                    checked={donationType === 'monthly'} 
                    onChange={(e) => setDonationType(e.target.value)}
                  />
                  <span>Monthly</span>
                </label>
              </div>
            </div>

            {/* Donate Button */}
            <button 
              onClick={handleDonate}
              disabled={loading || !connected}
              style={{ 
                width: '100%', 
                padding: '16px', 
                backgroundColor: loading ? '#666' : '#3EF67D', 
                color: '#000', 
                borderRadius: '10px', 
                border: 'none', 
                fontSize: '16px', 
                fontWeight: '700', 
                cursor: loading || !connected ? 'not-allowed' : 'pointer',
                opacity: loading || !connected ? 0.6 : 1
              }}
            >
              {loading ? 'Processing...' : (connected ? 'Donate Securely' : 'Connect Wallet to Donate')}
            </button>

            {/* Escrow Info */}
            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: 'rgba(62, 246, 125, 0.1)', borderRadius: '10px', border: '1px solid rgba(62, 246, 125, 0.2)' }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>SMART ESCROW PROTECTION</div>
              <div style={{ fontSize: '13px', color: '#fff', lineHeight: '1.6' }}>
                Your donation will be securely sent on Aptos blockchain
              </div>
            </div>
          </div>

          {/* Live Feed */}
          <div style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)', backdropFilter: 'blur(20px)', borderRadius: '20px', padding: '30px', border: '1px solid rgba(255, 255, 255, 0.1)', height: 'fit-content' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Live Donations</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {LIVE_DONATIONS.map((donation, i) => (
                <div key={i} style={{ padding: '14px', backgroundColor: '#1a1a1a', borderRadius: '8px', borderLeft: '3px solid #3EF67D' }}>
                  <div style={{ fontSize: '13px', color: '#fff', marginBottom: '6px' }}>{donation.from} → {donation.to}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#3EF67D' }}>{donation.amount}</span>
                    <span style={{ fontSize: '11px', color: '#666' }}>{donation.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Campaigns */}
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '30px', textAlign: 'center' }}>Featured Campaigns</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {FEATURED_CAMPAIGNS.map((campaign, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(26, 26, 26, 0.8)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>{campaign.name}</h3>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#888', marginBottom: '6px' }}>
                    <span>Raised: {campaign.raised} APT</span>
                    <span>Goal: {campaign.goal} APT</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#1a1a1a', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(campaign.raised / campaign.goal) * 100}%`, backgroundColor: '#3EF67D' }}></div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedNGO(campaign.name)}
                  style={{ width: '100%', padding: '10px', backgroundColor: 'transparent', color: '#3EF67D', borderRadius: '8px', border: '1.5px solid #3EF67D', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showConfirmation && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '20px', padding: '40px', maxWidth: '500px', width: '100%', border: '1px solid #333', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
            <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px', color: '#3EF67D' }}>Donation Successful!</h2>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '24px' }}>Your donation has been sent on Aptos blockchain</p>
            <div style={{ backgroundColor: '#0a0a0a', padding: '16px', borderRadius: '10px', marginBottom: '24px', textAlign: 'left' }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Transaction Hash:</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#3EF67D', wordBreak: 'break-all' }}>{txHash}</div>
            </div>
            <a 
              href={getTxUrl(txHash)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%', padding: '14px', backgroundColor: '#3EF67D', color: '#000', borderRadius: '10px', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textDecoration: 'none', textAlign: 'center' }}
            >
              View on Aptos Explorer
            </a>
            <button 
              onClick={() => setShowConfirmation(false)}
              style={{ width: '100%', padding: '14px', backgroundColor: 'transparent', color: '#888', borderRadius: '10px', border: '1px solid #333', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
