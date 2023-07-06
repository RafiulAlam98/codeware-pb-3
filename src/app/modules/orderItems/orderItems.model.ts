import { IOrderItems, OrderItemsModel } from './orderItems.interface'
import { Schema, model } from 'mongoose'

export const OrderItemsSchema = new Schema<IOrderItems, OrderItemsModel>({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

export const OrderItems = model<IOrderItems, OrderItemsModel>(
  'orderitems',
  OrderItemsSchema
)
