import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Input from '../Input';

function TitleController() {
  const [title, setTitle] = React.useState('Recursive TODO List');
  useDocumentTitle(title);
  return (
    <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
      <Input
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle.charAt(0).toUpperCase() + newTitle.slice(1));
        }}
        label="Project title"
        inputStyle={{ fontWeight: 'bold' }}
      />
    </div>
  );
}

export default TitleController;
