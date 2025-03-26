import React from 'react';

const TimeandLocation = ({ weather }) => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-xl font-extralight'>{weather.formattedLocalTime}</p> {/* ✅ Use weather.formattedLocalTime */}
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-3xl font-medium'>
          {weather.name}, {weather.country} {/* ✅ Use dynamic name and country */}
        </p>
      </div>
    </div>
  );
};

export default TimeandLocation;
