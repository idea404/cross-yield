import React, { useState } from 'react';
import './StakeInput.css';

interface StakeInputProps {
    onStake: (amount: string) => void;
}

const StakeInput: React.FC<StakeInputProps> = ({ onStake }) => {
    const [amount, setAmount] = useState('');

    return (
        <div className="stake-container">
            <div className="stake-header">
                <p>Stake for rewards, governance, and yield.</p>
            </div>
            <div className="stake-input">
                <div className="input-group">
                    <button onClick={() => setAmount('')}>Clear</button>
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(parseUserAmount(e.target.value))}
                        placeholder="# LocalTokens"
                    />
                    <button onClick={() => onStake(amount)}>Stake</button>
                </div>
                <div className="quick-add-buttons">
                    <button onClick={() => setAmount(getStringSum(amount, 10))}>+10</button>
                    <button onClick={() => setAmount(getStringSum(amount, 100))}>+100</button>
                    <button onClick={() => setAmount(getStringSum(amount, 1000))}>+1K</button>
                    <button onClick={() => setAmount(getStringSum(amount, 10000))}>+10K</button>
                    <button onClick={() => setAmount(getStringSum(amount, 100000))}>+100K</button>
                </div>
            </div>
        </div>
    );
};

function parseUserAmount(amount: string): string {
    return amountToHumanString(amountFromHumanString(amount));
}

function amountFromHumanString(amount: string): number {
    return Number(amount.replace(/\s/g, ''));
}

function amountToHumanString(amount: number): string {
    return new Intl.NumberFormat('fr-FR').format(amount);
}

function getStringSum(amount: string, add: number): string {
    const sum = amountFromHumanString(amount) + add;
    return amountToHumanString(sum);
}

export default StakeInput;
