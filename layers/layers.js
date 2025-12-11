ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2157").setExtent([433685.489118, 675821.941219, 943147.907464, 994235.952685]);
var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DecarbonisationZonesV3_1 = new ol.format.GeoJSON();
var features_DecarbonisationZonesV3_1 = format_DecarbonisationZonesV3_1.readFeatures(json_DecarbonisationZonesV3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2157'});
var jsonSource_DecarbonisationZonesV3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DecarbonisationZonesV3_1.addFeatures(features_DecarbonisationZonesV3_1);
var lyr_DecarbonisationZonesV3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DecarbonisationZonesV3_1, 
                style: style_DecarbonisationZonesV3_1,
                popuplayertitle: 'Decarbonisation Zones (V)3',
                interactive: true,
    title: 'Decarbonisation Zones (V)3<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_0.png" /> Donegal County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_1.png" /> Galway City Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_2.png" /> Galway County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_3.png" /> Laois County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_4.png" /> Leitrim County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_5.png" /> Limerick City and County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_6.png" /> Longford County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_7.png" /> Mayo County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_8.png" /> Meath County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_9.png" /> Roscommon County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_10.png" /> Sligo County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_11.png" /> South Dublin County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_12.png" /> Tipperary County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_13.png" /> Westmeath County Council<br />\
    <img src="styles/legend/DecarbonisationZonesV3_1_14.png" /> Wicklow County Council<br />' });
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
var group_DZs = new ol.layer.Group({
                                layers: [lyr_DecarbonisationZonesV3_1,],
                                fold: 'open',
                                title: 'DZ\'s'});

lyr_ESRIWorldTopo_0.setVisible(true);lyr_DecarbonisationZonesV3_1.setVisible(true);lyr_CountyBoundaries_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,group_DZs,group_Boundaries];
lyr_DecarbonisationZonesV3_1.set('fieldAliases', {'fid': 'fid', 'DZ_NO': 'DZ_NO', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'layer': 'layer', 'path': 'path', 'Local Authority': 'Local Authority', 'Decarbonising Zone': 'Decarbonising Zone', 'Current Impact of DZ': 'Current Impact of DZ', 'Current Financial Capacity/Sources': 'Current Financial Capacity/Sources', 'Possible Financial Capacity/Sources': 'Possible Financial Capacity/Sources', });
lyr_CountyBoundaries_2.set('fieldAliases', {'fid': 'fid', 'name': 'County Boundaries', 'auto_id': 'auto_id', 'county': 'county', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_DecarbonisationZonesV3_1.set('fieldImages', {'fid': 'TextEdit', 'DZ_NO': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Local Authority': 'TextEdit', 'Decarbonising Zone': 'TextEdit', 'Current Impact of DZ': 'TextEdit', 'Current Financial Capacity/Sources': 'TextEdit', 'Possible Financial Capacity/Sources': 'TextEdit', });
lyr_CountyBoundaries_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'auto_id': 'Range', 'county': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'TextEdit', 'auxiliary_storage_labeling_positiony': 'TextEdit', 'auxiliary_storage_labeling_show': 'Range', });
lyr_DecarbonisationZonesV3_1.set('fieldLabels', {'fid': 'hidden field', 'DZ_NO': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Local Authority': 'inline label - always visible', 'Decarbonising Zone': 'inline label - always visible', 'Current Impact of DZ': 'inline label - always visible', 'Current Financial Capacity/Sources': 'inline label - always visible', 'Possible Financial Capacity/Sources': 'inline label - always visible', });
lyr_CountyBoundaries_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'auto_id': 'no label', 'county': 'no label', 'auxiliary_storage_labeling_positionx': 'no label', 'auxiliary_storage_labeling_positiony': 'no label', 'auxiliary_storage_labeling_show': 'no label', });
lyr_CountyBoundaries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});