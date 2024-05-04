var config = {
    style: 'mapbox://styles/alanacg/cltqbay5j02m201ph5ph9a4s9',
    accessToken: 'pk.eyJ1IjoiYWxhbmFjZyIsImEiOiJjbHI2dTdmaTgyYmJkMmtteWg4aTFyYjd0In0.4egkQvHeJNw_VNBgcSEZmg',
    showMarkers: false,
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
    byline: 'By Alana Ginsburg and Kurt Alsheimer',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [{
            id: 'opener-chapter',
            alignment: 'full',
            hidden: false,
            title: 'Colonial History of the DRC and the Slave Trade',
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
            onChapterEnter: [],
            onChapterExit: [
                 {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 }
            ]
        },
        {
            id: 'resources',
            alignment: 'left',
            hidden: false,
            title: 'Early Resource Extraction in the Congo',
            image: 'images/congo_ivory.jpg',
            description: 'Figure: Display of ivory for a single export shipment. Main source of ivory: the Lomami Concession Company (Kisangani, early 1900s). \n Arguably one of the most naturally rich regions of the world, the Congo has been exploited by powers from the Global North since the beginnings of the Age of Exploration (1300-1400). Beginning with the Portuguese, European traders ventured through the jungles and captured native people to be sent along the Middle Passage for enslavement in the Americas. The port at Boma, at the mouth of the Congo River, was used for this and as an export site for the ivory trade, which faced an increased demand in the 1800s. Many elephants resided in the eastern regions of the Congo, and further east in Tanzania, that were captured and then traded through this port.',
            location: {
                center: [12.735,-5.830],
                zoom: 8.96,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                        layer: 'place-label',
                        opacity: 1,
                    }
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'leopold',
            alignment: 'right',
            hidden: false,
            title: 'King Leopold II and the Congo Free State',
            image: 'images/freestate.png',
            description: 'King Leopold II claims the region as his personal territory following major expeditions by European explorers. During the Berlin Conference of 1885, the major powers of Europe granted King Leopold II permission to establish a colony named Congo Free State in the region. King Leopold II owned the colony until he reached his deathbed in 1908. Once the Belgians took control, they conned locals into unfairly giving up their sovereignty, goods and lands to soldiers known as the Force Publique who ran trade in the region.',
            location: {
                center: [26.197,-3.936],
                zoom: 4.92,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 },
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'more-resource',
            alignment: 'left',
            hidden: false,
            title: 'The Rubber Trade and Movements for Congo Reform',
            image: '',
            description: 'Economic pressure on Congo Free State was relieved with the invention of the rubber tire, spurred along by the invention of the automobile. ',
            location: {
                center: [25.641,0.337],
                zoom: 6.15,
                pitch: 0,
                bearing: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                 },
                
            ],
            onChapterExit: [
                
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
                center: [29.221,-1.662],
                zoom: 11.8,
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
