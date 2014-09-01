Package.describe({
    summary: "Refills -  Prepackaged patterns and components, built on top of Bourbon, Bitters and Neat"
    version: "0.1",
    name: "bbfc:refills",
    git: "https://github.com/bbfc/"
});

Package.on_use(function (api) {
    api.use(['fourseven:scss','ciara:bourbon'], ['client', 'server']);

    api.add_files( ['modal.scss','video.scss'],'server')
    //dont need to add any files to the client, they're there just so the package will build
});
