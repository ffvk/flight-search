import React from 'react'
import { subscriberData } from '../data/index-json';


const SubscriberTable = () => {
  return (
    <div>

         <table className="w-full mt-4 border">
                <thead>
                  <tr className='bg-gray-200 text-left'>
                    <th className="p-2 border">Subscriber</th>
                    <th className="p-2 border">Plan</th>
                    <th className="p-2 border">Price</th>
                  </tr>
                </thead>
                <tbody>
                {subscriberData?.map(( data ) => (

                  <tr>
                    <td className="p-2 border">{data?.subscriber}</td>
                    <td className="p-2 border">{data?.plan}</td>
                    <td className="p-2 border">{data?.price}</td>
                  </tr>
                     )
    )
    }
                </tbody>
              </table>
     
        </div>
  )
}

export default SubscriberTable