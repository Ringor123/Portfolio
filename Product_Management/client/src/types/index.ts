import {z} from 'zod'

export const newProductSchema = z.object({
    name: z.string(),
    price: z.number()
})

export type NewProductType = z.infer<typeof newProductSchema>