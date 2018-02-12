/**
 * Test utilitaire.js
 */
(function () {
	'use strict';

	describe('Test des fonctions utilitaires', function () {
		var matrice;	
	    	
		beforeAll(function() {
			matrice = [
				[1,2,3],
				[4,5,6],
				[7,8,9]
			];
		});		
		
		it('Retourne les bonnes coordonnées x,y à partir d\'un dividende et d\'un diviseur donnés', function () {
			expect(calculCoord(1,3)).toEqual({x: 0, y: 0}); // les coordonnées sont égales à x=0 et y=0 à partir de la case n°1 d'un carré qui comprend 3 cases par côté
			expect(matrice[0][0]).toEqual(1); // la valeur de la première case de la matrice est égale à 1
			expect(calculCoord(9,3)).toEqual({x: 2, y: 2});
			expect(matrice[2][2]).toEqual(9);
		});	
	});
})();