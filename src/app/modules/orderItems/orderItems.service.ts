import { OrderItems } from "./orderItems.model"

const getAllOrderService =async () => {
  const allOrder = await OrderItems.find({})
  return allOrder
}

export const OrderItemsService = {
  getAllOrderService
}