import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// DOGS_API_KEY: https://thedogapi.com/ sitesinden alınan bir api key
// Bu key'i kullanarak api'ye istek atacağız.

const DOGS_API_KEY = "live_d04yydoK4yHzI6ODGxVassOEObngLluh7eubNksLT6XmKGqDmYhCjqGBZoEtrph9"

// Breed interface'ini oluşturuyoruz.
// Bu interface, api'den gelen verileri tutacak. Daha doğrusu bu interface, api'den gelen verilerin tipini belirliyor.

interface Breed {
    id: string
    name: string
    image: {
        url: string
    }
}

// createApi fonksiyonu ile apiSlice adında bir slice oluşturuyoruz.
// Bu slice, api'ye istek atmak için kullanılacak.
// createApi fonksiyonu, birkaç parametre alıyor.
// Bunlardan ilki reducerPath. Bu parametre, slice'ın reducer'ının hangi isimle store'da tutulacağını belirliyor.
// İkinci parametre baseQuery. Bu parametre, api'ye istek atmak için kullanılacak fonksiyonu belirliyor.
// fetchBaseQuery fonksiyonu, fetch fonksiyonunu kullanarak api'ye istek atmak için kullanılacak fonksiyonu oluşturuyor.
// fetchBaseQuery fonksiyonu, birkaç parametre alıyor.
// Bunlardan ilki baseUrl. Bu parametre, api'ye istek atmak için kullanılacak url'i belirliyor.
// İkinci parametre prepareHeaders. Bu parametre, api'ye istek atmak için kullanılacak header'ları belirliyor.
// prepareHeaders fonksiyonu, headers isimli bir parametre alıyor.
// Bu parametre, api'ye istek atmak için kullanılacak header'ları tutuyor.
// prepareHeaders fonksiyonu, headers parametresini döndürüyor.
// Bu dönen değer, api'ye istek atmak için kullanılacak header'ları tutuyor.
// endpoints fonksiyonu, api'ye istek atmak için kullanılacak fonksiyonları belirliyor
// endpoints fonksiyonu, builder adında bir parametre alıyor.

// builder.query fonksiyonu, api'ye istek atmak için kullanılacak fonksiyonu oluşturuyor.
// query'miz (limit = 10) parametresi alıyor.
// Bu parametre, api'den kaç tane veri alınacağını belirliyor.
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thedogapi.com/v1/",
        prepareHeaders(headers) {
            headers.set("x-api-key", DOGS_API_KEY)
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void>({
                query(limit = 10) {
                    return `breeds?limit=${limit}`
                }
            })
        }
    }
})


// useFetchBreedsQuery adında bir hook oluşturuyoruz.
// Bu hook, api'ye istek atmak için kullanılacak fonksiyonu çağırıyor.
export const { useFetchBreedsQuery } = apiSlice