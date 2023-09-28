import { Notify } from 'notiflix';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  const handleInputQuery = e => {
    const textInput = e.currentTarget.value.toLowerCase();
    //прописуємо умову ,щоб при очищенні інпуту в адреснопу рядку не залишався ключ запиту :
    if (textInput) {
      setSearchQuery({ query: textInput });
      setInputValue(textInput);
    } else {
      setSearchQuery({});
      setInputValue('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('inputValue :>> ', inputValue);
    console.log('query :>> ', query);
    if (inputValue === '') {
      Notify.info('Enter your request');
      return;
    }
    onSubmit(query);
    setInputValue('');
  };

  return (
    <div>
      <SearchbarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={handleInputQuery}
            value={inputValue}
          />
        </SearchForm>
      </SearchbarHeader>
    </div>
  );
}
