var config = {
    style: 'mapbox://styles/alanacg/cltqbay5j02m201ph5ph9a4s9',
    accessToken: 'pk.eyJ1IjoiYWxhbmFjZyIsImEiOiJjbHI2dTdmaTgyYmJkMmtteWg4aTFyYjd0In0.4egkQvHeJNw_VNBgcSEZmg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Resource Extractivism and the Lasting Impacts of Colonialism in the DRC',
    subtitle: 'Storytelling on the Democratic Republic of the Congo, influenced by King Leopolds Ghost and Cobalt Red',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [{
            id: 'opener-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Colonial History of the DRC',
            image: 'images/slavevoyage.jpg',
            description: '- enslavement began in 1300/1400s - beginning of European presence in the region <br> - Ivory trade increased in 1800s, port at mouth of Congo River near Boma becomes important',
            location: {
                center: [12.33735, -6.02134],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mapbox-satellite',
                     opacity: 0,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'mapbox-satellite',
                     opacity: 1
                 },
            ]
        },
        //{
                  //   layer: 'country-boundaries (1)',
                   //  opacity: 0,
                 //}
        {
            id: 'slug-style-id',
            alignment: 'left', //options are left, right, center, full
            hidden: false, //can hide panel with this
            title: 'Mining Provinces',
            image: 'images/source.png',
            description: 'Shapefile of the mining provinces in Southeast DRC',
            //text for description is html- can rely on that for extra formatting
            location: {
                center: [26.197,-3.936],
                zoom: 4.92,    //how close/far you are from map content
                pitch: 10,    //angle from azimuth to view the map at (0 is straight on)
                bearing: 0    //offset from 0°N map is viewed from
            },
            mapAnimation: 'flyTo',    //more options in mapbox/storytelling repo
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            rotateAnimation: false,
            callback: '', //add additional js function for this key
            onChapterEnter: [
                 {
                     layer: 'country-boundaries (1)',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'country-boundaries (1)',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier', //need unique id for each chapter
            alignment: 'right',
            hidden: false,
            title: 'Mining in Tenke Fungurume',
            //image: 'images/target.svg',
            description: 'Tenke and Fungurume were each once separate cities, until heterogenite ores were discovered. Gecamines promised public support to offset displacement for creation of Fungurume mines, but that was not carried over into future mining leadership.',
            location: {
                center: [26.221, -10.628],
                zoom: 11.59,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'temporary-places',
                opacity: 1
                }
            ],
            onChapterExit: [
                //{
                //layer: 'temporary-places',
                //opacity: 0
                //}
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mines at Tilwezembe',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [25.702,-10.787],
                zoom: 14.49,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'full',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    //Add any new chapters above this line
        
    //Do not edit the two brackets below this line
    ]
};
