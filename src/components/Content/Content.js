import { Grid } from '@material-ui/core';

import useStyles from './Content.styles';

import Card from '../Card';

const data = [1, 2, 3, 5];

const Content = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
    >
      {data.map(() =>
        <Grid item xs={4}>
          <Card />
        </Grid>
      )}
    </Grid>
  );
};

export default Content;