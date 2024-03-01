'use server'
import fetch from 'node-fetch'

export const sendDiscordMessage = async (message: string) => {
  const discordwb = process.env.DISCORD_WEBHOOK_URL
  if (!discordwb) {
    console.error('Discord webhook URL is not provided.')
    return
  }

  try {
    const url = new URL(discordwb) // Create a URL object
    await fetch(url.href, {
      // Use url.href as the fetch URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message,
      }),
    })
  } catch (err: any) {
    console.error(err.message)
  }
}
