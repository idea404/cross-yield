import { useAccount, useConnect, useDisconnect } from 'wagmi'

import Navbar from './components/Navbar/Navbar'
import StakeInput from './components/StakeInput/StakeInput'

import useNetwork from './hooks/useNetwork';
import useStake from './hooks/useStake';
import StakingStats from './components/StakingStats/StakingStats';
import LoadingModal from './components/LoadingModal/LoadingModal';

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { currentNetwork, toggleNetwork } = useNetwork()
  const { userStake, localStake, globalStake, addStake } = useStake()

  return (
    <>
      <div>
        <Navbar 
          currentNetwork={currentNetwork}
          requestNetworkChange={() => toggleNetwork()}
          currentAccount={account.status === 'connected' ? account.addresses[0]: ""}
          connectWallet={() => connect({ connector: connectors[0] })}
          disconnectWallet={disconnect}
        />

        <StakeInput onStake={addStake} />

        <StakingStats
          userTotalStakedLocal={userStake}
          totalStakedLocal={localStake}
          totalStakedOnOmni={globalStake}
        />

        <LoadingModal isOpen={!!status} status={status} />
      </div>

      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default App


// function getMetaMaskConnector