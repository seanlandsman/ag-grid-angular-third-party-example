(function (global) {
    System.config({
            defaultJSExtensions: true,
            map: {
                'app': 'app',
                // angular bundles
                '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
                '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
                '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
                '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
                '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
                '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
                // other libraries
                'rxjs': 'node_modules/rxjs',
                'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
                // ag libraries
                'ag-grid-angular': 'node_modules/ag-grid-angular',
                'ag-grid': 'node_modules/ag-grid',
                // ng2 bootstrap
                'ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
                // material design
                '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.min.js',
                '@angular/animations/browser':'node_modules/@angular/animations/bundles/animations-browser.umd.js',
                '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
                '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js'
            },
            packages: {
                app: {
                    main: './boot.js'
                },
                'ag-grid': {
                    main: 'main.js'
                }
            }
        }
    );
})(this);