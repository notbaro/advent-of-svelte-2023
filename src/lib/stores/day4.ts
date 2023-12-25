import type { HeartRate } from "$lib/types";
import { readable } from "svelte/store";

async function getHeartRate(): Promise<number> {
  const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json')
  const d: HeartRate = await res.json()
  return d.heartRate
}
export const heartRate = readable(await getHeartRate(), (set) => {
  const interval = setInterval(async () => {
    set(await getHeartRate())
  }, 1000)

  return () => clearInterval(interval)
})
