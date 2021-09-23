import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../service/queries/character';

const useGetCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const getCharacters = () => {
    const characteres = data?.characters?.results;

    return characteres;
  };

  return { getCharacters, loading, error, data };
};

export default useGetCharacters;