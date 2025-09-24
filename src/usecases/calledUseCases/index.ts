import { prismaInstance } from "../../lib/prisma";
import { CalledUseCase } from "./called.usecases";

export const calledUseCase = new CalledUseCase(prismaInstance)