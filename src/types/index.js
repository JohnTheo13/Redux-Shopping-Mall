// @flow

export type Item = {
  description: string,
  color: string,
  price: string,
  stock: {
    remaining: number
  },
  _id: string
}

export type ExtendedItem = {
  title: string,
  image: string
} & Item
