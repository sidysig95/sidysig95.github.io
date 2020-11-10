ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-19.018815, 11.373551, -7.612327, 17.411051]);
var wms_layers = [];


        var lyr_EsriGraylight_0 = new ol.layer.Tile({
            'title': 'Esri Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RA09112020regSN_1 = new ol.format.GeoJSON();
var features_RA09112020regSN_1 = format_RA09112020regSN_1.readFeatures(json_RA09112020regSN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RA09112020regSN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RA09112020regSN_1.addFeatures(features_RA09112020regSN_1);
var lyr_RA09112020regSN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RA09112020regSN_1, 
                style: style_RA09112020regSN_1,
                interactive: true,
    title: 'RA 09112020 regSN<br />\
    <img src="styles/legend/RA09112020regSN_1_0.png" /> 26 - 120<br />\
    <img src="styles/legend/RA09112020regSN_1_1.png" /> 120 - 435<br />\
    <img src="styles/legend/RA09112020regSN_1_2.png" /> 435 - 640<br />\
    <img src="styles/legend/RA09112020regSN_1_3.png" /> 640 - 844<br />\
    <img src="styles/legend/RA09112020regSN_1_4.png" /> 844 - 1049<br />\
    <img src="styles/legend/RA09112020regSN_1_5.png" /> 1049 - 1253<br />\
    <img src="styles/legend/RA09112020regSN_1_6.png" /> 1253 - 1458<br />\
    <img src="styles/legend/RA09112020regSN_1_7.png" /> 1458 - 1662<br />'
        });

lyr_EsriGraylight_0.setVisible(true);lyr_RA09112020regSN_1.setVisible(true);
var layersList = [lyr_EsriGraylight_0,lyr_RA09112020regSN_1];
lyr_RA09112020regSN_1.set('fieldAliases', {'REG': 'REG', 'COMPLETED': 'COMPLETED', 'MICROBUSI': 'MICROBUSI', 'FINANCIAL': 'FINANCIAL', 'TRAINING': 'TRAINING', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_RA09112020regSN_1.set('fieldImages', {'REG': 'TextEdit', 'COMPLETED': 'TextEdit', 'MICROBUSI': 'TextEdit', 'FINANCIAL': 'TextEdit', 'TRAINING': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_RA09112020regSN_1.set('fieldLabels', {'OBJECTID': 'no label', 'STATUT': 'no label', 'REG': 'no label', 'Code': 'no label', 'Surface': 'no label', 'COMPLETED': 'header label', 'MICROBUSI': 'header label', 'FINANCIAL': 'header label', 'TRAINING': 'header label', });
lyr_RA09112020regSN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});