import type {
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

export interface UserCollectionForm {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  protocolNumber: ProtocolNumberType;
  phone: string;
  orderNumber: string;
  cashOnDelivery: string;
  notes: string;
  weight: string;
  height: string;
  length: string;
  width: string;
  voucher: string;
  urgentDelivery: UrgentDeliveryType;
  deliveryPickup: DeliveryPickupType;
  sameDay: SameDayType;
  pickupLocation: PickupLocationType;
}

export interface UserCollectionDocument extends UserCollectionForm {
  userId: string;
  dateCreated: Date;
  dateUpdated: Date;
}
