const { 
    map, 
    take, 
    tap 
} = rxjs.operators;
/**
 * Crée un observable qui emet un chiffre
 * toute les 2 secondes   
 */
const interval$ = rxjs.interval(2000).pipe(take(10));

/**
 * soubscription à l'observable interval$
 * et log du resultat
 */
interval$.subscribe(val => console.log('simple', val));

/**
 * Création de l'observable double$ à partir de l'observable
 * interval$
 */
const double$ = interval$.pipe(
    map(val => val = val * 2),
    take(5),
    tap(val => console.log('double', val),
    )
)

/**
 * Subscription a double$, sans cette subscription
 * l'observable ne "démarre pas"
 * Je met le resultat de la subscription dans une variable
 * mais ce n'est pas obligatoire, c'est toutefois utile
 * pour "unsubscribe"....
 * 
 */
const result$ = double$.subscribe();


/**
 * Je crée 2 observable à partir de string grace à of,
 * mais, les "sources" auraient pu être autre chose
 * puis forjoin met le résultat de mes 2 observables
 * en forme dans mon objet custom
 * tap ne fait rien d'autre que loguer
 */
const joined$ = rxjs.forkJoin({
    nom: rxjs.of('nootim'),
    prenom: rxjs.of('dev')
}).subscribe(val => console.log('mon nouvel objet: ',val));