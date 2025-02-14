
export const parseTemp = (temp: number) => {
  const celsiusTemp = Math.round(temp - 273)
  return celsiusTemp
}