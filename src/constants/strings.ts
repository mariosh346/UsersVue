export const FORM_LABELS = {
  fullName: 'labels.fullName',
  address: 'labels.address',
  city: 'labels.city',
  postalCode: 'labels.postalCode',
  phone: 'labels.phone',
  orderNumber: 'labels.orderNumber',
  cashOnDelivery: 'labels.cashOnDelivery',
  notes: 'labels.notes',
  weight: 'labels.weight',
  height: 'labels.height',
  length: 'labels.length',
  width: 'labels.width'
};

export const PLACEHOLDERS = {
  fullName: 'placeholders.fullName',
  address: 'placeholders.address',
  city: 'placeholders.city',
  postalCode: 'placeholders.postalCode',
  phone: 'placeholders.phone',
  orderNumber: 'placeholders.orderNumber',
  cashOnDelivery: 'placeholders.cashOnDelivery',
  weight: 'placeholders.weight',
  height: 'placeholders.height',
  length: 'placeholders.length',
  width: 'placeholders.width'
};

export const SELECT_LABELS = {
  pickupLocation: 'labels.pickupLocation',
  urgentDelivery: 'labels.urgentDelivery',
  deliveryPickup: 'labels.deliveryPickup',
  sameDay: 'labels.sameDay',
  protocolNumber: 'labels.protocolNumber'
};

export const PICKUP_LOCATION = {
  store: { label: 'selectOptions.pickupLocation.store', value: 'store' },
  delivery: { label: 'selectOptions.pickupLocation.delivery', value: 'delivery' }
} as const;

export const URGENT_DELIVERY = {
  normal: { label: 'selectOptions.urgentDelivery.normal', value: 'normal' },
  urgent: { label: 'selectOptions.urgentDelivery.urgent', value: 'urgent' }
} as const;

export const DELIVERY_PICKUP = {
  simple: { label: 'selectOptions.deliveryPickup.simple', value: 'simple' },
  pickup: { label: 'selectOptions.deliveryPickup.pickup', value: 'pickup' }
} as const;

export const SAME_DAY = {
  normal: { label: 'selectOptions.sameDay.normal', value: 'normal' },
  same_day: { label: 'selectOptions.sameDay.sameDay', value: 'same_day' }
} as const;

export const PROTOCOL_NUMBER = {
  none: { label: 'selectOptions.protocolNumber.none', value: 'none' },
  simple: { label: 'selectOptions.protocolNumber.simple', value: 'simple' },
} as const;

export const VALIDATION_MESSAGES = {
  required: 'validation.required'
} as const;
