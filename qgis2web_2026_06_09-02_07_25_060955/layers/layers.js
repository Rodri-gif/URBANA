ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:8908").setExtent([490631.553968, 1098332.156250, 490804.571032, 1098425.343750]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Limitedelparquelimite_parque_1 = new ol.format.GeoJSON();
var features_Limitedelparquelimite_parque_1 = format_Limitedelparquelimite_parque_1.readFeatures(json_Limitedelparquelimite_parque_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_Limitedelparquelimite_parque_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitedelparquelimite_parque_1.addFeatures(features_Limitedelparquelimite_parque_1);
var lyr_Limitedelparquelimite_parque_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitedelparquelimite_parque_1, 
                style: style_Limitedelparquelimite_parque_1,
                popuplayertitle: 'Limite del parque — limite_parque',
                interactive: true,
                title: '<img src="styles/legend/Limitedelparquelimite_parque_1.png" /> Limite del parque — limite_parque'
            });
var format_Puntos_2 = new ol.format.GeoJSON();
var features_Puntos_2 = format_Puntos_2.readFeatures(json_Puntos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_Puntos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_2.addFeatures(features_Puntos_2);
var lyr_Puntos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_2, 
                style: style_Puntos_2,
                popuplayertitle: 'Puntos',
                interactive: true,
    title: 'Puntos<br />\
    <img src="styles/legend/Puntos_2_0.png" /> Comercio<br />\
    <img src="styles/legend/Puntos_2_1.png" /> Recreación<br />\
    <img src="styles/legend/Puntos_2_2.png" /> Servicios<br />\
    <img src="styles/legend/Puntos_2_3.png" /> <br />' });
var format_recorrido1rutas_de_recorrido_3 = new ol.format.GeoJSON();
var features_recorrido1rutas_de_recorrido_3 = format_recorrido1rutas_de_recorrido_3.readFeatures(json_recorrido1rutas_de_recorrido_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_recorrido1rutas_de_recorrido_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recorrido1rutas_de_recorrido_3.addFeatures(features_recorrido1rutas_de_recorrido_3);
var lyr_recorrido1rutas_de_recorrido_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_recorrido1rutas_de_recorrido_3, 
                style: style_recorrido1rutas_de_recorrido_3,
                popuplayertitle: 'recorrido1 — rutas_de_recorrido',
                interactive: true,
                title: '<img src="styles/legend/recorrido1rutas_de_recorrido_3.png" /> recorrido1 — rutas_de_recorrido'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Limitedelparquelimite_parque_1.setVisible(true);lyr_Puntos_2.setVisible(true);lyr_recorrido1rutas_de_recorrido_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Limitedelparquelimite_parque_1,lyr_Puntos_2,lyr_recorrido1rutas_de_recorrido_3];
lyr_Limitedelparquelimite_parque_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Puntos_2.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Foto': 'Foto', 'Observación': 'Observación', });
lyr_recorrido1rutas_de_recorrido_3.set('fieldAliases', {'fid': 'fid', });
lyr_Limitedelparquelimite_parque_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Puntos_2.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'ValueMap', 'Foto': 'ExternalResource', 'Observación': '', });
lyr_recorrido1rutas_de_recorrido_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Limitedelparquelimite_parque_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Puntos_2.set('fieldLabels', {'fid': 'no label', 'Tipo': 'no label', 'Foto': 'no label', 'Observación': 'no label', });
lyr_recorrido1rutas_de_recorrido_3.set('fieldLabels', {'fid': 'no label', });
lyr_recorrido1rutas_de_recorrido_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});