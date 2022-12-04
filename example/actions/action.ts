import { AlertCloseAction, AlertOpenAction } from "./alert";
import { UserEmailUpdateAction, UserRoleUpdateAction } from "./user";

export type Action = 
    | UserRoleUpdateAction
    | UserEmailUpdateAction
    | AlertOpenAction
    | AlertCloseAction