import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';


function Header(props) {
  const { title } = props;
  const [like, setLike] = React.useState({ icon:'🤍', likeCount:200});

  const likeHandler = ()=>{
    console.log('like')
    if (like.icon==='🤍') {
        var count = like.likeCount+1;
        setLike({
          icon:'❤️',
          likeCount:count
        });
      }else{
        count = like.likeCount-1;
        setLike({
          icon:'🤍',
          likeCount:count
        });
    }
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'white' ,color:'white'}}>
        <Button size="large" variant='outlined' sx={{color:'white', borderColor:'white'}} onClick={likeHandler}>{like.icon} {like.likeCount}</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >

      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
