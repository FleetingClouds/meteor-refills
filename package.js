Package.describe({
    summary: "Refills -  Prepackaged patterns and components, built on top of Bourbon, Bitters and Neat",
    version: "0.0.1",
    name: "bbfc:refills",
    git: "https://github.com/barrabinfc/meteor-refills"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@0.9.0");
    api.use(['fourseven:scss@0.9.5','ciara:bourbon@3.1.8', 
             'ciara:neat@1.5.0','ciara:bitters@0.10.0',
             'jquery@1.0.0'], ['client', 'server']);

    api.add_files( [
                     'refills/modal.scss','refills/video.scss',
                     'refills/dropdown.scss'
                    ],
                   'server');

    api.add_files( ['refills/dropdown.js',], 'client' )
});
