import axios from 'axios'

interface Health {
  success: boolean
  message: string
  hostname: string
  time: number
  name?: string
}

const factoryFour = axios.create({
  baseURL: 'https://api.factoryfour.com',
})

export const getStatusHealth = async (name: string) => {
  try {
    const { data } = await factoryFour.get<Health>(`${name}/health/status`)
    return { ...data, name: name }
  } catch (error) {
    return null
  }
}
