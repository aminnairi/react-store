import { ChangeEventHandler, FormEventHandler } from "react";

export const preventDefault = (callback: FormEventHandler<HTMLFormElement>) => {
    const handler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        callback(event)
    }

    return handler
}

export const withValue = (callback: (value: string) => unknown) => {
    const handler: ChangeEventHandler<HTMLInputElement> = (event) => {
        callback(event.target.value)
    }

    return handler
}

export const withChecked = (callback: (value: boolean) => unknown) => {
    const handler: ChangeEventHandler<HTMLInputElement> = (event) => {
        callback(event.target.checked)
    }

    return handler
}