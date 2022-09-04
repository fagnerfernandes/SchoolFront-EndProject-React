import { useState, useEffect } from 'react';

export default function useCurrentFranchisee() {
  const storeKeyCurrentFranchisee = 'x-current-franchisee';
  const [currentFranchisee, setCurrentFranchisee] = useState({} as any);
  const [lastFranchisee, setLastFranchisee] = useState('');

  useEffect(() => {
    const localCurrentFranchisee = localStorage.getItem(storeKeyCurrentFranchisee);
    if (localCurrentFranchisee) {
      setCurrentFranchisee(JSON.parse(localCurrentFranchisee));
    }
  }, []);

  const changeFranchisee = async (franchisee: any) => {
    if (franchisee?.value) {
      localStorage.setItem(storeKeyCurrentFranchisee, JSON.stringify(franchisee));
      setCurrentFranchisee(franchisee);
    }
  };

  return { currentFranchisee, changeFranchisee, lastFranchisee, setLastFranchisee };
}
