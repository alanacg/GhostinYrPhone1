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
    chapters: [
       {
            id: 'opener-chapter',
            alignment: 'full',
            hidden: false,
            title: 'Colonial History of the DRC and the Slave Trade',
            image: 'images/slavevoyage.jpg',
            description: '<i> Figure: Map of Slave Voyages Database from Emory University. </i> <br> In 1482, modern Europeans first began their contact with the peoples of the present-day region known as Democratic Republic of the Congo. They entered at the mouth of the yellow Congo River, one of the worlds longest rivers that passes through the worlds second largest rainforest. This was significant, as the Europeans used their advanced technology, such as rifles to forcibly kidnap locals from their homes to become slaves in the New World. Ports along this river and nearby coast witnessed some of the cruelest human treatment as a major step along the Middle Passage.',
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
            description: ' <i> Figure: Display of ivory for a single export shipment. Main source of ivory: the Lomami Concession Company (Kisangani, early 1900s). </i> <br> Arguably one of the most naturally rich regions of the world, the Congo has been exploited by powers from the Global North since the beginnings of the Age of Exploration (1300-1400). Beginning with the Portuguese, European traders ventured through the jungles and captured native people to be sent along the Middle Passage for enslavement in the Americas. The port at Boma, at the mouth of the Congo River, was used for this and as an export site for the ivory trade, which faced an increased demand in the 1800s. Many elephants resided in the eastern regions of the Congo, and further east in Tanzania, that were captured and then traded through this port.',
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
            description: '<i> Map of territory occupied by Congo Free State c. 1887 (Berry/Illinois U) </i> <br> King Leopold II claims the region as his personal territory following major expeditions by European explorers. During the Berlin Conference of 1885, the major powers of Europe granted King Leopold II permission to establish a colony named Congo Free State in the region. King Leopold II owned the colony until he reached his deathbed in 1908. Once the Belgians took control, they conned locals into unfairly giving up their sovereignty, goods and lands to soldiers known as the Force Publique who ran trade in the region.',
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
            description: 'Economic pressure on Congo Free State was relieved with the invention of the rubber tire, spurred along by the invention of the automobile.  Rubber could be extracted from wild vines found in the depths of the Congo Basin rainforest, after multiple concessions were made of the region to various European companies, the Force Publique increased their militant presence in the lives of the local Congolese. The militia would kidnap women and children of villages to force the men to extract rubber for them. When there were disturbances, the Force Publique would cut off hands, feet, and sometimes heads of practically anyone they could get their hands on to bring back as proof to their commanders that the issue had been handled. <br> Figures such as Roger Casement and William Henry Sheppard, who served as state officers and missionaries in the Congo, became aware of these atrocities and helped to alert the world. This was the first modern human rights campaign, and was led by an organization called the Congo Reform Association.',
            //<i> images of rubber vines, ed morel, roger casement </i> 
            location: {
                center: [25.641,0.337],
                zoom: 6.39,
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
        {
            id: 'drc-independence',
            alignment: 'right',
            hidden: false,
            title: 'Independence and the Assasination of Lumumba',
            image: 'images/lumumba_speech.jpeg',
            description: '<i> Lumumba gives a speech after he is elected first Prime Minister of the DRC. </i> <br> The Democratic Republic of the Congo (DRC) was granted independence from Belgium in 1963, when the citizens held their first, and only, free election. Patrice Lumumba was elected, and began to peacefully and equitably transfer the country towards independence. After expressing interest in socialist systems via messaging with the USSR, Western powers such as the US and Belgium grew concerned about Lumumba. They executed an assasination and enabled Joseph Mobutu, a known dictator, to become president next. <br> Leopoldville --> Kinshasa',
            location: {
                center: [15.458,-4.304],
                zoom: 10.17,
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
            id: 'slug-style-id',
            alignment: 'left', //options are left, right, center, full
            hidden: false, //can hide panel with this
            title: 'Mining Provinces - Demand for Cobalt',
            image: '',
            description: 'In modern times, the corrupt government of the DRC has left the countrys people vulnerable to two major threats: armed militias seeking ownership of the region and the foreign race for more cobalt minerals to meet the growing demand created by the transition to electrification. The blue region represents the center of the mining activities in the Southeast DRC. The yellow regions are where there is highest risk of violent conflict due to M23 militia presence. <br>The world is continuing to pivot away from fossil fuel towards clean energy. This move to clean energy has fueled an urgency to mine cobalt for the lithium batteries used in our cell phones, other personal electronics (such as tools and appliances) and electric vehicles. Cobalt was discovered in the Belgian Congo in 1914. The element has strong magnetism, hardness and   resistance to corrosion and heat damage. It has many industrial uses. About 1/2 of cobalt mined is being used in rechargeable lithium batteries. The “cobalt boom” began a decade ago to meet the needs of these personal electronics. Demand is now being driven by the electric vehicle market and has tripled in the last decade.',
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
                     layer: 'rd-congo-admin-4-provinces-1apw5y',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'rd-congo-admin-4-provinces-1apw5y',
                     opacity: 0.25
                 }
            ]
        },
        {
            id: 'second-identifier', //need unique id for each chapter
            alignment: 'right',
            hidden: false,
            title: 'Cobalt supply chain and displacement - Mining in Tenke Fungurume',
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
            alignment: 'left',
            hidden: false,
            title: 'Cobalt Impacts on Local Populations and Hazardous Conditions- Mines at Tilwezembe',
            image: 'images/lakemalodig.jpg',
            description: ' Although the mining region is known as one of the richest regions in the country, Congolese cobalt miners face a reality where modern day slavery is the norm. Safety violations are rampant, as these sites are nearly impossible to regulate. Tunnel collapses have been known to kill 50 people at once, and leave the few survivors severely injured. Cobalt is also very damaging via radiation to human and environmental health. Cobalt production causes significant pollution to the water and soil that has devastated the landscape. The pollution  (acids and wastes from the mines) kills crops primarily through soil damage.',
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
            alignment: 'left',
            hidden: false,
            title: 'Current conflict, M23, and DRC humanitarian capitol',
            image: 'images/unfpa_mayindu.jpg',
            description: '<i> Figure: UNFPA Buyenga IDP camp </i> Modern human rights issues and connections to Rwandan genocide. 6 million 1996-2007',
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
