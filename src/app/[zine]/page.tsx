'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ZinePagePDF from '@/molecules/pagepdf';
import { usePDF } from '@/contexts/pdf';
import { useState } from 'react';

// Koala :)

const ZinePage = () => {
  const { zine } = useParams();
  const [u, setURL] = useState<string | null>(null);
  usePDF(zine as string, ZinePagePDF).then(({ url }) => setURL(url));

  return (
    <div>
      <h1>{zine}</h1>
      <Link href={`/${zine}/edit`}>
        <button>Edit Zine</button>
      </Link>
      {u ? (
        <Link href={u}>
          <button>View Zine</button>
        </Link>
      ) : null}
    </div>
  );
};

export default ZinePage;
