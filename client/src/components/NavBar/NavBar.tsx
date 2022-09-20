
import { Link } from 'react-router-dom';
import { Button, Toolbar } from '@mui/material';
import { Add, Search } from '@mui/icons-material';
import { StyledAppBar, StyledGrid } from './styles';
import { NAV_BAR } from '../../common/constants';
import LoadButton from './LoadButton/LoadButton';

function NavBar() {
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <StyledGrid>
            <LoadButton />
          </StyledGrid>
          <StyledGrid>
            <Button
              endIcon={<Search />}
              variant='outlined'
              color='success'
              component={Link} to='/'
            >
              {NAV_BAR.search}
            </Button>
          </StyledGrid>
          <StyledGrid>
            <Button
              endIcon={<Add />}
              variant='outlined'
              color='success'
              component={Link} to='/form'
            >
              {NAV_BAR.create}
            </Button>
          </StyledGrid>
        </Toolbar>
      </StyledAppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
