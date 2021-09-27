import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './Content.styles';
import useGetCharacters from '../../hooks/useGetCharacters';

import Card from '../Card';

const Content = () => {
  const classes = useStyles();

  const { getCharacters, loading, error } = useGetCharacters();

  const characters = getCharacters();

  if (loading) {
    return (<CircularProgress />);
  }

  return (
    <div className={classes.content}>
      {!loading && characters.map((character) =>
        <div>
          <Card character={character} />
        </div>
      )}
    </div>
  );
};

export default Content;