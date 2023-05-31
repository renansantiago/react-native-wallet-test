import { useState } from 'react';

const BASE_URL = 'http://localhost:3000/';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const useAPI = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async <T>(
    endpoint: string,
    method: HttpMethod = 'GET',
    body?: T,
  ): Promise<T> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        return data;
      } else {
        setError('Erro ao buscar dados');
        throw new Error('Erro ao buscar dados');
      }
    } catch (error) {
      setError('Erro ao buscar dados, cheque sua conexão');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchData };
};

export default useAPI;
