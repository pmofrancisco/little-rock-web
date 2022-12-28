import React, { useRef} from 'react';
import readXlsxFile from 'read-excel-file';

export default () => {
  const fileEl = useRef(null);
  return (
    <div>
      <h1>Home Page New S3 Bucket.!@#</h1>
      <input ref={fileEl} type="file" onChange={() => {
        const { files } = fileEl?.current;
        readXlsxFile(fileEl?.current?.files[0]).then((rows) => {
          console.log({ rows });
        }).catch((err) => console.log({ err }));
      }} />
    </div>
  );
}
