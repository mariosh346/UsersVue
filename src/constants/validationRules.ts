import { VALIDATION_MESSAGES } from './strings';

export const required = (val: unknown) => !!val || VALIDATION_MESSAGES.required;
