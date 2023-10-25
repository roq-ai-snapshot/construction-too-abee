import * as yup from 'yup';

export const storeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  opening_time: yup.date().required(),
  closing_time: yup.date().required(),
  contact_number: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
