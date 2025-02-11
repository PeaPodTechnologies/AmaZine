'use client';

import { useParams } from 'next/navigation';

// Koala :)

const ZineEditor = () => {
  const { zine } = useParams();

  return (
    <div>
      <h1>Edit {zine}</h1>
    </div>
  );
};

export default ZineEditor;
