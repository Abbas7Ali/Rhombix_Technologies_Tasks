import React, { useState } from 'react';

const ReadMore = ({ texts }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div> 
        {isReadMore ? texts.slice(0, 115) : texts}
        <span onClick={toggleReadMore} className="text-base text-semibold text-lime-600 hover:cursor-pointer hover:text-bold">
          {isReadMore ? '... Read More' : ' Show Less'}
        </span>
    </div>
  );
};

export default ReadMore;