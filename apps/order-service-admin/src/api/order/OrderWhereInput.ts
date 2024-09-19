import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  totalPrice?: FloatNullableFilter;
};
