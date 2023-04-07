import { useState } from 'react';
// @mui
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Divider,
} from '@mui/material';
import Iconify from 'src/components/iconify/Iconify';
import { RHFTextField } from 'src/components/hook-form';
import { useSnackbar } from 'notistack';

// ----------------------------------------------------------------------

export default function FeedbackFormDialogs() {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    enqueueSnackbar(
      'Apologies, we are not accepting feedback at the moment. Thank you for your understanding.',
      { variant: 'info' }
    );

    setOpen(false);
  };

  return (
    <div>
      <Button
        size="small"
        color="inherit"
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        onClick={handleClickOpen}
      >
        Not Accurate?
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Help Us Improve</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Your feedback plays a crucial role in enhancing our model. To contribute, please submit
            your solution below. We will fine-tune the model by considering the algorithms and data
            structures employed in your suggested solution. Thank you for your valuable input!
          </DialogContentText>
          <RHFTextField name="solution" label="Your Solution" multiline rows={11} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Send 💌
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
