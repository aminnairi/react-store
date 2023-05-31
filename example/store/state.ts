export type State = {
  counter: {
    value: number
  }
  name: {
    value: string
  }
}

export const initialState: State = {
  counter: {
    value: 0
  },
  name: {
    value: "Yourself"
  }
}
