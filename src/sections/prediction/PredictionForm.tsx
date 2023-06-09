import * as Yup from 'yup';
import { useState } from 'react';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Grid, Card, Stack, Button, CardHeader, CardContent, Divider, Slider } from '@mui/material';
// routes
import { ChartColumnMultiple } from 'src/sections/_examples/extra/chart';
import { Box } from '@mui/system';
import { predictAlgo } from 'src/services/predictAlgo';
import { IPredictionRequest, IPredictionResponse } from 'src/@types/prediction';
import Iconify from 'src/components/iconify/Iconify';
import FormProvider, { RHFTextField, RHFAutocomplete } from '../../components/hook-form';
import FeedbackFormDialogs from './FeedbackFormDialogs';
import {
  DEFAULT_PREDICTION_REQUEST,
  DEFAULT_PREDICTION_RESPONSE,
  MODELS,
  QUESTIONS_TABLE,
} from './data';

// ----------------------------------------------------------------------

type IPredictionResponses = {
  [key: string]: IPredictionResponse;
};

export type FormValuesProps = Omit<IPredictionRequest, 'model_used'>;

const getDefaultPredictionResponses = () => {
  const res: IPredictionResponses = {};

  MODELS.forEach((model) => {
    res[model] = { ...DEFAULT_PREDICTION_RESPONSE, model_used: model };
  });

  return res;
};

// ----------------------------------------------------------------------

export default function PredictionForm() {
  const [predictionResponses, setPredictionResponses] = useState<IPredictionResponses>(
    getDefaultPredictionResponses()
  );
  const [yValue, setYValue] = useState(0.5);

  const PredictionSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
  });

  const defaultValues = DEFAULT_PREDICTION_REQUEST;

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(PredictionSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  console.log('ERRORS', errors);
  console.log('VALUES', values);

  const handleReset = () => {
    reset();
  };

  async function processModels(formValues: FormValuesProps) {
    const promises = MODELS.map(async (model) => {
      const { data } = await predictAlgo({ ...formValues, model_used: model });
      console.log('DATA', data);
      setPredictionResponses((prevPredictionResponses) => {
        console.log('PREV PREDICTION RESPONSES', prevPredictionResponses);
        return { ...prevPredictionResponses, [data.model_used]: data };
      });
    });

    await Promise.all(promises);
  }

  const onSubmit = async (data: FormValuesProps) => {
    console.log('ON SUBMIT');

    try {
      await processModels(data);
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
              <Stack spacing={1}>
                <RHFAutocomplete
                  name="title"
                  label="LeetCode Title"
                  fullWidth
                  freeSolo
                  options={QUESTIONS_TABLE.map((option) => option.question_title)}
                  sx={{ mb: 2 }}
                  onChange={(event, value) => {
                    if (value !== null) {
                      const selectedOption = QUESTIONS_TABLE.find(
                        (option) => option.question_title === value
                      );
                      setValue('description', selectedOption?.question_text ?? '');
                    }
                  }}
                />
                <RHFTextField name="description" label="LeetCode Description" multiline rows={11} />
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
                  endIcon={<Iconify icon="wi:stars" />}
                >
                  Submit
                </LoadingButton>
              </Stack>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card dir="ltr">
            <CardHeader title="Predicted Data Structures and Algorithms" />
            <CardContent>
              <ChartColumnMultiple
                predictionResponses={Object.values(predictionResponses)}
                yValue={yValue}
              />
            </CardContent>
            <Divider />
            <Box
              sx={{ p: 2, textAlign: 'right', display: 'flex', justifyContent: 'space-between' }}
            >
              <Box sx={{ width: 200 }}>
                <Slider
                  value={yValue}
                  min={0}
                  max={1}
                  step={0.05}
                  onChange={(event, newValue) => setYValue(newValue as number)}
                  valueLabelDisplay="auto"
                />
              </Box>
              <FeedbackFormDialogs />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
