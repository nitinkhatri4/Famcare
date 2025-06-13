import React from 'react';

const features = [
  {
    title: 'Secure Medical Records',
    description: 'Access your medical history anytime, anywhere.',
    icon: '🔒', // Replace with an actual icon if using a library like FontAwesome or similar
  },
  {
    title: 'Real-Time Health Monitoring',
    description: 'Track health metrics in real-time for better care.',
    icon: '🚀',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Book appointments and get reminders with ease.',
    icon: '⚙️',
  },
];

const Feature = () => {
  return (
    <div className="min-h-[90vh] bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-black text-center mb-8">Our Features</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold text-black mb-2">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;