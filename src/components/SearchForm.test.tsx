import {cleanup, fireEvent, render} from '@testing-library/react';

import { SearchForm } from './SearchForm';


describe('test', () => {
  test('test', () => {
    const { debug } = render(
      <SearchForm onSearch={() => {}} searchTerm='' />
    );

    debug();
  })
});