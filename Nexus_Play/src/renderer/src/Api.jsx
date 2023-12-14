import { useState, useEffect } from 'react';

const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [gameDesc, setGameDesc] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = "4f53a2f7500d4d6ca560125abc539301";

        const url1 = `https://api.rawg.io/api/games?key=${apiKey}&dates=2023-06-2023-06-30`;
        const response1 = await fetch(url1);


        if (!response1.ok) {
          throw new Error(`HTTP error! status: ${response1.status}`);
        }

        const data1 = await response1.json();
        setGames(data1.results);

        // Fetch details of the first game
        if (data1.results.length > 0) {
          const firstGameId = data1.results[0].id;
          const url2 = `https://api.rawg.io/api/games/${firstGameId}?key=${apiKey}`;
          const response2 = await fetch(url2);

          if (!response2.ok) {
            throw new Error(`HTTP error! status: ${response2.status}`);
          }

          const data2 = await response2.json();
          setGameDesc(data2);
        }
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, gameDesc, loading, error };
};

export default useFetchGames;
