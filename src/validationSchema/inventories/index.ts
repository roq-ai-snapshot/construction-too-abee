import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  last_updated: yup.date().required(),
  tool_id: yup.string().nullable().required(),
  store_id: yup.string().nullable().required(),
});
