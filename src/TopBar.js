import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function TopBar() {
  return (
    <div className='bar'>
      <div className='search'>
        <input className='ip-search' type='text' placeholder='search' />
        <div className='search-icon'>
          <IconButton aria-label="delete"><SearchIcon /></IconButton>
        </div>
      </div>
      <div className='notification'>
        <IconButton aria-label="delete"><NotificationAddIcon /></IconButton>
        <IconButton aria-label="delete"><EmailIcon /></IconButton>
        <IconButton aria-label="delete"><AccountCircleIcon /></IconButton>
      </div>
    </div>
  );
}
