/*import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "40-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
    return (
        <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    fitlerData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`
                                    return (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default <FilterCard></FilterCard>*/
import React, { useState } from 'react';

const JobFilterCard = ({ onFilter }) => {
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  // Handle applying the filter
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ jobType, location, salary });
  };

  // Handle clearing a specific filter
  const clearFilter = (filterType) => {
    if (filterType === 'jobType') {
      setJobType('');
    } else if (filterType === 'location') {
      setLocation('');
    } else if (filterType === 'salary') {
      setSalary('');
    }
    onFilter({ jobType: '', location: '', salary: '' });
  };

  // Handle clearing all filters at once
  const clearAllFilters = () => {
    setJobType('');
    setLocation('');
    setSalary('');
    onFilter({ jobType: '', location: '', salary: '' });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-xs mx-auto">
      <h2 className="font-semibold text-lg text-center mb-4">Filters</h2>

      <form onSubmit={handleSubmit}>
        {/* Job Type Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Type</label>
          <select
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
          {jobType && (
            <button
              type="button"
              className="mt-2 text-sm text-red-500 hover:text-red-700"
              onClick={() => clearFilter('jobType')}
            >
              Clear Job Type
            </button>
          )}
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="San Marino, Italy">San Marino, Italy</option>
            <option value="LA, USA">LA, USA</option>
            <option value="Punjab">Punjab</option>
            <option value="India">India</option>
            <option value="Gurugram">Gurugram</option>
          </select>
          {location && (
            <button
              type="button"
              className="mt-2 text-sm text-red-500 hover:text-red-700"
              onClick={() => clearFilter('location')}
            >
              Clear Location
            </button>
          )}
        </div>

        {/* Salary Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Salary</label>
          <select
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <option value="">All Salaries</option>
            <option value="0-5LPA">0-5 LPA</option>
            <option value="5-10LPA">5-10 LPA</option>
            <option value="10-20LPA">10-20 LPA</option>
            <option value="20-50LPA">20-50 LPA</option>
            <option value="50LPA+">50 LPA+</option>
          </select>
          {salary && (
            <button
              type="button"
              className="mt-2 text-sm text-red-500 hover:text-red-700"
              onClick={() => clearFilter('salary')}
            >
              Clear Salary
            </button>
          )}
        </div>

        {/* Apply Filters Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-300"
        >
          Apply Filters
        </button>

        {/* Clear All Filters Button */}
        <button
          type="button"
          className="w-full bg-gray-400 text-white py-2 rounded-md mt-2 hover:bg-gray-500 transition duration-300"
          onClick={clearAllFilters}
        >
          Clear All Filters
        </button>
      </form>
    </div>
  );
};

export default JobFilterCard;
