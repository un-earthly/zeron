import express, { RequestHandler } from 'express'
import userRoutes from "../modules/user/route"
const router = express.Router()

type route = {
    path: string,
    route: RequestHandler
}

const Router = [
    {
        path: "/users",
        route: userRoutes
    },
]


Router.map(r => router.use(r.path, r.route))

export default router