const email = ({ forgot }) => forgot.email;
const isSubmitting = ({ forgot }) => forgot.isSubmitting;
const success = ({ forgot }) => forgot.success;
const error = ({ forgot }) => forgot.error;

export const selectors = {
  email,
  isSubmitting,
  error,
  success
};
