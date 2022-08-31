import React from 'react';
import { Box, Pagination } from '@mui/material';

export default function PaginationButtons(props: any) {
  const { onChange, count, page } = props;
  return (
    <Box sx={{ display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'center' }}>
      <Pagination count={count} showFirstButton showLastButton onChange={onChange} page={page} />
    </Box>
  );
};
