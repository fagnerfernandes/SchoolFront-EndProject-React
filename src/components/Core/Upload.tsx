import { Button } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

type ClassKidsActivityButtonsProps = {
  accept: string;
  multiple: boolean;
  onChangeFiles: (f: any[]) => void;
};

const ClassKidsActivityButtons = ({ accept, multiple, onChangeFiles }: ClassKidsActivityButtonsProps) => {
  const [files, setFiles] = useState([] as any[]);
  const fileRef = useRef(null as any);

  useEffect(() => {
    onChangeFiles(files);
  }, [files]);

  const showOpenFileDialog = () => {
    if (fileRef?.current?.click) {
      fileRef.current.click();
    }
  };

  const changeFile = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const removeFile = (e: any) => {
    const newArray = files.filter((f: any) => String(f.name) !== String(e?.name));
    setFiles(newArray);
  };

  return (
    <>
      <Button
        className="btn-icon btn-sm"
        color="secondary"
        type="button"
        id="input-attach"
        onClick={showOpenFileDialog}
        style={{ marginBottom: '2px' }}
      >
        <span className="btn-inner--icon pt-1" style={{ marginRight: '1px' }}>
          <i className="fas fa-paperclip" style={{ top: '0' }} />
        </span>
      </Button>
      {!Number(files?.length) && <span>{`Select file${multiple ? '(s)' : ''}`}</span>}
      {files.map((f: any, i: number) => (
        <span style={{ display: 'block' }} key={`file-upload-${i}`}>
          {f.name}{' '}
          <i className="far fa-trash-alt text-danger" style={{ cursor: 'pointer' }} onClick={() => removeFile(f)}></i>
        </span>
      ))}
      <input
        name="files"
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={fileRef}
        multiple={multiple}
        onChange={changeFile}
      />
    </>
  );
};

export default ClassKidsActivityButtons;
