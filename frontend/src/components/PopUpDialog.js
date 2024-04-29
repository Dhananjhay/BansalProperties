import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

import '../App.css'

const PopUpDialog = ({open, setOpen, property}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            >
        <DialogTitle
            sx={{
            textAlign: 'center',
            backgroundColor: '#FFF2CC',
            margin: '1rem 1.5rem 0rem 1.5rem'
            }}
            >Additional Details
        </DialogTitle>
        <DialogContent>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem',
              margin: '1rem 0rem'
            }}>
            <div className='dialogFeature'>
            <span>
              {property[0]?.negotiable ? 'Negotiable' : 'Unnegotiable'}
              </span>
            </div>
            {
              property[0]?.type === 'Residential'
              ?
            <p className='dialogFeature'>
                {property[0]?.facing} Facing
            </p>
            :
            null
            }
            {
              property[0]?.type === 'Residential'
              ?
            <p className='dialogFeature'>
                {property[0]?.numBal} Balcony
            </p>
            :
            null
            }
              {
                (property[0]?.type === 'Residential') && property[0]?.lift
                ?
                <p className='dialogFeature'>
                  Elevator(s)
                </p>
                :
                null
              }
          </div>
              <DialogTitle
              sx={{
                textAlign: 'center',
                backgroundColor: '#FFF2CC'
              }}
              >Additional Photos
              </DialogTitle>
              <div className='dialog'>
                {
                property[0]?.collection.map((image)=>
                  <div key={image} className='dialogImg'>
              <img src={image} alt='property image' width='100%'/>
                </div>
                )}
              </div>
            </DialogContent>
           <DialogActions>
          <Button onClick={handleClose} autoFocus variant='contained'>
            Done
          </Button>
        </DialogActions>
            </Dialog>
  )
}

export default PopUpDialog
