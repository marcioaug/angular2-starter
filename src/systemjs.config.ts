declare var System: any;

var map: any = {
    'app': 'src/app',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
};

var packages: any = {
    'app': { main: 'index.js', defaultExtension: 'js'},
    'rxjs': { main: 'index.js', defaultExtension: 'js'},
};

const angularPackages: string[] = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
];

angularPackages.forEach( (pack: string) =>
    packages[`@angular/${pack}`] = { main: 'index.js', defaultExtension: 'js'}
);

System.config({ map, packages });
