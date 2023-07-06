import { Request, Response } from 'express'

import { IOrderItems } from './orderItems.interface'
import { OrderItemsService } from './orderItems.service'
import catchAsync from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

const getAllOrderItems = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderItemsService.getAllOrderService()
  sendResponse<IOrderItems[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all order retrieved successfully!',
    data: result,
  })
})

export const OrderItemsController = {
  getAllOrderItems,
}
