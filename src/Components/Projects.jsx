import React from 'react';
import { HiLightBulb } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const cardsData = [
  {
    id: 1,
    title: 'Bubble Game',
    description: 'A fun game where players find the target number from bubbles within a time limit.',
    imageUrl: '/bubbleGame.jpg', 
    liveUrl: 'https://sonusinghh7.github.io/BubbleGame/',
    codeUrl: 'https://github.com/sonusinghh7/BubbleGame',
  },
  {
    id: 2,
    title: 'Tic Tac Toe',
    description: 'A fun and engaging mini project with both single-player and two-player modes.',
    imageUrl: '/ticTacToe.jpg',
    liveUrl: 'https://sonusinghh7.github.io/TicTacToe/',
    codeUrl: 'https://github.com/sonusinghh7/TicTacToe',
  },
  {
    id: 3,
    title: 'Only Pankha',
    description: 'Learn DOM manipulation in a fun way by turning a fan ON/OFF using click events.',
    imageUrl: 'onlyPankha.jpg',
    liveUrl: 'https://sonusinghh7.github.io/onlyPankha/',
    codeUrl: 'https://github.com/sonusinghh7/onlyPankha',
  },
];

const Projects = () => {
  return (
    <div className="w-full mt-2 py-4 bg-gray-50 dark:bg-transparent overflow-x-auto">
      <div className="flex space-x-4 px-4 lg:justify-around">
        {cardsData.map(({ id, title, description, imageUrl, liveUrl, codeUrl }) => (
          <div
            key={id}
            className="bg-gray-200 dark:bg-[#010101] h-[355px] w-[310px] lg:h-[232px] lg:w-[470px] rounded-2xl flex-shrink-0 flex flex-col lg:flex-row items-center transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.06)',
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-[270px] h-[180px] lg:h-[200px] object-cover rounded-t-2xl mt-4 mx-auto lg:rounded-none lg:ml-4 lg:my-4 lg:rounded-l-2xl"
            />
            <div className="p-4 flex flex-col justify-between flex-grow w-full">
              <div>
                <h3 className="text-gray-600 font-bold text-lg lg:text-3xl lg:w-48">{title}</h3>
                <p className="text-gray-500 mt-2 text-sm lg:text-[18px] lg:h-24 lg:w-52 flex items-start">{description}</p>
              </div>

              <div className="mt-2 flex space-x-3">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black dark:bg-gray-800 dark:text-white px-3 py-1 rounded flex items-center h-10 w-1/2 lg:w-26 gap-2 lg:mt-2 justify-center"
                >
                  <HiLightBulb className="text-2xl block lg:hidden" />
                  <span className="text-[14px] font-semibold">Live Demo</span>
                </a>
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black dark:bg-gray-800 dark:text-white px-3 py-1 rounded flex items-center h-10 w-1/2 lg:w-26 gap-2 lg:mt-2 justify-center"
                >
                  <FaGithub className="text-2xl block lg:hidden" />
                  <span className="text-sm font-semibold">View Code</span>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
