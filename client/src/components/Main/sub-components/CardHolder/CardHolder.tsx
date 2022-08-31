import React from 'react';
import { Grid } from '@mui/material';
import { VideoGameWithID } from '../../../../interfaces';
import { CustomCard } from '../CustomCard/CustomCard';
import { StyledGrid } from './styles';

export default function CardHolder(props: any) {
  const { cardData } = props;
  return (
    <Grid xs={12} sx={{ display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'flex-start' }}>
      {cardData && cardData.map((obj: VideoGameWithID) => (
        <StyledGrid item xs={2.4}>
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
