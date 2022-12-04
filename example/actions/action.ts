import { TodosAction } from "./todos"
import { UserAction } from "./user"

export type Action =
    | TodosAction
    | UserAction