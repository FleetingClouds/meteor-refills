Package.describe({
    summary: "Refills - Components and patterns built with Bourbon, Neat and Bitters from thoughtbot",
    version: "0.0.1",
    name: "warehouseman:meteor-refills",
    git: "https://github.com/warehouseman/meteor-refills"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@1.0.2");
    api.use(
        [
            'fourseven:scss@1.0.0'
          , 'wolves:bitters@1.0.0'
          , 'wolves:bourbon@1.0.0'
          , 'wolves:neat@1.0.0'
          , 'jquery@1.11.3_2']
      , [ 'client'
        , 'server'
        ]
    );

    api.add_files(
        [
            'client/accordion/accordion.scss'
        ]
      , 'client'
    );

    api.add_files(
        [
            'client/accordion/accordion.js'
        ]
      , 'client', {isAsset: true} 
    );

});
