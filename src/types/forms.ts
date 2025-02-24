import {
  PROTOCOL_NUMBER,
  URGENT_DELIVERY,
  DELIVERY_PICKUP,
  SAME_DAY,
  PICKUP_LOCATION
} from 'src/constants/strings';
import type { ValueOf } from './general';

type ValueOfValue<T extends Record<string, SelectOption>> = ValueOf<T>["value"];

export type ProtocolNumberType = ValueOfValue<typeof PROTOCOL_NUMBER>;
export type UrgentDeliveryType = ValueOfValue<typeof URGENT_DELIVERY>;
export type DeliveryPickupType = ValueOfValue<typeof DELIVERY_PICKUP>;
export type SameDayType = ValueOfValue<typeof SAME_DAY>;
export type PickupLocationType = ValueOfValue<typeof PICKUP_LOCATION>;

export interface SelectOption {
  value: string;
  label: string;
}

export const userCollectionFormDefault = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  protocolNumber: PROTOCOL_NUMBER.none.value as ProtocolNumberType,
  phone: '',
  orderNumber: '',
  cashOnDelivery: '',
  notes: '',
  weight: '',
  height: '',
  length: '',
  width: '',
  voucher: '',
  urgentDelivery: URGENT_DELIVERY.normal.value as UrgentDeliveryType,
  deliveryPickup: DELIVERY_PICKUP.simple.value as DeliveryPickupType,
  sameDay: SAME_DAY.normal.value as SameDayType,
  pickupLocation: PICKUP_LOCATION.delivery.value as PickupLocationType,
}

export type UserCollectionForm = typeof userCollectionFormDefault & {
  id: string | undefined,
};

export interface UserCollectionDocument extends UserCollectionForm {
  userId: string;
  dateCreated: Date;
  dateUpdated: Date;
}
