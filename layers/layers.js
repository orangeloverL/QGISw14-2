ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([118.180592, 24.350877, 118.515167, 24.575742]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_2016_1 = new ol.format.GeoJSON();
var features_2016_1 = format_2016_1.readFeatures(json_2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_1.addFeatures(features_2016_1);
var lyr_2016_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_1, 
                style: style_2016_1,
                interactive: true,
                title: '<img src="styles/legend/2016_1.png" /> 2016金門自然村'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_2016_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2016_1];
lyr_2016_1.set('fieldAliases', {'自然村名稱': '自然村名稱', });
lyr_2016_1.set('fieldImages', {'自然村名稱': '', });
lyr_2016_1.set('fieldLabels', {'自然村名稱': 'header label', });
lyr_2016_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});