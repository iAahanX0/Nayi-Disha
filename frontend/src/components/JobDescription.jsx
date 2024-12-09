import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Home, ArrowLeft } from 'lucide-react';

const JobDescription = () => {
    const { singleJob } = useSelector((store) => store.job);
    const { user } = useSelector((store) => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some((application) => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

            if (res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some((application) => application.applicant === user?._id));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            {/* Job Description Content Area */}
            <div className="max-w-7xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
                {/* Header Section */}
                <div className="flex gap-4 mb-6">
                    <Button onClick={() => navigate('/jobs')} className="bg-gray-200 text-blue-500 hover:bg-blue-400 hover:text-white p-3 rounded-full transition-all">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <Button onClick={() => navigate('/')} className="bg-gray-200 text-blue-500 hover:bg-blue-400 hover:text-white p-3 rounded-full transition-all">
                        <Home className="h-5 w-5" />
                    </Button>
                </div>

                {/* Job Title and Header Section */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{singleJob?.title || 'Job Title'}</h1>
                        <div className="flex items-center gap-3 mt-4">
                            <Badge className="text-blue-700 bg-gray-200 font-semibold">{singleJob?.positions || 'Positions'}</Badge>
                            <Badge className="text-orange-600 bg-gray-200 font-semibold">{singleJob?.type || 'Type'}</Badge>
                            <Badge className="text-purple-600 bg-gray-200 font-semibold">{singleJob?.salary ? `${singleJob.salary} LPA` : 'Salary'}</Badge>
                        </div>
                    </div>

                    {/* Apply Button */}
                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`py-3 px-6 rounded-full font-semibold text-white ${isApplied ? 'bg-red-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </header>

                {/* Job Description Section */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 py-4">Job Description</h2>
                    <div className="space-y-4 mt-4">
                        <p className="font-medium text-gray-700">Role: <span className="font-normal text-gray-500">{singleJob?.title || 'N/A'}</span></p>
                        <p className="font-medium text-gray-700">Location: <span className="font-normal text-gray-500">{singleJob?.location || 'N/A'}</span></p>
                        <p className="font-medium text-gray-700">Description: <span className="font-normal text-gray-500">{singleJob?.description || 'N/A'}</span></p>
                        <p className="font-medium text-gray-700">Experience: <span className="font-normal text-gray-500">{singleJob?.experience || '0'} yrs</span></p>
                        <p className="font-medium text-gray-700">Salary: <span className="font-normal text-gray-500">{singleJob?.salary || '0'} LPA</span></p>
                        <p className="font-medium text-gray-700">Total Applicants: <span className="font-normal text-gray-500">{singleJob?.applications?.length || '0'}</span></p>
                        <p className="font-medium text-gray-700">Posted Date: <span className="font-normal text-gray-500">{singleJob?.createdAt?.split("T")[0] || 'N/A'}</span></p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default JobDescription;
