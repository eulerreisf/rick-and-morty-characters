import { Grid } from '@material-ui/core';

import useStyles from './Content.styles';
import useGetCharacters from '../../hooks/useGetCharacters';

import Card from '../Card';

const Content = () => {
  const classes = useStyles();

  const { getCharacters, loading, error } = useGetCharacters();

  const characters = getCharacters();

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
    >
      {!loading && characters.map((character) =>
        <Grid item xs={4}>
          <Card character={character} />
        </Grid>
      )}
    </Grid>
  );
};

export default Content;