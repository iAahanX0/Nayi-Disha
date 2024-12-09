import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#FF0000]'>Latest & Top </span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </div>
    )
}

export default LatestJobs
/*import React from 'react';
import LatestJobCards from './LatestJobCards'; // Assuming you have this component already

const LatestJobs = () => {
  // Static job data
  const allJobs = [
    {
      _id: '1',
      title: 'Frontend Developer',
      description: 'Build responsive UIs using React.js.',
      jobType: 'Full-Time',
      location: 'Remote',
      salary: '8-10',
      company: { name: 'TechCorp', logo: 'https://via.placeholder.com/100' },
      createdAt: new Date().toISOString(),
    },
    {
      _id: '2',
      title: 'Backend Developer',
      description: 'Develop robust APIs and services.',
      jobType: 'Part-Time',
      location: 'New York',
      salary: '6-8',
      company: { name: 'CodeBase', logo: 'https://via.placeholder.com/100' },
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      _id: '3',
      title: 'Product Manager',
      description: 'Lead product development and strategy.',
      jobType: 'Full-Time',
      location: 'San Francisco',
      salary: '15-20',
      company: { name: 'Innovatech', logo: 'https://via.placeholder.com/100' },
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'>
        <span className='text-[#FF0000]'>Latest & Top </span> Job Openings
      </h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs?.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestJobs;*/
