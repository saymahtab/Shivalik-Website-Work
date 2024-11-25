import React from 'react';
import Posters1 from '../../assets/posters/poster1.png';
import Posters2 from '../../assets/posters/poster2.png';
import Posters3 from '../../assets/posters/poster3.jpg';
import Posters4 from '../../assets/posters/poster4.jpg';
const NewsEvents = () => {

  const events = [
    {
      image: Posters1,
      title: 'Management Vibes',
      date: 'June 04',
      link: '#',
    },
    {
      image: Posters2,
      title: 'Shivalik Tribune',
      date: 'March 13',
      link: '#',
    },
    {
      image: Posters3,
      title: 'Nukkad Natak',
      date: 'December 18',
      link: '#',
    },
    {
      image: Posters4,
      title: 'Ganga Cleaning Campaign',
      date: 'December 18',
      link: '#',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl  text-[#98012e] py-2 font-bold py-8 underline">News & Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110 ">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-500 mb-4">{event.date}</p>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className=' flex flex-col items-center py-4'>
        <button className=" text-2xl mt-5 bg-[#fba94a] text-white px-5 py-2 rounded-lg hover:bg-[#fba94a]">
            
        View All Events
      </button>
      </div>
       
      </div>
    </section>
  );
};

export default NewsEvents;
