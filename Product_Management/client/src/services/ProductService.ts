import axios from "axios"
import { newProductSchema } from "../types"

type ProductData = {
    [k: string]: FormDataEntryValue
}

export const addProduct = async (data: ProductData) => {
    try {
        const validatedData = newProductSchema.parse({
            name: data.name,
            price: Number(data.price)
        })

        console.log(validatedData)
        
        if (validatedData) {
            const url =`${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, data)
        } else {
            throw new Error('Validation error on post operation')
        }
    } catch (error) {
        console.log(error)
    }
}
