import { useState, useEffect } from 'react';

const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = "58cd0b7f651f43f39a9bc30c5994b3e3";
        const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2023-06-2023-06-30`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setGames(data.results);

      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading, error };
};

export default useFetchGames;