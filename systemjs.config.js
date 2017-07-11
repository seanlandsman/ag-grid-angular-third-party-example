(function (global) {
    System.config({
            defaultJSExtensions: true,
            paths: {
                // paths serve as alias
                'npm:': 'node_modules/'
            },
            map: {
                'app': 'app',
                '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
                '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
                '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
                '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
                '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
                '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
                '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
                '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
                // other libraries
                'rxjs': 'npm:rxjs',
                // ag libraries
                'ag-grid-angular': 'npm:ag-grid-angular',
                'ag-grid': 'npm:ag-grid',
                // material design
                '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
                // ng2 bootstrap
                'ngx-bootstrap': 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.js'
            },
            packages: {
                app: {
                    main: './boot.js'
                },
                'ag-grid': {
                    main: 'main.js'
                },
                'rxjs': {main: 'index'}
            }
        }
    );
})(this);