import { useState, useEffect } from 'react';
import useAPI from './api';

export interface CreditCard {
  id?: string;
  name: string;
  number: string;
  cvv: string;
  expiration: string;
}

const useCardAPI = () => {
  const [cards, setCards] = useState<CreditCard[]>([]);
  const { loading, error, fetchData } = useAPI();

  useEffect(() => {
    fetchCardList();
  }, []);

  const fetchCardList = async () => {
    try {
      const data = await fetchData<CreditCard[]>('cards');
      if (data) {
        setCards(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerCard = async (newCard: CreditCard) => {
    try {
      await fetchData<CreditCard>('cards', 'POST', newCard);
      fetchCardList();
    } catch (error) {
      console.log(error);
    }
  };

  return { cards, loading, error, fetchCardList, registerCard };
};

export default useCardAPI;
