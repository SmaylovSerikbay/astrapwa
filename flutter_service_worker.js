'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "89c01e46077e16b9f2bbceece8c55c64",
".git/config": "97aa014a793672c2352add59f789c4a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ca64e3d3612e9c74c6aed245c02ea59c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f732f07d1cfebf48d226a3716007082",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d094764b19899e19a684a91880dbca0",
".git/logs/refs/heads/main": "c530ab9fbe29a36b1372076aae282108",
".git/logs/refs/heads/master": "b10f49207dcabb69d5d3d8f2649d279f",
".git/logs/refs/remotes/origin/main": "022ff3273fca5d127586fc46d9da6947",
".git/logs/refs/remotes/origin/master": "ea562a5355bfb249fd853a5797191db0",
".git/objects/0b/0df5b11c309aa0b3afb4d3ea83278f3decf04f": "f37e15dca822c125797c188e468fddde",
".git/objects/0b/5d6458a72202b3d4dc9a5ecf4cb5c8ddfeea4b": "1e66cda9aa55b727149e2924d0c2f180",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0f/ebb0db8ec185c7a6bd5e5f7af1a236597e0a88": "2cc1d8412104ea221b67166f445a210e",
".git/objects/1a/b9a5e2ee75f29329aec021f7797b886c0869a1": "92bac4eb945f007f8b555fe3be60031f",
".git/objects/1b/062d8a9fad0c89f4995e80da1d06cde43f7ed0": "7bf8a7766c80bae608c7f02856e1bb0e",
".git/objects/1b/dca237824f59912b1f0c84291aefd32dcc5441": "2757d375e2278e7bbc26a2e2244909a5",
".git/objects/1c/9210625cf34942f4639a3030f8da1f4966e679": "9c26191eae21a6876a6c6bb3332dae75",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/bd5dc2837038b3e0df0cf3d9d6b265dfe04475": "78cec55d0822e4039d85164715c15595",
".git/objects/1e/c18f3d2b2ac2205944920adeb1227afc3fccde": "61f47be3e6d7941361ec5fbf1ab6b1fa",
".git/objects/20/cc26cbcbcc546e4d628f839cd57de7b9bcf27a": "29f317a8d10335aff24ff2cf56162095",
".git/objects/21/5ee70b1ec21e7e19a10242a47277721eff27f9": "53c02ff71e136ceb833ee130222bb17c",
".git/objects/23/844a05f3a23b5920fa6f77fb7c00af7ce60c6c": "a8b9af6110eb12631a1b843ac038ffe0",
".git/objects/27/46718198df104ef7e2104bac826986acea516f": "9603728bd7eee0af37d344f138a4b5fc",
".git/objects/2b/af2f83aa71dd81cc5b16161caeadf7e052f57f": "6d380bf56547c9617212b77d3e6c187b",
".git/objects/2d/559f69c7cf66931ec9a726a17d0da4d4d514ad": "4118000032958dc0b84a8c1b6ddbeecc",
".git/objects/2e/42afb70ccf04cd606ee90aa801952fccdb5911": "7fef2fce68b8230431c74ca632b29d68",
".git/objects/33/987e488f4fef0b8e00ad23d8404c046bebc3d1": "f37acce8f580eb0a425ac69142fe27f9",
".git/objects/34/18efd2637d3cbe1714bc257780ff7004c62a03": "af0647dd84bfcd39e6adcff91e1e9dab",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/f20e8026115bd443ca2d844f89ab0cd91ac431": "6e020696e85e887411090db70ac13394",
".git/objects/3e/b8d4478d55c6f6065406bbd889356f34a91384": "f4ba3c853e3e975680a2d57c6dd12fab",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/08190204cccc5e6bb8da5896cc9123dd6e27af": "a79761432a2b82e5a5b6e99cee3e6aeb",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/52/e8dbe2c768cf520545c5ef6a7cb0c5a38d5479": "4ece31d2826d400e5832b9835eb95ffa",
".git/objects/56/06349c2fe3e8e0a740744963a6629a9de73bf9": "9257f7e045e8189546828a231ac32402",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/511ad467646bc39d2df525a2cc199d1fef2f8d": "54028b58b14c187b29c6bf44fe00b575",
".git/objects/5d/a81bde75caa42c9b8e8d61f9593d7a417f8328": "cb455a678a1c6b8af8bb851093e35446",
".git/objects/5e/7ba54c13701708f2b2c456c8b0b0aed57956a0": "763acab4cfb3fe136ecf298926f1ba1c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/18f3bc6b66bfe967008923343a54308f229ed8": "341e082ed590bc0cb704a72fdd78945d",
".git/objects/6e/08aacbdcd222dc3d9e99a5aa9f523f44e52ce2": "22940f6074e097b916b07c03f234cadb",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/75/13ab540006c45a7a901252aa048c54984fa17d": "5da3e9c0aa440272b19a517d2b39eeeb",
".git/objects/77/a6c51e4d614f7068a4ce269e05f21bfd72ff56": "18b7281b3295608e4b8624cf75daf3eb",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/41babbc59be9cb9775bc603e48cc4070ba7bf0": "e5184ce6e02aa69c90a08db3893f5262",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d5fd897d8871623789791cff0bb152d25c9caa": "58157cdbd4b821632f5fbefcab96c8e7",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/a6fe755b82d19c6b7c1d61aabedd6c4009ae20": "47e66263e40c0f817b6333fc556eef90",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a45be5b8673466ad8ab968dd0a8e922ff0e2c1": "3aa60cc1447053a41a9aad468b550943",
".git/objects/8f/b0731eaf8a8641538c41bc7cb735cffe0f4e72": "871fd6080cbdb158d1699ec71a2ee7e9",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/ba988e06838168f5cc80a77e9c9c80ed396b34": "cf02096499e778f39b67ca36d697f75a",
".git/objects/98/db9a99503ebf5da138e71ef48e364cfcf8eae5": "cefb5294b345f9ba68e087dc19c9df8f",
".git/objects/99/f067360e237817398a7042b25b8d0c4080671d": "ff9192b702fd29c1cf59a081cd44c953",
".git/objects/9b/b1c4c2dd3a7254f8589cfd95690fe4d224bc14": "8be8310f00100375acc05655dd4069f6",
".git/objects/9f/d484ffedd1552ff162b4cf53328b228bbc822f": "e1bc1c6ecd6fa072d560be3d44592b29",
".git/objects/a2/837efc89689497bd391d8b9dfb3890aff951ce": "1e367d58dac715b4f9c8e16c1240d9e2",
".git/objects/a4/020e60a8cf863123f29a5b878f241c341918f7": "33fdf1b683b60831b01f50eb24783a33",
".git/objects/a5/30c41638b79b8219514f644ce6114eac1e8572": "9fb16bfe63f507fca73da5f6552214a5",
".git/objects/a5/c92b8f071374d7963ab85fef64fbdc0b64d540": "dee4969c703cae965efc8f74af357cb7",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/e366c2b47293d9bb4bf3a57c535c6adcc78697": "82f1d9dfcbf26bff74d173e4f9d101de",
".git/objects/a8/7753351bccdd8c5aad037be4aabea0f65785b7": "0fa3bb0828be6a9c543cc9675ce31985",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/bf9a798941331c2efdd3bd9b45c5ee844d63e0": "50e828da93864708c30a10e42a2b3f93",
".git/objects/aa/390b873fe8b43c160041d7baad47ca9e6eaef0": "2de8d629502382adad00aeeb72184461",
".git/objects/aa/a253d500d940e6a3aef409beb35a0a187fe777": "69fd88dc6d7f000b2dca7351dd0d045f",
".git/objects/b2/e00da8b0e5fd34a8dfc02f340723888d91c653": "eae159a3c782fed95b5819f7799849ed",
".git/objects/b4/94e6a86414ae484093489146bfe9369c12eff0": "0841db9afbc16490973847e3b7fc5a50",
".git/objects/b5/28bff49469dfdc2527fb3bf44a0c845a877832": "0b38d056f1d4a2e20367e5b412bfd9c5",
".git/objects/b5/510ff2dac9ad8e2a56808888a2719cf5129db0": "1e273772256380050c21521bf960c93f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e696aa3204a582647177857bd9f39b6f8a4e7": "711cdaef67b0df423d7d96b07f2cdc65",
".git/objects/c0/0fdd4e3ce58dfe1175ae3f252677d43a8bcc19": "61b170162f76fdd9b4cb5eedeb6a0027",
".git/objects/c6/fe852d460901c3551a93760f932cc050ebaaf8": "d9041c70e0d4a43ca169bd75e84f11ee",
".git/objects/c7/3f68df22b708fc7dd8d0b9b68c8937118795cc": "7ea80c2affb3dd3e0620bbe000754206",
".git/objects/cb/4245e8952eeaf61ac70636664e1a0d69717ed7": "91f6414e1212195559715188b71ef06c",
".git/objects/cd/fabd61246a425cf1d123c5fddc35b254c8be26": "05a662c55f9d0eaa78238e3ca8cc9484",
".git/objects/ce/752a8f20ce5142fa1ac3b80fb5fef2272b1875": "e65d7c16ca10f5c42e7edbd43bd4d265",
".git/objects/d3/1b8ccc6682c8039125652a616b941ddf20849f": "0d9d4744865f20189154814ee67b3eaf",
".git/objects/d4/0cee89d4cf79f15bbefb859d29761305bd37b7": "9bdd9f5cd3ee4a6e1b7f19d0dc024d6b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/7372c6aedb73ec1f06f726e4d7204e444e93bd": "b4b6badd21851aceb841464869f57224",
".git/objects/d6/66143ab19b662c33c5e70f02e798f23bf3f9d0": "7ea7c74c3dd9669c00304bdf880aadcf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/bed3feb0ebb9f7338c2114abee6f02e6c8d3fe": "db8a8966bc68cf7ff101cd1b0622ac1e",
".git/objects/db/9d8a817ac07d6000caa14d3c01ca671e3f31e9": "af54732330348f59e651f8d7c201a290",
".git/objects/df/137b457281f1b4090358d48d07d7c621088c16": "82a790dee8168e8a90bfe11cbb5f7663",
".git/objects/df/b9023aa4358dd09e33ef15b635329218900ee1": "6cd4534ec5576073c504985de6dd8f16",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/bc11485b1b20d38443869ad375c06c23373aff": "1e291f9114a89234c470be788bbab458",
".git/objects/e3/43ecc9e682622cd005c471d260f9f222809cf5": "ab68ec0d944e25440be2845a229e3bcc",
".git/objects/e5/340d65bb7252860bd603718edf36c0b2c7014e": "5cefe91ec07815f1af2a63eafaa6b7a3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b397d3f8733bb57a2ebafe08050e6deccbc55d": "0a5eb12746475577a93b7c1008fdd343",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/c1df5181233d1b7782ab1c90ff93ab8337b70e": "35600deea292cccc010454f300635be2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/2f6792ee75a770c4a8da656dfb01b3f1dc7d78": "a94ddd8debb6e49352fd76a658549573",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/e2ee32ac76005e0761c14209f5cf87e24dec1e": "69d1209a931d3fb684ec637d3613c687",
".git/objects/f6/4c38cba778e493d1eb0ce8ee1c0361ab195b46": "344a3f1774a1c89d38e40015462798f6",
".git/objects/f8/94025d869a1e224af7165423166aedb3abb1e5": "635b51dcd94d02b1f5a5f871664e75c3",
".git/ORIG_HEAD": "796d1efe0977b506ea5cd4b301eb6cce",
".git/refs/heads/main": "dc97153b07c746a4a7bcddad4ac70e52",
".git/refs/heads/master": "796d1efe0977b506ea5cd4b301eb6cce",
".git/refs/remotes/origin/main": "dc97153b07c746a4a7bcddad4ac70e52",
".git/refs/remotes/origin/master": "796d1efe0977b506ea5cd4b301eb6cce",
"assets/AssetManifest.bin": "a53491ba33870e68dce7c820b0867cda",
"assets/AssetManifest.bin.json": "bb5daa477ab092a8c1a34a960dc05d3a",
"assets/AssetManifest.json": "96d47c011a5a5aa71f9631b60049eb4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e4f643c6e642bf7e62ee7b7fa23412a8",
"assets/NOTICES": "ddeb9a3a520a9eb579c6d5703fd531ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1dbedb00a5a5eb09c569fbebb0bb61f4",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "3bed6fa017e9e171caeaaea0febbb909",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "52cf00b3ded94b40cbcaebae58a829fd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "433cdda4f520f51785de3633337149f3",
"/": "433cdda4f520f51785de3633337149f3",
"main.dart.js": "f14e795b1c42fe39f703232133d1a14d",
"manifest.json": "df818a8cd8ad9b29b1f830ccf634a958",
"version.json": "83da9130ecfece3ca365a2d01e054754"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
