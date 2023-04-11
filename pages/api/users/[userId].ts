import type { NextApiRequest, NextApiResponse } from 'next';
import connector from "../../../backend/util/mongo-connect";
import controller from "../../../backend/controller/user-controller";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connector();
    switch (req.method) {
        case 'GET':
            controller.getUserById(req, res);
            break;
        case 'PUT':
            controller.updateUser(req, res);
            break;
        case 'DELETE':
           controller.deleteUser(req, res);
           break;
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}