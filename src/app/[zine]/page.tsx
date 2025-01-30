'use client';

import { useParams } from 'next/navigation';

// Koala :)

const ZinePage = () => {
  const { zine } = useParams();

  return (
    <div>
      <h1>{zine}</h1>
    </div>
  );
};

export default ZinePage;
