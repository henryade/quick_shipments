export const passwordVal = (value) => {
  if (value.length < 7) return 'Password cannot be less than 7 characters';
  if (value.trim() === '') return 'Password must contain a character';
};

export const confirmPasswordVal = (pass, confirmPass) => {
  if (pass !== confirmPass) return 'Passwords do not match';
};
