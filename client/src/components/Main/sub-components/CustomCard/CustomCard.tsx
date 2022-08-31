import React from 'react';
import { CardActionArea, CardMedia } from '@mui/material';
import { StyledCard, StyledTypography, StyledCardContent } from './styles';

export function CustomCard(props: any) {
  const { image, name, id } = props;
  return (
    <div>
      <StyledCard>
        <CardActionArea href={`/detail/${id}`}>
          <CardMedia
            height='140'
            component='img'
            image={image}
            alt=''
          />
          <StyledCardContent>
            <StyledTypography>
              {name}
            </StyledTypography>
          </StyledCardContent>
        </CardActionArea>
      </StyledCard>
    </div >
  );
};
