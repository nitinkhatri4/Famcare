import React, { useEffect, useState } from 'react';

const Count = (props) => {
  // Destructure the props and set default values to prevent errors
  const { label = "Label", number = "0000", duration = "2" } = props.data;

  // State to keep track of the current count
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (typeof number !== 'string' || number.length === 0) return;

    let start = 0;
    const end = parseInt(number.substring(0, 3));

    if (start === end || isNaN(end)) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      // start = (start + 1) % (end + 1); // Reset to 0 when start reaches end
      // setCount(String(start) + number.substring(3));  
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // const updateCounter = () => {
    //   start = (start + 1) % (end + 1); // Reset to 0 when start reaches end
    //   setCount(String(start) + number.substring(3));

    //   if (start === 0) {
    //     clearInterval(timer);
    //     setTimeout(() => {
    //       timer = setInterval(updateCounter, incrementTime);
    //     }, 2000);
    //   }
    // };

    // let timer = setInterval(updateCounter, incrementTime);

    // Cleanup the timer when the component unmounts or number/duration changes
    return () => clearInterval(timer);
  }, [number, duration]);

  return (
    <div className='flex flex-col font-medium items-center'>
      <p className='text-3xl count'>{count}</p>
      <h3 className='text-3xl'>
        <i>{label}</i>
      </h3>
    </div>
  );
}

const CountSection = () => {
  const dataItems = [
    { label: "Patients Monitored", number: "5000", duration: "4" },
    { label: "Hospitals Partnered", number: "300", duration: "4" },
    { label: "Recent Uptime", number: "99", duration: "4" }
  ];

  return (
    <div className='px-10 py-10'>
      <div className='text-left'>
        <p className='text-6xl font-bold'>Proven Success</p>
        <p className='text-2xl font-medium text-gray-700'>
          Our solution has drastically improved patient outcomes and streamlined healthcare processes.
        </p>
      </div>
      <div className='flex justify-between text-gray-700 px-20 py-8'>
        {dataItems.map((item, index) => (
          <Count key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CountSection;