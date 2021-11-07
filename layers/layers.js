ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_2.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [422599.375000, 8475358.250000, 505549.375000, 8549883.250000]
                            })
                        });
var lyr_acc_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_3.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [422599.375000, 8475358.250000, 505549.375000, 8549883.250000]
                            })
                        });
var lyr_dir_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_4.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [422599.375000, 8475358.250000, 505549.375000, 8549883.250000]
                            })
                        });
var lyr_fill_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_5.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [422599.375000, 8475358.250000, 505549.375000, 8549883.250000]
                            })
                        });
var format_c_shp_6 = new ol.format.GeoJSON();
var features_c_shp_6 = format_c_shp_6.readFeatures(json_c_shp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_shp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_6.addFeatures(features_c_shp_6);
var lyr_c_shp_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_6, 
                style: style_c_shp_6,
                interactive: true,
                title: '<img src="styles/legend/c_shp_6.png" /> c_shp'
            });
var lyr_c_acc_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_7.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [441786.875000, 8489633.250000, 492974.375000, 8535495.750000]
                            })
                        });
var lyr_c_cauce_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_8.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [441786.875000, 8489633.250000, 492974.375000, 8535495.750000]
                            })
                        });
var format_c_curvas_9 = new ol.format.GeoJSON();
var features_c_curvas_9 = format_c_curvas_9.readFeatures(json_c_curvas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_curvas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_9.addFeatures(features_c_curvas_9);
var lyr_c_curvas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_9, 
                style: style_c_curvas_9,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_9.png" /> c_curvas'
            });
var lyr_c_fill_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_10.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [441786.875000, 8489633.250000, 492974.375000, 8535495.750000]
                            })
                        });
var lyr_c_reclass_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_11.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [441786.875000, 8489633.250000, 492974.375000, 8535495.750000]
                            })
                        });
var format_c_rios_12 = new ol.format.GeoJSON();
var features_c_rios_12 = format_c_rios_12.readFeatures(json_c_rios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_rios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_12.addFeatures(features_c_rios_12);
var lyr_c_rios_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_12, 
                style: style_c_rios_12,
                interactive: true,
                title: '<img src="styles/legend/c_rios_12.png" /> c_rios'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_DEM_2.setVisible(true);lyr_acc_3.setVisible(true);lyr_dir_4.setVisible(true);lyr_fill_5.setVisible(true);lyr_c_shp_6.setVisible(true);lyr_c_acc_7.setVisible(true);lyr_c_cauce_8.setVisible(true);lyr_c_curvas_9.setVisible(true);lyr_c_fill_10.setVisible(true);lyr_c_reclass_11.setVisible(true);lyr_c_rios_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_DEM_2,lyr_acc_3,lyr_dir_4,lyr_fill_5,lyr_c_shp_6,lyr_c_acc_7,lyr_c_cauce_8,lyr_c_curvas_9,lyr_c_fill_10,lyr_c_reclass_11,lyr_c_rios_12];
lyr_c_shp_6.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'a_km2': 'a_km2', 'p_km': 'p_km', });
lyr_c_curvas_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_12.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_c_shp_6.set('fieldImages', {'ID': '', 'VALUE': '', 'NAME': '', 'a_km2': '', 'p_km': '', });
lyr_c_curvas_9.set('fieldImages', {'fid': '', 'ID': '', 'CONTOUR': '', 'LENGTH': '', });
lyr_c_rios_12.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_c_shp_6.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'a_km2': 'no label', 'p_km': 'no label', });
lyr_c_curvas_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_12.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});