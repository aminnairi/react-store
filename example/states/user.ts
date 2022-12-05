export interface UserState {
    pristine: boolean,
    email: string,
    loading: boolean,
    error: unknown
}

export const initialUserState: UserState = {
    pristine: true,
    email: "",
    loading: false,
    error: null
}