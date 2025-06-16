import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const {_id,deadline,minPrice,maxPrice,job_title,description}=job
    return (
        <Link to={`/job/${_id}`} className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: {deadline}
        </span>
        <span className={`px-3 py-1 text-[8px]  uppercase  ${job.category==='Web Development'? 'text-red-500 bg-red-200':  "text-blue-500 bg-blue-200" } ${job.category==="Graphics Design" && 'text-yellow-500 bg-yellow-100'} rounded-full `}>
          {job.category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          {job_title}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
           {description.length > 100 ? description.slice(0, 50) + '...' : description}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: ${minPrice} - ${maxPrice}
        </p>
      </div>
    </Link>
    );
};

export default JobCard;