import React from 'react';
import { Star, Calendar, Clock, Play } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const { title, year, rating, duration, genre, poster, description } = movie;

  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm flex flex-col h-full border border-slate-100 dark:border-slate-700">
      {/* Poster Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={poster} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
           <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-slate-200">
             <Play size={16} className="fill-current" /> Watch Trailer
           </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-lg border border-white/10 shadow-sm">
          <Star size={14} className="text-yellow-400 fill-current" />
          <span className="text-sm font-bold">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {genre.map((g, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
              {g}
            </span>
          ))}
        </div>

        <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs font-medium">
          <div className="flex items-center gap-1"><Calendar size={14} /> <span>{year}</span></div>
          <div className="flex items-center gap-1"><Clock size={14} /> <span>{duration}</span></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;