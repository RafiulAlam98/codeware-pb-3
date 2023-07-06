import { IOrder, OrderModel } from "./order.iterface";
import { Schema, model } from "mongoose";

import { OrderItemsSchema } from "../orderItems/orderItems.model";

export const OrderSchema = new Schema<IOrder, OrderModel>(
  {
    orderItems: {
      type: [OrderItemsSchema],
      required:true
    },
    phone: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
)
export const Order = model<IOrder, OrderModel>('orders', OrderSchema)
