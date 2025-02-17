export const FORM_LABELS = {
  fullName: 'Ονοματεπώνυμο',
  address: 'Διεύθυνση',
  city: 'Πόλη / Περιοχή',
  postalCode: 'Τ.Κ.',
  phone: 'Τηλέφωνο',
  orderNumber: 'Αρ. Παραγγελίας / Κλειδί',
  cashOnDelivery: 'Αντικαταβολή / Είσπραξη',
  notes: 'Παρατηρήσεις',
  weight: 'Βάρος',
  height: 'Ύψος',
  length: 'Μήκος',
  width: 'Πλάτος'
};

export const PLACEHOLDERS = {
  fullName: 'Εισάγετε ονοματεπώνυμο...',
  address: 'Εισάγετε διεύθυνση...',
  city: 'Εισάγετε πόλη / περιοχή...',
  postalCode: 'Εισάγετε τ.κ...',
  phone: 'Εισάγετε τηλέφωνο...',
  orderNumber: 'Εισάγετε αριθμό παραγγελίας / κλειδί...',
  cashOnDelivery: 'Εισάγετε αντικαταβολή / είσπραξη...',
  weight: 'Εισάγετε βάρος...',
  height: 'Εισάγετε ύψος...',
  length: 'Εισάγετε μήκος...',
  width: 'Εισάγετε πλάτος...'
};

export const SELECT_LABELS = {
  pickupLocation: 'Τύπος παραλαβής',
  urgentDelivery: 'Τύπος παράδοσης',
  deliveryPickup: 'Είδος παράδοσης',
  sameDay: 'Χρόνος παράδοσης',
  protocolNumber: 'Τύπος Πρωτοκόλλου'
};

export const PICKUP_LOCATION = {
  store: { label: 'Παραλαβή από το κατάστημα', value: 'store' },
  delivery: { label: 'Παράδοση', value: 'delivery' }
} as const;

export const URGENT_DELIVERY = {
  normal: { label: 'Κανονική Παράδοση', value: 'normal' },
  urgent: { label: 'Επείγουσα Παράδοση', value: 'urgent' }
} as const;

export const DELIVERY_PICKUP = {
  simple: { label: 'Απλή παράδοση', value: 'simple' },
  pickup: { label: 'Παράδοση - Παραλαβή', value: 'pickup' }
} as const;

export const SAME_DAY = {
  normal: { label: 'Κανονική παράδοση', value: 'normal' },
  same_day: { label: 'Αυθημερόν', value: 'same_day' }
} as const;

export const PROTOCOL_NUMBER = {
  none: { label: 'Χωρίς Πρωτόκολλο', value: 'none' },
  simple: { label: 'Με Πρωτόκολλο', value: 'simple' },
} as const;

export const VALIDATION_MESSAGES = {
  required: 'Το πεδίο είναι υποχρεωτικό'
} as const;

// Helper function to convert object to array for q-select
export const objectToOptions = (obj: Record<string, { label: string; value: string }>) =>
  Object.values(obj);
