import Silver from 'assets/images/silver.svg';
import Gold from 'assets/images/gold.svg';
import Diamond from 'assets/images/diamond.svg';

export const getRaffles = () =>
  Promise.resolve([
    {
      id: 'silver',
      obtained: 1,
      name: 'Silver',
      image: Silver,
    },
    {
      id: 'gold',
      name: 'Gold',
      obtained: 3,
      image: Gold,
    },
    {
      id: 'diamond',
      obtained: 4,
      name: 'Diamond',
      image: Diamond,
    },
  ]);
