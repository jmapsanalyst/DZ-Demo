ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2157").setExtent([310992.282152, 514703.136204, 1030711.002152, 964527.336204]);
var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DZv4shp_1 = new ol.format.GeoJSON();
var features_DZv4shp_1 = format_DZv4shp_1.readFeatures(json_DZv4shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2157'});
var jsonSource_DZv4shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DZv4shp_1.addFeatures(features_DZv4shp_1);
var lyr_DZv4shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DZv4shp_1, 
                style: style_DZv4shp_1,
                popuplayertitle: 'DZ v4 shp',
                interactive: true,
    title: 'DZ v4 shp<br />\
    <img src="styles/legend/DZv4shp_1_0.png" /> Carlow County Council<br />\
    <img src="styles/legend/DZv4shp_1_1.png" /> Cavan County Council<br />\
    <img src="styles/legend/DZv4shp_1_2.png" /> Clare County Council<br />\
    <img src="styles/legend/DZv4shp_1_3.png" /> Cork City Council<br />\
    <img src="styles/legend/DZv4shp_1_4.png" /> Cork County Council<br />\
    <img src="styles/legend/DZv4shp_1_5.png" /> Donegal County Council<br />\
    <img src="styles/legend/DZv4shp_1_6.png" /> Dublin City Council<br />\
    <img src="styles/legend/DZv4shp_1_7.png" /> Dun Laoghaire / Rathdown<br />\
    <img src="styles/legend/DZv4shp_1_8.png" /> Fingal County Council<br />\
    <img src="styles/legend/DZv4shp_1_9.png" /> Galway City Council<br />\
    <img src="styles/legend/DZv4shp_1_10.png" /> Galway County Council<br />\
    <img src="styles/legend/DZv4shp_1_11.png" /> Kerry County Council<br />\
    <img src="styles/legend/DZv4shp_1_12.png" /> Kildare County Council<br />\
    <img src="styles/legend/DZv4shp_1_13.png" /> Kilkenny County Council<br />\
    <img src="styles/legend/DZv4shp_1_14.png" /> Laois County Council<br />\
    <img src="styles/legend/DZv4shp_1_15.png" /> Leitrim County Council<br />\
    <img src="styles/legend/DZv4shp_1_16.png" /> Limerick City and County Council<br />\
    <img src="styles/legend/DZv4shp_1_17.png" /> Longford County Council<br />\
    <img src="styles/legend/DZv4shp_1_18.png" /> Louth County Council<br />\
    <img src="styles/legend/DZv4shp_1_19.png" /> Mayo County Council<br />\
    <img src="styles/legend/DZv4shp_1_20.png" /> Meath County Council<br />\
    <img src="styles/legend/DZv4shp_1_21.png" /> Monaghan County Council<br />\
    <img src="styles/legend/DZv4shp_1_22.png" /> Offaly County Council<br />\
    <img src="styles/legend/DZv4shp_1_23.png" /> Roscommon County Council<br />\
    <img src="styles/legend/DZv4shp_1_24.png" /> Sligo County Council<br />\
    <img src="styles/legend/DZv4shp_1_25.png" /> South Dublin County Council<br />\
    <img src="styles/legend/DZv4shp_1_26.png" /> Tipperary County Council<br />\
    <img src="styles/legend/DZv4shp_1_27.png" /> Waterford City and County Council<br />\
    <img src="styles/legend/DZv4shp_1_28.png" /> Westmeath County Council<br />\
    <img src="styles/legend/DZv4shp_1_29.png" /> Wexford County Council<br />\
    <img src="styles/legend/DZv4shp_1_30.png" /> Wicklow County Council<br />' });
var format_CountyBoundaries_2 = new ol.format.GeoJSON();
var features_CountyBoundaries_2 = format_CountyBoundaries_2.readFeatures(json_CountyBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2157'});
var jsonSource_CountyBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundaries_2.addFeatures(features_CountyBoundaries_2);
var lyr_CountyBoundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundaries_2, 
                style: style_CountyBoundaries_2,
                popuplayertitle: 'County Boundaries ',
                interactive: false,
                title: '<img src="styles/legend/CountyBoundaries_2.png" /> County Boundaries '
            });
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_CountyBoundaries_2,],
                                fold: 'open',
                                title: 'Boundaries'});
var group_DecarbonisationZones = new ol.layer.Group({
                                layers: [lyr_DZv4shp_1,],
                                fold: 'open',
                                title: 'Decarbonisation Zones'});

lyr_ESRIWorldTopo_0.setVisible(true);lyr_DZv4shp_1.setVisible(true);lyr_CountyBoundaries_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,group_DecarbonisationZones,group_Boundaries];
lyr_DZv4shp_1.set('fieldAliases', {'fid': 'fid', 'DZ_NO': 'DZ_NO', 'COUNTY': 'County', 'CONTAE': 'Contae', 'layer': 'layer', 'path': 'path', 'Local Auth': 'Local Authority', 'Decarbonis': 'Decarbonisation Zone', 'Current Im': 'Current Impact ', 'Current Fi': 'Current Financial Capacity/Sources', 'Possible F': 'Possible Financial Capacity/Sources', });
lyr_CountyBoundaries_2.set('fieldAliases', {'fid': 'fid', 'name': 'County Boundaries', 'auto_id': 'auto_id', 'county': 'county', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_DZv4shp_1.set('fieldImages', {'fid': 'TextEdit', 'DZ_NO': 'TextEdit', 'COUNTY': 'TextEdit', 'CONTAE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Local Auth': 'TextEdit', 'Decarbonis': 'TextEdit', 'Current Im': 'TextEdit', 'Current Fi': 'TextEdit', 'Possible F': 'TextEdit', });
lyr_CountyBoundaries_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'auto_id': 'Range', 'county': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'TextEdit', 'auxiliary_storage_labeling_positiony': 'TextEdit', 'auxiliary_storage_labeling_show': 'Range', });
lyr_DZv4shp_1.set('fieldLabels', {'fid': 'hidden field', 'DZ_NO': 'hidden field', 'COUNTY': 'inline label - visible with data', 'CONTAE': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Local Auth': 'inline label - always visible', 'Decarbonis': 'inline label - always visible', 'Current Im': 'inline label - always visible', 'Current Fi': 'inline label - visible with data', 'Possible F': 'inline label - always visible', });
lyr_CountyBoundaries_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'auto_id': 'no label', 'county': 'no label', 'auxiliary_storage_labeling_positionx': 'no label', 'auxiliary_storage_labeling_positiony': 'no label', 'auxiliary_storage_labeling_show': 'no label', });
lyr_CountyBoundaries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});