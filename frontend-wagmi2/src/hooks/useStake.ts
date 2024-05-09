import { useState } from 'react';

function useStake() {
    const [userStake, setUserStake] = useState<number>(1_000_000);
    const [localStake, setLocalStake] = useState<number>(0);
    const [globalStake, setGlobalStake] = useState<number>(0);

    const addStake = (stakeAmount: string) => {
        // Convert the amount to a number
        const amount = Number(stakeAmount);

        // Add the stake amount to the user's stake
        setUserStake((prevStake) => prevStake + amount);

        // Update the local and global stake values accordingly
        setLocalStake((prevStake) => prevStake + amount);
        setGlobalStake((prevStake) => prevStake + amount);
    };

    return { userStake, localStake, globalStake, addStake };
}

export default useStake; // TODO: fix everything in this file
