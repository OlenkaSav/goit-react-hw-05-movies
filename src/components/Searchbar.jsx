import { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <SButton type="submit">
        <BsSearch size={16} />
      </SButton>

      <SInput
        onChange={handleQueryChange}
        value={query}
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const SForm = styled.form`
  /* margin-top: 5px; */
  margin: 5px auto;
  padding: 5px;
  width: 500px;
  background-color: #ded7bd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SInput = styled.input`
  height: 20px;
  border: none;
`;

const SButton = styled.button`
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #282094;
  }
`;
