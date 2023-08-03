import { getDictionary } from '@/app/[lang]/dictionaries'
 
export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) // en
  return <button>{dict.hello}</button> // Add to Cart
}