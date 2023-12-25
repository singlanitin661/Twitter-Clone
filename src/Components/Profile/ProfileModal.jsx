import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border : "none" ,
  boxShadow: 24,
  p: 4,
  outline : "none"
};

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () =>{
    console.log("Handle Submit") ;
  }

  const formik = useFormik({
    initialValues:{
      fullName : "" ,
      website : "" ,
      location : "" ,
      bio : "" ,
      backgroundImage : "" ,
      image : ""
    },
    onSubmit : handleSubmit
  }) ;

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex'>

              </div>
            </div>
          </form>
        </Box> */}
      </Modal>
    </div>
  );
}