import React from 'react';
import { Button, Tabs, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add, Search } from '@mui/icons-material';
import { StyledAppBar, StyledGrid } from './styles';

function NavBar() {
  return (
    <div>
      <StyledAppBar>
        <Tabs>
          <StyledGrid>
            <Button
              endIcon={<Search />}
              variant='outlined'
              color='success'
              component={Link} to='/'
            >
              SEARCH
            </Button>
          </StyledGrid>
          <StyledGrid>
            <Button
              endIcon={<Add />}
              variant='outlined'
              color='success'
              component={Link} to='/form'
            >
              CREATE
            </Button>
          </StyledGrid>
        </Tabs>
      </StyledAppBar>
      <Toolbar />
    </div>
  );
};

export default NavBar;
