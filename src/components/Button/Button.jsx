import React from 'react';
// import MyLoader from './sceleton/MyLoader';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Button({ uniqueCategories, categoryFilter }) {
  return (
    <div className="categoryBut">
      {uniqueCategories.length === 0 ? (
        <Skeleton
          count={4}
          className="uniqButtonSceleton"
          height={50}
          duration={1}
          baseColor="#ccc"
          highlightColor="#888888"
        />
      ) : (
        <>
          {uniqueCategories.map((category, index) => (
            <div
              className="uniqButton"
              key={index}
              onClick={() => setTimeout(() => categoryFilter(category), 100)}
            >
              {category}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
