import { MovieFormModel } from '../../src/Movies';


describe('Movies CRUD', { testIsolation: false }, () => {
	const movieModel: MovieFormModel = {
		title: 'Movie E2E',
		release_date: '2023-06-01',
		genres: ['Comedy'],
		poster_path: 'url',
		vote_average: 8.5,
		runtime: 30,
		overview: `Some Description`,
	};

	before(() => {
		cy.visit('/');
	})

	it('should create movie', () => {
		cy.get('[data-testid=add-movie-button]').click();

		cy.get('[data-testid=form-field-title]').clear().type(movieModel.title)
		cy.get('[data-testid=form-field-release-date]').clear().type(movieModel.release_date)
		cy.get('[data-testid=form-field-vote]').clear().type(movieModel.vote_average.toString())
		cy.get('[data-testid=form-field-genres]').select(movieModel.genres)
		cy.get('[data-testid=form-field-runtime]').clear().type(movieModel.runtime.toString())
		cy.get('[data-testid=form-field-overview]').clear().type(movieModel.overview)

		cy.get('button[type="submit"]').click();
	})


	it('should update movie', () => {
		cy.get('[data-testid=search-input]').clear().type(movieModel.title);

		cy.get('[data-testid=search-button]').click();

		cy.get('[data-testid="context-menu-btn"]').click()
		cy.get('[data-test-id="Edit"]').click();

		cy.get('[data-testid=form-field-title]').clear().type('Movie E2E updated');
		cy.get('button[type="submit"]').click();
	})

	it('should delete movie', () => {
		cy.get('[data-testid="Movie E2E updated"]')
			.should('have.length', 1)
			.find('[data-testid="context-menu-btn"]')
			.click()

		cy.get('[data-test-id="Delete"]').click();

		cy.get('button').contains('Confirm').click()
	})
})
