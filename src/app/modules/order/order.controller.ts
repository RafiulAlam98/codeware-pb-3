import { Request, Response } from 'express'

import { IOrder } from './order.iterface'
import { OrderService } from './order.service'
import catchAsync from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...order } = req.body
  const { ...items } = req.body
  const result = await OrderService.createOrderService(order, items.orderItems)
  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order added successfully!',
    data: result,
  })
})

const getAllorder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrderService()
  sendResponse<IOrder[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all order retrieved successfully!',
    data: result,
  })
})

export const OrderController = {
  createOrder,
  getAllorder,
}
