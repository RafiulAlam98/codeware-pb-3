import { Model } from "mongoose"

export type IOrderItems = {
  product: string,
  quantity:number
}

export type OrderItemsModel = Model<IOrderItems, Record<string,unknown>>