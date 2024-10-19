import { ScheduledEvent } from "@prisma/client";
import { prisma } from "../db";
import { Result, Ok } from "ts-results";

export const getFirst = async (
  count: number, sTime : string, eTime : string, daysIn : string,
): Promise<Result<ScheduledEvent[], Error>> => {
  console.log(sTime, eTime, daysIn);
  console.log(daysIn.slice(0, 3));
  let urlQuery = {
    take: count,
    where: {
      term: {
        contains: "Winter 2025 (January-April)",
      },
      course: {
        subjectCode: {
          contains: "COMP",
        },
      },
      startTime: {
        gte: sTime,
      },
      endTime: {
        lte: eTime,
      },
      days: {
        contains: daysIn.slice(0, 3),
      },
    },
    include: {
      course: true,
    },
  };
  for(let i=4; i<daysIn.length-1; i+=4){
    urlQuery.where.days.contains = daysIn.slice(i, i+3);
    console.log(daysIn.slice(i, i+3));
  }
  const events = await prisma.scheduledEvent.findMany(urlQuery);
  return Ok(events);
};
