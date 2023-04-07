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

export type FormValuesProps = IBlogNewPost;

export default function BlogNewPostForm() {
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [openPreview, setOpenPreview] = useState(false);

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    metaKeywords: Yup.array().min(1, 'Meta keywords is required'),
    cover: Yup.mixed().required('Cover is required').nullable(true),
    content: Yup.string().required('Content is required'),
  });

  const defaultValues = {
    title: '',
    description: '',
    content: '',
    cover: null,
    tags: ['The Kid'],
    publish: true,
    comments: true,
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
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

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      handleClosePreview();
      enqueueSnackbar('Post success!');
      push(PATH_DASHBOARD.blog.posts);
      console.log('DATA', data);
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
                  onClick={handleOpenPreview}
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
              <Button
                size="small"
                color="inherit"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                View All
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
