import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './Card.styles';

const CardContainer = ({ character }) => {
  const classes = useStyles();
  return (
    <Card className={classes.content}>
      <CardContent>
        <Typography>{character.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardContainer;