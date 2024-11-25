import React from 'react';
import { FacebookEmbed, InstagramEmbed, LinkedInEmbed } from 'react-social-media-embed';

const SocialMediaSection = () => {
  return (
    <div className="flex justify-center p-4 bg-white border rounded-lg shadow-lg">
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <InstagramEmbed url="https://www.instagram.com/p/C4apmvivYU3/" width={300} />
        </div>
        <div className="p-4 border rounded-lg">
          <FacebookEmbed url="#" width={300} />
        </div>
        <div className="p-4 border rounded-lg">
          <LinkedInEmbed url="https://www.linkedin.com/posts/shivalikcollegeofficial_shivalikcollege-subhartihospital-mou-activity-7257398785251713024-WtVV?utm_source=share&utm_medium=member_desktop" width={300} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
