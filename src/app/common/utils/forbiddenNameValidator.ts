export const forbiddenNameValidator = control => {
  if (!control.value) {
    return { required: true };
  }
  if (!/[\u4E00-\u9FA5]/g.test(control.value)) {
    return { pattern: true };
  }
  if (control.value && control.value.length < 2) {
    return { minlength: true };
  }
  if (control.value && control.value.length > 4) {
    return { maxlength: true };
  }
  return null;
};
