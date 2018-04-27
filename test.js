let ProxyVerifier = require('proxy-verifier');

let proxy = {
 	ipAddress: '112.115.57.20',
	port: 3128,
	protocol: 'http'
};

ProxyVerifier.testAll(proxy, function(error, result) {
	if (error) {
        	console.log('proxyVerifiier error ', error);
	} else {
        	console.log(JSON.stringify(result));
		// {"anonymityLevel":"anonymous","tunnel":{"ok":true},"protocols":{"http":{"ok":true}}}
	}
});
