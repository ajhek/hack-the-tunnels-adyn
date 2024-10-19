import express, { Request, Response } from "express";
import { success } from "../utils";
import { ScheduledEventService } from "../../services";

const router = express.Router();

const index = async (request: Request, response: Response) => {
  const result = await ScheduledEventService.getFirst(10, request.query.sTime as string, request.query.eTime as string, request.query.days as string);

  return success(response, {
    data: result.val,
    statusCode: 200,
  });
};

router.get("/", index);

export default router;
