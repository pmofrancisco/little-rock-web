import * as R from 'ramda';
import React, { useRef, useState } from 'react';
import readXlsxFile from 'read-excel-file';

import { convertToNumber } from './converter';

export default () => {
  const fileEl = useRef(null);
  const [csvContent, setCsvContent] = useState('');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
  const objUrl = URL.createObjectURL(blob);
  
  const { files } = fileEl.current ?? {};
  const [selectedFile] = files ?? [];
  const { name } = selectedFile ?? {};
  const [csvFilename] = R.split('.', name ?? '');

  return (
    <div>
      <h1>Home Page New S3 Bucket.!@#</h1>
      <input ref={fileEl} type="file" onChange={async () => {
        try {
          const { files } = fileEl.current ?? {};
          const [selectedFile] = files ?? [];
          const { name } = selectedFile ?? {};
          const [csvFilename] = R.split('.', name ?? '');
          const [pse, year, month, day] = (csvFilename ?? '').split('-');
          console.log({ year, month, day, fileEl });

          const rows = await readXlsxFile(fileEl?.current?.files[0]);
          const content = rows.reduce((content, row) => {
            const [code, open, high, low, close, volume, value] = row;
            return `${content}${code},${year}/${month}/${day},${open},${high},${low},${close},${convertToNumber(volume)},${convertToNumber(value)}\n`;
          }, 'stock_code,quote_date,open_price,high_price,low_price,close_price,volume,value\n');
          setCsvContent(content);
        } catch (err) {
          console.error({ err });
        }
      }} />
      {csvContent.length > 0 && <a href={objUrl} download={csvFilename ?? ''}>{`Download ${csvFilename}.csv`}</a>}
    </div>
  );
}
