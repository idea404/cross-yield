import { useState, useEffect } from 'react';

function useNetwork() {
    const [currentNetwork, setCurrentNetwork] = useState('No Network');

    useEffect(() => { // TODO: Implement fetchNetwork
        // Fetch the network
        // const network = await fetchNetwork();
        // setCurrentNetwork(network);
    }, []);

    const toggleNetwork = () => {
        setCurrentNetwork((prevNetwork) =>
            prevNetwork === 'No Network' ? 'Another String Value' : 'No Network'
        );
    };

    return { currentNetwork, toggleNetwork };
}

export default useNetwork;
