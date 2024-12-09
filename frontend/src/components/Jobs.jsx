import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 bg-gray-100">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 p-4 z-10 bg-gray-100">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

/*import React, { useEffect, useState } from 'react';
import Job from './Job';
import FilterCard from './FilterCard';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { motion } from 'framer-motion';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]); // State to store filtered jobs

    // Simulated job data
    useEffect(() => {
        const fetchJobs = () => {
            const sampleJobs = [
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
            console.log('Jobs fetched:', sampleJobs);
            setJobs(sampleJobs);
            setFilteredJobs(sampleJobs); // Initially set filtered jobs to all jobs
        };

        fetchJobs();
    }, []);

    // Filter jobs based on filter criteria
    const handleFilter = (filterCriteria) => {
        const { jobType, location, salary } = filterCriteria;

        const filtered = jobs.filter((job) => {
            return (
                (jobType ? job.jobType === jobType : true) &&
                (location ? job.location === location : true) &&
                (salary ? job.salary === salary : true)
            );
        });

        setFilteredJobs(filtered);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-1 gap-6 p-6">
                <motion.div
                    className="w-full sm:w-1/4 bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <FilterCard onFilter={handleFilter} />
                </motion.div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => <Job key={job._id} job={job} />)
                    ) : (
                        <p className="text-center text-lg text-gray-500">No jobs available</p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Jobs;*/
