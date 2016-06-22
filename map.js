document.getElementById('map').classList.add('loading');
mapboxgl.accessToken = 'pk.eyJ1IjoiaHVtYW5zIiwiYSI6ImNpcDZzdm80cjAwMTB1d203ZmRqZTdwbWEifQ.up9_Pt9XqDhp6m0KLHcbIw';

// настройка карты
var map = window.map = new mapboxgl.Map({
  container: 'map', // идентификатор html куда будет рендериться карта
  style: 'mapbox://styles/humans/cip9hxybc003edmm2i1eqlap8', // стиль карты по умлочанию
  center: [-74.0059, 40.7127], // начальные координаты карты
  zoom: 12 // начальный уровень приближения
});


// настройка данных для пинов
var markers = new mapboxgl.GeoJSONSource({
  data: { type: 'FeatureCollection', features: [] }, // данных пока нет, они загрузятся позже
  cluster: true, // объединять точки в кластеры
  clusterRadius: 40 // размер кластера в пикселях
});

// настройка данных для точек
var miniMarkers = new mapboxgl.GeoJSONSource({
  data: { type: 'FeatureCollection', features: [] }, // данных пока нет, они загрузятся позже
});

// настройка данных для ареалов вокруг точек
var areaMarkers = new mapboxgl.GeoJSONSource({
  data: { type: 'FeatureCollection', features: [] }, // данных пока нет, они загрузятся позже
});

// настройка данных для ареалов вокруг точек
var whiteMarkers = new mapboxgl.GeoJSONSource({
  data: { type: 'FeatureCollection', features: [] }, // данных пока нет, они загрузятся позже
});

// эта функция будет выполнена после загрузки карты
map.on('load', function() {
  map.addSource('markers', markers); // добавляем на карту данные маркеров
  map.addSource('miniMarkers', miniMarkers); // добавляем на карту данные маркеров
  map.addSource('areaMarkers', areaMarkers); // добавляем на карту данные ареалов маркера
  map.addSource('whiteMarkers', whiteMarkers); // добавляем на карту данные ареалов маркера

  // добавляем на карту слой пинов
  map.addLayer({
    id: 'markers', // идентификатор слоя
    type: 'circle', // тип отображения слоя
    source: 'markers', // идентификатор данных
    paint: {
      'circle-radius': 3,
      'circle-color': '#fff', // цвет кружка
      'circle-opacity': 1
    }
  });

  // добавляем на карту слой ареалов маркера
  map.addLayer({
    id: 'areaMarkers', // идентификатор слоя
    type: 'circle', // тип отображения слоя
    source: 'areaMarkers', // идентификатор данных
    paint: {
      'circle-radius':  {
        'stops': [
          [1, 15],
          [2, 15],
          [3, 15],
          [4, 14],
          [5, 14],
          [6, 12],
          [7, 12],
          [8, 10],
          [9, 10],
          [10, 10],
          [11, 10],
          [12, 8],
          [13, 3],
          [14, 3],
          [15, 3],
          [16, 3],
          [17, 4],
          [18, 4],
          [19, 4],
          [20, 4]
        ]
      }, // радиус кружка
      'circle-color': '#00FF96', // цвет кружка ccff00 ff7ab6 d1a7ff 02ff9e
      'circle-blur': {
        'stops': [
          [1, 5],
          [2, 5],
          [3, 5],
          [4, 4],
          [5, 3],
          [6, 2],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 0.7],
          [11, 0.7],
          [12, 0.7],
          [13, 0],
          [14, 0],
          [15, 0],
          [16, 0],
          [17, 0],
          [18, 0],
          [19, 0],
          [20, 0]
        ]
      },
      'circle-opacity': {
        'stops': [
          [1, 0.9],
          [2, 0.9],
          [3, 0.9],
          [4, 0.9],
          [5, 0.9],
          [6, 0.9],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 0.7],
          [11, 0.7],
          [12, 0.7],
          [13, 0.7],
          [14, 0.8],
          [15, 0.9],
          [16, 0.9],
          [17, 1],
          [18, 1],
          [19, 1],
          [20, 1]
        ]
      }
    }
  });

  // добавляем на карту слой ареалов маркера
  map.addLayer({
    id: 'whiteMarkers', // идентификатор слоя
    type: 'circle', // тип отображения слоя
    source: 'whiteMarkers', // идентификатор данных
    paint: {
      'circle-radius':  {
        'stops': [
          [1, 10],
          [2, 10],
          [3, 9],
          [4, 8],
          [5, 8],
          [6, 8],
          [7, 8],
          [8, 8],
          [9, 7],
          [10, 7],
          [11, 6],
          [12, 5],
          [13, 0],
          [14, 0],
          [15, 0],
          [16, 0],
          [17, 0],
          [18, 0],
          [19, 0],
          [20, 0]
        ]
      }, // радиус кружка
      'circle-color': '#FFF', // цвет кружка ccff00 ff7ab6 d1a7ff
      'circle-blur': 1,
      'circle-opacity': {
        'stops': [
          [1, 0.05],
          [2, 0.05],
          [3, 0.05],
          [4, 0.1],
          [5, 0.1],
          [6, 0.1],
          [7, 0.2],
          [8, 0.3],
          [9, 0.4],
          [10, 0.5],
          [11, 0.6],
          [12, 0.6],
          [13, 0.7],
          [14, 0.7],
          [15, 0.8],
          [16, 0.8],
          [17, 0.9],
          [18, 1],
          [19, 1],
          [20, 1]
        ]
      }
    }
  });

    // добавляем на карту слой маркеров
  map.addLayer({
    id: 'miniMarkers', // идентификатор слоя
    type: 'circle', // тип отображения слоя
    source: 'miniMarkers', // идентификатор данных
    paint: {
      'circle-radius': {
        'stops': [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 1],
          [10, 1.5],
          [11, 2],
          [12, 2],
          [13, 2.5],
          [14, 3],
          [15, 3],
          [16, 3],
          [17, 3],
          [18, 4],
          [19, 4],
          [20, 4]
        ]
      }, // радиус кружка
      'circle-color': '#00CC78', // цвет кружка
      'circle-opacity': {
        'stops': [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 0],
          [14, 0],
          [15, 0],
          [16, 0],
          [17, 0],
          [18, 0],
          [19, 0],
          [20, 0]
        ]
      }
    }
  });
});

