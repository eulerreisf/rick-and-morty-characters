import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './Card.styles';

const CardContainer = () => {
  const classes = useStyles();
  return (
    <Card className={classes.content}>
      <CardContent>
        <Typography>Card</Typography>
      </CardContent>
    </Card>
  );
};

export default CardContainer;