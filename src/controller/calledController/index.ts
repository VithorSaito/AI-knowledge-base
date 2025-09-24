import { calledUseCase } from "../../usecases/calledUseCases";
import { CalledController } from "./called.controller";

export const calledController = new CalledController(calledUseCase)