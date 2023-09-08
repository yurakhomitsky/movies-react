import { SearchForm } from '../../src/components';

describe('SearchForm', () => {
  it('should display initial search term', () => {
    const searchTerm = 'hello world'

    cy.mount(
      <SearchForm searchTerm={searchTerm} onSearch={() => {}}></SearchForm>
    );

    cy.get('[data-testid=search-input]').should('have.value', searchTerm)

  })

  it('should call onSearch function with typed input text on button click', () => {
    const searchTerm = 'Search Button'

    const onSearchSpy = cy.spy().as('onSearchSpy')

    cy.mount(
      <SearchForm searchTerm={searchTerm} onSearch={onSearchSpy}></SearchForm>
    );

    cy.get('[data-testid=search-input]').clear().type(searchTerm);

    cy.get('[data-testid=search-button]').click()

    cy.get('@onSearchSpy').should('have.been.calledWith', searchTerm)

  })

  it('should call onSearch function with typed input text on "Enter" keydown ', () => {
    const searchTerm = 'Enter'
    const onSearchSpy = cy.spy().as('onSearchSpy')

    cy.mount(
      <SearchForm searchTerm={searchTerm} onSearch={onSearchSpy}></SearchForm>
    );

    cy.get('[data-testid=search-input]').clear().type(searchTerm);

    cy.get('[data-testid=search-button]').click()

    cy.get('@onSearchSpy').should('have.been.calledWith', searchTerm)

    cy.get('[data-testid=search-input]').trigger('keydown', { key: 'Enter', code: 'Enter' });

    cy.get('@onSearchSpy').should('have.been.calledWith', searchTerm)
  })
})
