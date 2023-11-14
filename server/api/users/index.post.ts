import { useValidatedBody, z } from 'h3-zod'

export default eventHandler(async (event) => {
  const { email } = await useValidatedBody(event, {
    email: z.string().email(),
    // title: z.string().min(1).max(100)
  })
  const { name } = await useValidatedBody(event, {
    name: z.string().min(1).max(100),
  })

  const user = await useDb().insert(tables.users).values({
    email,
    name
  }).returning().get()

  return user
})