
export default async function AsyncPage() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return <>async page</>
}
