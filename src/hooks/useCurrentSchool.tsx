import { useState, useEffect } from 'react';

export default function useCurrentSchool() {
  const storeKeyCurrentSchool = 'x-current-school';
  const [currentSchool, setCurrentSchool] = useState({} as any);
  const [lastSchool, setLastSchool] = useState('');

  useEffect(() => {
    const localCurrentSchool = localStorage.getItem(storeKeyCurrentSchool);
    if (localCurrentSchool) {
      setCurrentSchool(JSON.parse(localCurrentSchool));
    }
  }, []);

  const changeSchool = async (school: any) => {
    if (school?.value) {
      localStorage.setItem(storeKeyCurrentSchool, JSON.stringify(school));
      setCurrentSchool(school);
    }
  };

  return { currentSchool, changeSchool, lastSchool, setLastSchool };
}
