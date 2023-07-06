import { IOrderItems } from '../orderItems/orderItems.interface'
import { Model } from 'mongoose'

export type IOrder = {
  orderItems: IOrderItems[]
  phone: string
}

export type OrderModel = Model<IOrder, Record<string, unknown>>
