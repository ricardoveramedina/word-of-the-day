import { useEffect, useState } from 'react';
import axios from 'axios';

async function fetchData(url) {
  return axios.get(url).then((res) => res.data);
}

const FetchWord = () => {
  const [isLoading, setLoading] = useState(true);
  const [wordData, setWordData] = useState('');
  const url = 'http://localhost:3300/randomWord';

  useEffect(() => {
    fetchData(url).then((data) => {
      console.log('print data:' + data);
      setWordData(data);
      setLoading(false);
    });
  }, []);

  return !isLoading && JSON.stringify(wordData);
};

export default FetchWord;
