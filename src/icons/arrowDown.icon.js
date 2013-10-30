(function ()
{
    window.AgidoMockups = window.AgidoMockups || {};
    AgidoMockups.icons = AgidoMockups.icons || {};
    AgidoMockups.icons.arrowDown = new Kinetic.RegularPolygon({
        name: "arrowDown",
        width: 20,
        height: 20,
        sides: 3,
        radius: 7,
        fill: '#000',
        stroke: null
    });
    //noinspection JSUnresolvedFunction
    AgidoMockups.icons.arrowDown.setRotationDeg(180);
})();