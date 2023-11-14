export default defineEventHandler(async (event) => {
  const users = useDb().select().from(tables.users).all()
  return users
})