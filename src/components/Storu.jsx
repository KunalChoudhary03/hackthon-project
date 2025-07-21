import React from 'react';

const Storu = () => {
  const data = [
    {
      name: 'Aarav Mehta',
      image: "https://imgs.search.brave.com/aLzMCKUiaauMwB0ssKjFaYMHl4kTYscWU3h0fmu6GYU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTIx/Mjk4NC9wZXhlbHMt/cGhvdG8tMTIxMjk4/NC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
      successStory: 'Built his dream app',
    },
    {
      name: 'Ishita Roy',
      image: 'https://imgs.search.brave.com/RL6T04_GMV7Zp0V1IpW3syVSHh5Q4gABzABHuMNYlGc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MTA3NzU3Ny9waG90/by9zcHJpbmctcG9y/dHJhaXQtb2YtZXhj/aXRlZC15b3VuZy13/b21hbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MTFfd19h/ZWhNdXpZZ1Q3c2VX/YjBNQ2dDSExUR1Jl/MWlPOWlOOE5xX2Ns/TT0',
      successStory: 'Landed her dream job',
    },
    {
      name: 'Kabir Khan',
      image: 'https://imgs.search.brave.com/3ep3Fcu_F8mdNyCKunXfiJUtaflaoZyanSv9N2zA72Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTIy/MjI3MS9wZXhlbHMt/cGhvdG8tMTIyMjI3/MS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA',
      successStory: 'Won a tech award',
    },
    {
      name: 'Sneha Verma',
      image: 'https://imgs.search.brave.com/rgy9mTxk9pZ1DhnzBZpXM4-0eEM46F34T6Pok6P9VTg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDIw/MzI0NTUyL3N0b2Nr/LXBob3RvLWNvbmZp/ZGVudC1hZnJvLXdv/bWFuLXBvc2luZy1v/bi15ZWxsb3ctYmFj/a2dyb3VuZA',
      successStory: 'Built viral startup',
    },
    {
      name: 'Rohani Desai',
      image: 'https://imgs.search.brave.com/cVc_lgQ8BTSEzjjAYSfatsJPGc0enhGCne5sJq1aAE8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTA2/NTA4NC9wZXhlbHMt/cGhvdG8tMTA2NTA4/NC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA',
      successStory: 'Cracked coding test',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6  bg-black ">
      {data.map((item, i) => (
        <div
          key={i}
          className="relative w-60 h-72 rounded-xl overflow-hidden group shadow-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-sm mt-1 text-center w-3/4">{item.successStory}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Storu;
