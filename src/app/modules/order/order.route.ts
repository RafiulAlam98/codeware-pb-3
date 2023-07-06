import { OrderController } from './order.controller';
import express from "express"

const router = express.Router()

router.post('/add-order', OrderController.createOrder)
router.get("/", OrderController.getAllorder)

export const OrderRoute = {
  router
} 