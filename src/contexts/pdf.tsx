'use server';

import ReactPDF, { DocumentProps } from '@react-pdf/renderer';
import { ReactElement } from 'react';

export type PDFContextType = {
  url: string | null;
};

// eslint-disable-next-line no-var
var renderedURLs: { [key: string]: string } = {};

// const pdf = usePDF(<ZinePagePDF />);
export const usePDF = async (
  name: string,
  document: () => ReactElement<DocumentProps, string>
): Promise<PDFContextType> => {
  return renderedURLs[name]
    ? { url: renderedURLs[name] }
    : new Promise((res) => {
        ReactPDF.render(document(), `${name}.pdf`, (o, u) => {
          renderedURLs[name] = u;
          res({ url: u });
        });
      });
};
