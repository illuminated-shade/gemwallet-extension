import { FC, useCallback } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

import { ADD_NEW_WALLET, HOME_PATH } from '../../../constants';
import { useWallet } from '../../../contexts';
import { PageWithReturn } from '../../templates';
import { Wallet } from './Wallet';

export const ListWallets: FC = () => {
  const navigate = useNavigate();

  const { wallets, selectedWallet, selectWallet } = useWallet();

  const handleBack = useCallback(() => {
    navigate(HOME_PATH);
  }, [navigate]);

  const handleCreateWallet = useCallback(() => {
    navigate(ADD_NEW_WALLET);
  }, [navigate]);

  return (
    <PageWithReturn
      title="Your wallets"
      onBackClick={handleBack}
      action={{
        onClick: handleCreateWallet,
        actionIcon: <AddIcon />
      }}
    >
      <div style={{ overflowY: 'scroll', height: '518px' }}>
        {wallets.map(({ name, publicAddress }, index) => (
          <Wallet
            name={name}
            publicAddress={publicAddress}
            key={publicAddress}
            isSelected={selectedWallet === index}
            onClick={() => selectWallet(index)}
          />
        ))}
      </div>
    </PageWithReturn>
  );
};
