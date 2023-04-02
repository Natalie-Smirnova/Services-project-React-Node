import type { NextApiRequest, NextApiResponse } from 'next';
import connector from "../../../backend/util/mongo-connect";
import controller from "../../../backend/controller/user-controller";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connector();
    controller.getUserById(req, res);
}