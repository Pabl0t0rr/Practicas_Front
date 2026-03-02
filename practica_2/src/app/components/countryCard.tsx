import { Country } from '@/types'
import { useRouter } from 'next/navigation'

import './countryCard.css'

type Props = {
   country: Country
}

const CountryCard = ({ country }: Props) => {
   const router = useRouter()

   return (
      <>
         <div className="countryBox">
            <button
               onClick={() => {
                  router.push('/country/' + country.name.common)
               }}
            >
               <div className="">
                  <p>Nombre pais: {country.name.common}</p>
                  <p>Bandera: {country.flag}</p>
               </div>
            </button>
         </div>
      </>
   )
}

export default CountryCard
