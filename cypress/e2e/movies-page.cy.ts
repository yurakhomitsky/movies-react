describe('MoviesPage', { testIsolation: false }, () => {
	before(() => {
		cy.visit('/');
	});

	it('should search movies', () => {
		cy.get('[data-testid=search-input]').clear().type('Star Wars');

		cy.intercept({
			method: 'GET',
			path: '/movies?*'
		}, {
			fixture: 'movies-response.json'
		});

		cy.get('[data-testid=search-button]').click();

		cy.get('[data-testid=movie-item]').should('have.length', 2).eq(0).contains('Star Wars: The Last Jedi');
	});

	it('should display movies by genres', () => {
		cy.intercept({
			method: 'GET',
			path: '/movies?*'
		}, {
			fixture: 'movies-adventure.json'
		});

		cy.get('[data-testid=genre-select-button]').contains('Adventure').click();

		cy.get('[data-testid=movie-item]').should('have.length', 1).eq(0).contains('Adventure');

		cy.intercept({
			method: 'GET',
			path: '/movies?*'
		}, {
			fixture: 'movies-actions.json'
		});

		cy.get('[data-testid=genre-select-button]').contains('Action').click();

		cy.get('[data-testid=movie-item]').should('have.length', 1).eq(0).contains('Action');
	});

	it('should sort by Title', () => {
		cy.intercept({
			method: 'GET',
			path: '/movies?*'
		}, {
			fixture: 'movies-by-title.json'
		});
		cy.get('[data-testid=sort-by-select]').select('Title');

		cy.get('[data-testid=movie-item]').should('have.length', 2).eq(0).contains('Black Panther');
	})

	it('should sort by Release Date', () => {
		cy.intercept({
			method: 'GET',
			path: '/movies?*'
		}, {
			fixture: 'movies-by-release-date.json'
		});
		cy.get('[data-testid=sort-by-select]').select('Release Date');

		cy.get('[data-testid=movie-item]').should('have.length', 2).eq(0).contains('2018-02-13');
	})

	it('should select a movie', () => {
		cy.intercept({
			method: 'GET',
			path: '/movies?*'
		}, {
			fixture: 'movies-response.json'
		});

		cy.visit('/');

		cy.get('[data-testid=movie-item]').contains('Star Wars: The Last Jedi').click();

		cy.get('[data-testid=movie-details]').contains('Star Wars: The Last Jedi');
	})
})
