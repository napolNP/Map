ymaps.ready(init);

function init() {
    // Получаем местоположение пользователя
    let location = ymaps.geolocation.get();
    let coords = location.coordinates;
    let locationText = 'Ваше местоположение'; // Текст для местоположения

    // Создаем карту и устанавливаем центр на местоположение пользователя
    let myMap = new ymaps.Map('map', {
        center: coords,
        zoom: 15
    });

    // Добавляем метку на карте
    let myPlacemark = new ymaps.Placemark(coords, {
        balloonContent: 'Вы здесь'
    });

    myMap.geoObjects.add(myPlacemark);

    // Создание панели маршрута
    let routePanel = new ymaps.control.RoutePanel({
        options: {
            maxWidth: 300
        }
    });

    // Добавление панели маршрута на карту
    myMap.controls.add(routePanel);

    // Настройка опций панели маршрута
    routePanel.options.set({
        types: {
            auto: true,
            masstransit: true,
            pedestrian: true,
            bicycle: true
        }
    });

    // Установка состояния панели маршрута
    routePanel.state.set({
        fromEnabled: true,
        from: locationText,
        toEnabled: false,
        to: [55.76352281410443, 37.66203899999997] // Задаем конечную точку маршрута
    });
}
