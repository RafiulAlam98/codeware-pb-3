import { OrderItemsRoutes } from "../modules/orderItems/orderItems.route"
import { OrderRoute } from "../modules/order/order.route"
import express from "express"

const router = express.Router()

const moduleRoutes = [
  {
    path: "/order/",
    route: OrderRoute.router
  },
  {
    path: "/items/",
    route: OrderItemsRoutes.router
  }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router