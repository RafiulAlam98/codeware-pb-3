import { OrderItemsController } from './orderItems.controller'
import express from 'express'

const router = express.Router()

router.get('/', OrderItemsController.getAllOrderItems)

export const OrderItemsRoutes = {
  router,
}
