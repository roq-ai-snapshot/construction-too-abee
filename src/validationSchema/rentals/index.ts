import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_start_time: yup.date().required(),
  rental_end_time: yup.date().required(),
  total_price: yup.number().integer().required(),
  payment_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
