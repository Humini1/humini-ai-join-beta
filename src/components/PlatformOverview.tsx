import React from 'react';

const PlatformOverview = () => {
  return (
    <section className="w-full py-4 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Platform Overview</h2>
        <p className="text-lg">
          Our platform offers a comprehensive solution for managing IT assets efficiently. With features designed to streamline processes, you can focus on what truly matters.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>AI-powered insights for better decision-making</li>
          <li>Seamless onboarding and offboarding processes</li>
          <li>Lifecycle tracking for all devices</li>
        </ul>
      </div>
    </section>
  );
};

export default PlatformOverview;
