import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Input from '../Input';

function TitleController() {
  const [title, setTitle] = React.useState('Project');
  useDocumentTitle(title);
  return (
    <Input
      value={title}
      onChange={(e) => {
        const newTitle = e.target.value;
        setTitle(newTitle.charAt(0).toUpperCase() + newTitle.slice(1));
      }}
      label="Project Title"
    />
  );
}

export default TitleController;
