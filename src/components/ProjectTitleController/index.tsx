import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Input from '../Input';

function ProjectTitleController() {
  const [title, setTitle] = React.useState('Project');
  useDocumentTitle(title);
  return (
    <Input
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
      }}
      label="Project Title"
    />
  );
}

export default ProjectTitleController;
