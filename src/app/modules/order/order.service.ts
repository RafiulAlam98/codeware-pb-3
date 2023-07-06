import ApiError from '../../errors/ApiError'
import { IOrder } from './order.iterface'
import { IOrderItems } from '../orderItems/orderItems.interface'
import { Order } from './order.model'
import { OrderItems } from '../orderItems/orderItems.model'
import httpStatus from 'http-status'
import mongoose from 'mongoose'

const createOrderService = async (
  order: IOrder,
  orderItems: IOrderItems
): Promise<IOrder | null> => {
  let newAllOrder
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const newOrderItems = await OrderItems.create(orderItems, { session })
    if (!newOrderItems.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
    }
    const newOrder = await Order.create([order], { session })
    if (!newOrder.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create')
    }
    newAllOrder = newOrder[0]
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
  return newAllOrder
}

const getAllOrderService = async () => {
  const allOrder = await Order.find({})
  return allOrder
}

export const OrderService = {
  createOrderService,
  getAllOrderService,
}
