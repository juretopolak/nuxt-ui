export default defineEventHandler(() => {
  const users = useDb().select().from(tables.users).all()
  return users
})