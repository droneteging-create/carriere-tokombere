var wms_layers = [];


        var lyr_GoogleSat_0 = new ol.layer.Tile({
            'title': 'Google Sat',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Composantecarrire_1 = new ol.format.GeoJSON();
var features_Composantecarrire_1 = format_Composantecarrire_1.readFeatures(json_Composantecarrire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composantecarrire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Composantecarrire_1.addFeatures(features_Composantecarrire_1);
var lyr_Composantecarrire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Composantecarrire_1, 
                style: style_Composantecarrire_1,
                popuplayertitle: 'Composante carrière',
                interactive: true,
    title: 'Composante carrière<br />\
    <img src="styles/legend/Composantecarrire_1_0.png" /> Carriere<br />\
    <img src="styles/legend/Composantecarrire_1_1.png" /> Perimètre sécurité<br />' });
var format_Frontdetaille_2 = new ol.format.GeoJSON();
var features_Frontdetaille_2 = format_Frontdetaille_2.readFeatures(json_Frontdetaille_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frontdetaille_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frontdetaille_2.addFeatures(features_Frontdetaille_2);
var lyr_Frontdetaille_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frontdetaille_2, 
                style: style_Frontdetaille_2,
                popuplayertitle: 'Front de taille',
                interactive: true,
                title: '<img src="styles/legend/Frontdetaille_2.png" /> Front de taille'
            });
var format_Donneecarriere_3 = new ol.format.GeoJSON();
var features_Donneecarriere_3 = format_Donneecarriere_3.readFeatures(json_Donneecarriere_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Donneecarriere_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Donneecarriere_3.addFeatures(features_Donneecarriere_3);
var lyr_Donneecarriere_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Donneecarriere_3, 
                style: style_Donneecarriere_3,
                popuplayertitle: 'Donnee carriere',
                interactive: true,
    title: 'Donnee carriere<br />\
    <img src="styles/legend/Donneecarriere_3_0.png" /> Champs<br />\
    <img src="styles/legend/Donneecarriere_3_1.png" /> Chefferie<br />\
    <img src="styles/legend/Donneecarriere_3_2.png" /> front de taille<br />\
    <img src="styles/legend/Donneecarriere_3_3.png" /> Reliques ancestrales<br />\
    <img src="styles/legend/Donneecarriere_3_4.png" /> Sites cultuels<br />\
    <img src="styles/legend/Donneecarriere_3_5.png" /> Vulnerabilité<br />\
    <img src="styles/legend/Donneecarriere_3_6.png" /> Maison fissurée<br />' });

lyr_GoogleSat_0.setVisible(true);lyr_Composantecarrire_1.setVisible(true);lyr_Frontdetaille_2.setVisible(true);lyr_Donneecarriere_3.setVisible(true);
var layersList = [lyr_GoogleSat_0,lyr_Composantecarrire_1,lyr_Frontdetaille_2,lyr_Donneecarriere_3];
lyr_Composantecarrire_1.set('fieldAliases', {'Id': 'Id', 'nom': 'nom', });
lyr_Frontdetaille_2.set('fieldAliases', {'id': 'id', });
lyr_Donneecarriere_3.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'TYPE': 'TYPE', 'DESCRIPTIO': 'DESCRIPTIO', 'TIMESTAMP': 'TIMESTAMP', 'BEGIN': 'BEGIN', 'END': 'END', 'ALTITUDEMO': 'ALTITUDEMO', 'TESSELLATE': 'TESSELLATE', 'EXTRUDE': 'EXTRUDE', 'VISIBILITY': 'VISIBILITY', 'DRAWORDER': 'DRAWORDER', 'ICON': 'ICON', 'ACCURACY': 'ACCURACY', 'PROVIDER': 'PROVIDER', 'layer': 'layer', 'path': 'path', });
lyr_Composantecarrire_1.set('fieldImages', {'Id': '', 'nom': '', });
lyr_Frontdetaille_2.set('fieldImages', {'id': '', });
lyr_Donneecarriere_3.set('fieldImages', {'ID': '', 'NAME': '', 'TYPE': '', 'DESCRIPTIO': '', 'TIMESTAMP': '', 'BEGIN': '', 'END': '', 'ALTITUDEMO': '', 'TESSELLATE': '', 'EXTRUDE': '', 'VISIBILITY': '', 'DRAWORDER': '', 'ICON': '', 'ACCURACY': '', 'PROVIDER': '', 'layer': '', 'path': '', });
lyr_Composantecarrire_1.set('fieldLabels', {'Id': 'no label', 'nom': 'no label', });
lyr_Frontdetaille_2.set('fieldLabels', {'id': 'no label', });
lyr_Donneecarriere_3.set('fieldLabels', {'ID': 'inline label - always visible', 'NAME': 'no label', 'TYPE': 'no label', 'DESCRIPTIO': 'no label', 'TIMESTAMP': 'no label', 'BEGIN': 'inline label - always visible', 'END': 'no label', 'ALTITUDEMO': 'no label', 'TESSELLATE': 'no label', 'EXTRUDE': 'no label', 'VISIBILITY': 'no label', 'DRAWORDER': 'no label', 'ICON': 'no label', 'ACCURACY': 'no label', 'PROVIDER': 'no label', 'layer': 'header label - always visible', 'path': 'no label', });
lyr_Donneecarriere_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});