/**
 * Test joueur.js
 */
(function () {
	'use strict';

	describe('Joueur', function () {
		var joueur;  
	  
		describe('Instanciation d\'un nouveau joueur', function () {
    	
			beforeAll(function() {
				joueur = new Joueur('Bob', 'red', 'X');
			});
              
			it('Devrait correctement instancier un joueur', function () {
				expect(joueur.nom).toEqual('Bob');
				expect(joueur.couleur).toEqual('red');
				expect(joueur.symbole).toEqual('X');
			});
		});
	});
})();