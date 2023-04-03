import React from 'react';
import Input from '../Input';

type Props = {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

function TaskFilter({ searchString, setSearchString }:Props) {
  return (
    <Input
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)}
      label="Filter tasks"
    />
  );
}

export default TaskFilter;
