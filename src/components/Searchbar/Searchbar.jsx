import { Notify } from 'notiflix';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  const handleInputQuery = e => {
    const textInput = e.currentTarget.value.toLowerCase();
    //прописуємо умову ,щоб при очищенні інпуту в адреснопу рядку не залишався ключ запиту :
    textInput ? setSearchQuery({ query: textInput }) : setSearchQuery({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      Notify.info('Enter your request');
      return;
    }
    onSubmit(query);
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
            value={query}
          />
        </SearchForm>
      </SearchbarHeader>
    </div>
  );
}
