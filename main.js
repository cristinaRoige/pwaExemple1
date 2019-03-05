//Configuració service worker
if('serviceWorker' in navigator){
	console.log('serviceWorker actiu al navegador');

	//carrega del service worker amb un registre
	navigator.serviceWorker.register('./sw.js')
							.then(res => console.log('Service Worker carregat correctament.', res))//retorna una promesa
							.catch(err => console.log('Service Worker no s\'ha pogut registrar', err));//en cas error
}else{
	console.log('no es pot utilitzar el serviceWorker al navegador.');
}