// загрузка маркеров из файла data.geojson

$.getJSON('med_data.geojson', function(data) {
   // загрузка данных в маркеры
  markers.setData(data);
  miniMarkers.setData(data);
  areaMarkers.setData(data);
  whiteMarkers.setData(data);
  document.getElementById('map').classList.remove('loading');
});

// функция отрисовки содержимого попапа
var renderFeature = function(feature) {
  // сокращаем текст до восьми символов
  var title = feature.properties.name.substring(0, 8);

  // отдаём html строчку
  return `
    <div class='container'>
      <img class='photo' src=${feature.properties.photo} />
      <div class='title'>${title}</div>
    </div>
  `;
};

var popups = [];

// функция отрисовки попапов
var render = function() {
  // удаляем все предыдущие маркеры
  if (popups.length > 0) popups.forEach(function(popup) { popup.remove() })

  // рисуем новые попапы только ближе 12 зума
  if (map.getZoom() >= 13) {
    // находим все отрисованные объекты на карте в текущем экстенте
    var bounds = map.getBounds();
    var nw = map.project(bounds.getNorthWest());
    var se = map.project(bounds.getSouthEast());
    var bbox = [[nw.x, nw.y], [se.x, se.y]];
    var features = map.queryRenderedFeatures(bbox, { layers: ['markers'] });

    // создаём новые маркеры — из всех найденных объектов выбираем все объекты не-кластеры
    popups = features.filter(function(feature) { return !feature.properties.cluster })
    .map(function(feature) {
      // создаём для каждого объекты новый попап
      return new mapboxgl.Popup({ closeButton: false, closeOnClick: false, anchor: 'bottom' })
        // и добавляем его на карту
        .setLngLat(feature.geometry.coordinates)
        .setHTML(renderFeature(feature))
        .addTo(map)
    });
  }
}

// перерисовывать попапы после каждого движения карты
map.on('moveend', render);
