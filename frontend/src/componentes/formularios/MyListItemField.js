import React from 'react';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function MyListItemField(props) {
  const { label, width, placeholder, name, control } = props;
  const options = [
    { value: 1, label: 'Administrador' },
    { value: 2, label: 'Asesor' },
    { value: 3, label: 'Usuario' },
  ];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Box sx={{ width: '250px' }}>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    disablePadding
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader">
                    {options.map((option) => (
                        <ListItem key={option.value} id={name} disablePadding>
                            <ListItemButton
                                sx={{ pl: 4 }}
                                value={option.value}
                                selected={selectedIndex === option.value}
                                onClick={(event) =>{
                                    field.onChange(option.value)
                                    handleListItemClick(event, option.value)
                                }}
                            >
                                <ListItemText primary={option.label} />
                            </ListItemButton>
                        </ListItem>
                ))}
                </List>
            </Collapse>
          </Box>
        )}
      />
  );
}