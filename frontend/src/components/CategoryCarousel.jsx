import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  {
    name: "Frontend Developer",
    image: "https://media1.tenor.com/m/0d0wN-S12VUAAAAC/front-end.gif"
  },
  {
    name: "Backend Developer",
    image: "https://media.tenor.com/IDGMfpFgxosAAAAM/programmer-day-code.gif"
  },
  {
    name: "Data Scientist",
    image: "https://media.tenor.com/9nrPcrBZmyEAAAAM/science-statistics.gif"
  },
  {
    name: "IOS Developer",
    image: "https://media.tenor.com/N_CttHslYycAAAAM/app-design-animation.gif"
  },
  {
    name: "UX Designer",
    image: "https://media.tenor.com/sB7x25bwRlcAAAAM/coral-island-stairway-games.gif"
  },
  {
    name: "Fullstack Developer",
    image: "https://media.tenor.com/dg2ESktyq0wAAAAM/animation-creativedesign.gif"
  }
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }

  return (
    <div>
      <Carousel className="w-full max-w-5xl mx-auto my-50">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem 
              key={index} 
              className="md:basis-1/2 lg:basis-1/3 flex justify-center items-center"
            >
              <Button
                onClick={() => searchJobHandler(cat.name)}
                variant="outline"
                className="relative text-gray-400 text-2xl px-20 py-24 m-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out group"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center', 
                  backgroundRepeat: 'no-repeat',
                  height: '300px',
                  width: '300px',
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  borderRadius: '16px',
                }}
              >
                {/* Bottom Gradient Effect */}
                <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-300 ease-in-out">
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-100 z-10 group-hover:from-black/60 group-hover:via-black/40"></div>
                  <span className="relative z-20 font-medium text-gray-400 transition-all duration-300 ease-in-out group-hover:text-white group-hover:font-bold">
                    {cat.name}
                  </span>
                </div>
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
