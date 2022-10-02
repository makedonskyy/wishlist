import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function FriendSearch() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Найти…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  // <List>
  //   {friendRequests && friendRequests.length !== 0
  //   && friendRequests?.map((el) => (
  //     <ListItem
  //       key={el.id}
  //       secondaryAction={(
  //         <>
  //           <Button
  //             variant="contained"
  //             startIcon={<PersonAddIcon />}
  //             style={{ marginRight: '10px' }}
  //             onClick={() => dispatch(acceptRequest(el.id))}
  //           >
  //             Добавить
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             startIcon={<DeleteIcon />}
  //             onClick={() => dispatch(declineRequest(el.id))}
  //           >
  //             Отклонить
  //           </Button>
  //         </>
  //               )}
  //     >
  //       <ListItemAvatar>
  //         <Avatar alt="futureFriend" src={el.photo} />
  //       </ListItemAvatar>
  //       <ListItemText
  //         primary={el.name}
  //       />
  //     </ListItem>
  //   ))}
  // </List>
  );
}
