import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './Card.styles';

const CardContainer = ({ character }) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        <Typography variant="subtitle1">{character.species}</Typography>
        <Typography variant="subtitle2">{character.gender}</Typography>
      </CardContent>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        src={character.image}
        title="Paella dish"
      />
    </Card>
  );
};

export default CardContainer;