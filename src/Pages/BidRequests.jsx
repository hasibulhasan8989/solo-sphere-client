import axios from "axios"
import { useEffect, useState } from "react"
import useAuth from "../Hooks/useAuth"
import toast from "react-hot-toast"


const BidRequests = () => {

    const [bitRequests,setBitRequest]=useState([])
    const {user}=useAuth()

    const getData=()=>{
        axios.get(`http://localhost:9000/bit-request/${user.email}`)
         .then(data=>setBitRequest(data.data))
    }

    useEffect(()=>{
       getData() 
    },[user])
    

    const handleStatus=(id,currentStatus,status)=>{
        if(currentStatus===status){
            return toast.error('Unknown Operation')
        }

        console.log(id,currentStatus,status)
        axios.patch(`http://localhost:9000/bits/${id}`,{status})
        .then(()=>{
            getData()
        })

    }
   
  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>Bid Requests</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {bitRequests.length} Requests
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Category
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Status
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {
                    bitRequests.map(bitRequest=><tr key={bitRequest._id} >
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {bitRequest.jobTitle}
                    </td>
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {bitRequest.bitEmail}
                    </td>

                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {bitRequest.deadline}
                    </td>

                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      ${bitRequest.price}
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-2'>
                        <p
                          className={`px-3 py-1 rounded-full ${bitRequest.category === 'Web Development' ? 'text-blue-500 bg-blue-100/60' : `text-red-500 bg-red-100/60` }
                            ${bitRequest.category === 'Graphics Design' && `text-yellow-400 bg-yellow-100/60`}
                               text-xs`}
                        >
                         {bitRequest.category}
                        </p>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2  ${bitRequest.status === 'In Progress' ? 'text-blue-500 bg-blue-100/60' : `text-green-500 bg-green-100/60` }
                            ${bitRequest.status === 'Pending' && `text-yellow-400 bg-yellow-100/60`} ${bitRequest.status === 'Rejected' && `text-red-600 bg-red-100/60`} `}>
                        <span className='h-1.5 w-1.5 rounded-full bg-gray-300'></span>
                        <h2 className='text-sm font-normal '>{bitRequest.status}</h2>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                        <button onClick={()=>{handleStatus(bitRequest._id,bitRequest.status,'In Progress')}} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
                            disabled={bitRequest.status ==='Complete'}>

                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 12.75 6 6 9-13.5'
                            />
                          </svg>
                        </button>

                        <button onClick={()=>handleStatus(bitRequest._id,bitRequest.status,'Rejected')} className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none disabled:cursor-not-allowed'disabled={bitRequest.status ==='Complete'}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BidRequests