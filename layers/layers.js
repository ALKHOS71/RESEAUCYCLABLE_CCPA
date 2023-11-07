var wms_layers = [];


    var projection_Photographiesariennes_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Photographiesariennes_0 = projection_Photographiesariennes_0.getExtent();
    var size_Photographiesariennes_0 = ol.extent.getWidth(projectionExtent_Photographiesariennes_0) / 256;
    var resolutions_Photographiesariennes_0 = new Array(14);
    var matrixIds_Photographiesariennes_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Photographiesariennes_0[z] = size_Photographiesariennes_0 / Math.pow(2, z);
        matrixIds_Photographiesariennes_0[z] = z;
    }
    var lyr_Photographiesariennes_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://wxs.ign.fr/pratique/geoportail/wmts?SERVICE=WMTS&REQUEST=GetCapabilities",
    attributions: ' ',
                                "layer": "ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Photographiesariennes_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Photographiesariennes_0),
                resolutions: resolutions_Photographiesariennes_0,
                matrixIds: matrixIds_Photographiesariennes_0
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Photographies aériennes",
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LIAISONSCYCLABLESPOURETUDE_2 = new ol.format.GeoJSON();
var features_LIAISONSCYCLABLESPOURETUDE_2 = format_LIAISONSCYCLABLESPOURETUDE_2.readFeatures(json_LIAISONSCYCLABLESPOURETUDE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIAISONSCYCLABLESPOURETUDE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIAISONSCYCLABLESPOURETUDE_2.addFeatures(features_LIAISONSCYCLABLESPOURETUDE_2);
var lyr_LIAISONSCYCLABLESPOURETUDE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIAISONSCYCLABLESPOURETUDE_2, 
                style: style_LIAISONSCYCLABLESPOURETUDE_2,
                interactive: false,
    title: 'LIAISONS CYCLABLES POUR ETUDE<br />\
    <img src="styles/legend/LIAISONSCYCLABLESPOURETUDE_2_0.png" /> EXISTANT<br />\
    <img src="styles/legend/LIAISONSCYCLABLESPOURETUDE_2_1.png" /> PRIORITE 1<br />\
    <img src="styles/legend/LIAISONSCYCLABLESPOURETUDE_2_2.png" /> PRIORITE 2<br />\
    <img src="styles/legend/LIAISONSCYCLABLESPOURETUDE_2_3.png" /> <br />'
        });

lyr_Photographiesariennes_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LIAISONSCYCLABLESPOURETUDE_2.setVisible(true);
var layersList = [lyr_Photographiesariennes_0,lyr_OpenStreetMap_1,lyr_LIAISONSCYCLABLESPOURETUDE_2];
lyr_LIAISONSCYCLABLESPOURETUDE_2.set('fieldAliases', {'Nom': 'Nom', 'Priorite': 'Priorite', 'No_Liaison': 'No_Liaison', 'UTILITAIRE': 'UTILITAIRE', 'LOISIR': 'LOISIR', 'TOURISME': 'TOURISME', 'ETAT': 'ETAT', 'VOCATION': 'VOCATION', 'LINEAIRE': 'LINEAIRE', });
lyr_LIAISONSCYCLABLESPOURETUDE_2.set('fieldImages', {'Nom': 'TextEdit', 'Priorite': 'TextEdit', 'No_Liaison': 'TextEdit', 'UTILITAIRE': 'TextEdit', 'LOISIR': 'TextEdit', 'TOURISME': 'TextEdit', 'ETAT': 'TextEdit', 'VOCATION': 'TextEdit', 'LINEAIRE': 'TextEdit', });
lyr_LIAISONSCYCLABLESPOURETUDE_2.set('fieldLabels', {'Nom': 'no label', 'Priorite': 'no label', 'No_Liaison': 'no label', 'UTILITAIRE': 'no label', 'LOISIR': 'no label', 'TOURISME': 'no label', 'ETAT': 'no label', 'VOCATION': 'no label', 'LINEAIRE': 'no label', });
lyr_LIAISONSCYCLABLESPOURETUDE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});