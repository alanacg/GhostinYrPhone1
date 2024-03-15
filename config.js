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
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left', //options are left, right, center, full
            hidden: false, //can hide panel with this
            title: 'Mining Provinces',
            image: 'images/source.png',
            description: 'Shapefile of the mining provinces in Southeast DRC',
            //text for description is html- can rely on that for extra formatting
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,    //how close/far you are from map content
                pitch: 60,    //angle from azimuth to view the map at (0 is straight on)
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier', //need unique id for each chapter
            alignment: 'right',
            hidden: false,
            title: 'Mining in Tenke Fungurume',
            image: 'images/target.svg',
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
                {
                layer: 'temporary-places',
                opacity: 0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
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
