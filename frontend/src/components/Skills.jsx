

// Mock data for resources
import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const skillsResources = [
  {
    id: 1,
    title: 'Learn React for Beginners',
    description: 'A complete guide to getting started with React.js.',
    link: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
    source: 'YouTube',
    image: 'https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Understanding CSS Grid',
    description: 'Master CSS Grid with this step-by-step tutorial.',
    link: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
    source: 'CSS-Tricks',
    image: '/assets/default-social-css-tricks.webp',
  },
  {
    id: 3,
    title: 'Python Programming Basics',
    description: 'Get started with Python programming for absolute beginners.',
    link: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
    source: 'YouTube',
    image: 'https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg',
  },
  {
    id: 4,
    title: 'Effective Communication Skills',
    description: 'Develop communication skills that stand out in interviews and workplaces.',
    link: 'https://hbr.org/2019/11/how-to-improve-your-communication-skills',
    source: 'Harvard Business Review',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
  },
  {
    id: 5,
    title: 'Crack Your First Job Interview',
    description: 'Learn tips and tricks to prepare for job interviews.',
    link: 'https://youtu.be/Jit_n0crbOc?feature=shared',
    source: 'YouTube',
    image: '/assets/tips-to-crack-job-interview.jpg',
  },
  {
    id: 6,
    title: 'Master Excel for the Workplace',
    description: 'Learn essential Excel skills for office tasks.',
    link: 'https://www.youtube.com/watch?v=rwbho0CgEAE',
    source: 'YouTube',
    image: 'https://img.youtube.com/vi/rwbho0CgEAE/maxresdefault.jpg',
  },
  {
    id: 7,
    title: 'Time Management for Students and Freshers',
    description: 'Improve productivity with proven time management techniques.',
    link: 'https://www.mindtools.com/pages/article/newHTE_00.htm',
    source: 'MindTools',
    image: '/assets/images.png',
  },
  {
    id: 8,
    title: 'Understanding Git and GitHub',
    description: 'Collaborate on coding projects with Git and GitHub.',
    link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    source: 'YouTube',
    image: 'https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg',
  },
];

const defaultImage =
  'https://via.placeholder.com/300x200.png?text=Skill+Resource';

const handleImageError = (event) => {
  event.target.src = defaultImage;
};

const Skills = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="font-extrabold text-4xl text-gray-800 mb-6">Skill-Building Resources</h1>
        <p className="text-lg text-gray-600 mb-10">
          Explore resources tailored for freshers to enhance your professional and personal development. These materials include programming, soft skills, time management, and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-2xl rounded-xl overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <div>
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-48 w-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                  onError={handleImageError}
                />
                <div className="p-6">
                  <h2 className="font-semibold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-4 group-hover:text-gray-500 transition-colors duration-300">
                    {resource.description}
                  </p>
                  <span className="text-xs text-gray-500">{resource.source}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
