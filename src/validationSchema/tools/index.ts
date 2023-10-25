import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  brand: yup.string().required(),
  price: yup.number().integer().required(),
  quantity: yup.number().integer().required(),
  store_id: yup.string().nullable().required(),
});
