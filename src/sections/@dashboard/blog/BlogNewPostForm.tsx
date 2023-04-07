import * as Yup from 'yup';
import { useState, useCallback } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Card,
  Stack,
  Button,
  Typography,
  CardHeader,
  CardContent,
  Divider,
} from '@mui/material';
// routes
import { ChartColumnMultiple } from 'src/sections/_examples/extra/chart';
import { Box } from '@mui/system';
import Iconify from 'src/components/iconify/Iconify';
import { predictDataStructures } from 'src/services/runPrediction';
import { useRequest } from 'ahooks';
import { IPredictionRequest } from 'src/@types/prediction';
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { IBlogNewPost } from '../../../@types/blog';
// components
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from '../../../components/hook-form';
//
import BlogNewPostPreview from './BlogNewPostPreview';
import FeedbackFormDialogs from './FeedbackFormDialogs';

// ----------------------------------------------------------------------

const TAGS_OPTION = [
  'Toy Story 3',
  'Logan',
  'Full Metal Jacket',
  'Dangal',
  'The Sting',
  '2001: A Space Odyssey',
  "Singin' in the Rain",
  'Toy Story',
  'Bicycle Thieves',
  'The Kid',
  'Inglourious Basterds',
  'Snatch',
  '3 Idiots',
];

// ----------------------------------------------------------------------

export type FormValuesProps = IPredictionRequest;

export default function BlogNewPostForm() {
  const { enqueueSnackbar } = useSnackbar();

  const { loading: loadingPrediction, runAsync: runPrediction } = useRequest(
    predictDataStructures,
    {
      manual: true,
      onError: () => {
        enqueueSnackbar('Unexpected error, please try again.', { variant: 'error' });
      },
    }
  );

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().optional(),
    description: Yup.string().required('Description is required'),
    model_used: Yup.string().required('Model is required'),
  });

  const defaultValues = {
    title: '',
    description: '',
    // TODO: extract const
    model_used: 'DistilBERT',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const handleReset = () => {
    reset();
  };

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const res = await runPrediction(data);
      reset();
      enqueueSnackbar('Post success!');
      console.log('DATA', res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Stack spacing={3}>
                <RHFTextField name="title" label="Post Title" />
                <RHFTextField name="description" label="Description" multiline rows={11} />
              </Stack>
              <Box sx={{ flexGrow: 1 }} />
              <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
                <Button
                  fullWidth
                  color="inherit"
                  variant="outlined"
                  size="large"
                  onClick={handleReset}
                >
                  Clear
                </Button>
                <LoadingButton
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  loading={isSubmitting}
                >
                  Submit
                </LoadingButton>
              </Stack>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card dir="ltr">
            <CardHeader title="Column Multiple" />
            <CardContent>
              <ChartColumnMultiple />
            </CardContent>
            <Divider />
            <Box sx={{ p: 2, textAlign: 'right' }}>
              <FeedbackFormDialogs />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
