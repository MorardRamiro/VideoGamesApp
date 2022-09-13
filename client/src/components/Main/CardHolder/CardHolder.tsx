
import { Grid } from '@mui/material';
import { VideoGameWithID } from '../../../interfaces';
import { StyledGrid } from './styles';
import { CustomCard } from '../CustomCard/CustomCard';

export default function CardHolder(props: any) {
  const { cardData } = props;
  return (
    <Grid sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {cardData && cardData.map((obj: VideoGameWithID) => (
        <StyledGrid item xs={2.4} key={obj._id}>
          <CustomCard
            image={obj.image}
            name={obj.name}
            id={Object.hasOwn(obj, 'id') ? obj.id : obj._id}
          />
        </StyledGrid>
      ))}
    </Grid>
  );
};
