'use client'
import { useLanyard } from 'use-lanyard'

const DISCORD_ID = '236600476639035402'

export function Discord() {
  const { data } = useLanyard(DISCORD_ID)

  const status = data?.discord_status
  if (status === 'online') {
    return <p>Online</p>
  } else if (status === 'offline') {
    return <p>Offline</p>
  } else if (status === 'idle') {
    return <p>Idle</p>
  } else if (status === 'dnd') {
    return <p>Do not disturb</p>
  } else {
    return 'Loading...'
  }
}
