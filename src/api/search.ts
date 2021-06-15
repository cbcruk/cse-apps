import axios, { AxiosRequestConfig } from 'axios'

async function search(query: AxiosRequestConfig['params']) {
  const { data } = await axios.get(
    `https://www.googleapis.com/customsearch/v1`,
    {
      params: {
        key: import.meta.env.VITE_CSE_KEY,
        cx: import.meta.env.VITE_CSE_CX,
        ...query,
      },
    }
  )

  return JSON.stringify(data)
}

export default search
