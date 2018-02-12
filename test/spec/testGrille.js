/**
 * Test grille.js
 */
(function () {
	'use strict';

	describe('Grille', function () {
		var grille;
		var nbCaseCote;
	  
		describe('Création d\'une nouvelle grille', function () {
    	
			beforeAll(function() {
				nbCaseCote = 3;
				grille = new Grille(nbCaseCote);
				grille.genererVide();
			});
              
			it('Devrait générer une grille avec 3 cases de chaque côté', function () {
				expect(grille.matrice.length).toEqual(nbCaseCote);
				expect(grille.matrice[0].length).toEqual(nbCaseCote);
			});
			
			it('Devrait générer une grille vide', function () {
				for(var i=0; i<nbCaseCote; i++) {
					for(var j=0; j<nbCaseCote; j++){
						expect(grille.matrice[i][j]).toEqual('');
					}
				}
			});
			it('Devrait lancer une erreur si on lit une valeur de la matrice au delà de la taille prévue', function() {
			    expect(function() {
			    	expect(grille.matrice[4][4]);
			    }).toThrowError(TypeError);
			});
		});
	});
})();