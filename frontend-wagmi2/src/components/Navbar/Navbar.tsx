// Navbar.tsx
import React from 'react';

import './Navbar.css';

interface NavbarProps {
  currentNetwork: string;
  requestNetworkChange: () => void;
  currentAccount: string;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  currentNetwork,
  requestNetworkChange,
  currentAccount,
  connectWallet,
  disconnectWallet,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const isConnected = currentAccount !== '';

  return (
    <nav className="navbar">
      <img src={`/logo.svg`} alt="Logo" className="logo" />
      <div className="navbar-right">
        <div className="network-selector">
          {currentNetwork}
        </div>
        <button className="change-network" onClick={requestNetworkChange}>Change Network</button>
        <button
          className="connect-wallet"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={isConnected ? disconnectWallet : connectWallet}
        >
          {getButtonLabel(isConnected, isHovered, currentAccount)}
        </button>
      </div>
    </nav>
  );
};

function getButtonLabel(isConnected: boolean, isHovered: boolean, currentAccount: string) {
  if (isConnected && isHovered) {
    return '\u00A0\u00A0\u00A0\u00A0Disconnect\u00A0\u00A0\u00A0\u00A0';
  } else if (isConnected) {
    return `${currentAccount.substring(0, 7)}...${currentAccount.substring(currentAccount.length - 5)}`;
  } else {
    return 'Connect Wallet';
  }
};

export default Navbar;
