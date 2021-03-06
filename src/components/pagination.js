(function ()
{

    Kinetic.Pagination = function (config)
    {
        this.____init(config);
    };
    Kinetic.Pagination.prototype = {
        ____init: function (config)
        {
            Kinetic.Group.call(this, config);
            this.className = "Pagination";
            var x = 5, space = 20, arrowWidth = 10, y = 10;
            this.add(AgidoMockups.icons.arrowLeft.clone({x: x, y: y}));
            this.add(AgidoMockups.icons.arrowLeft.clone({x: x += arrowWidth, y: y}));
            this.add(AgidoMockups.icons.arrowLeft.clone({x: x += space, y: y}));
            this.add(AgidoMockups.icons.arrowRight.clone({x: x += space * 2, y: y, scale: 2}));
            this.add(AgidoMockups.icons.arrowRight.clone({x: x += space * 2, y: y}));
            this.add(AgidoMockups.icons.arrowRight.clone({x: x += space, y: y}));
            this.add(AgidoMockups.icons.arrowRight.clone({x: x += arrowWidth, y: y}));
        },
        toObject: function ()
        {
            return Kinetic.Node.prototype.toObject.call(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Pagination, Kinetic.Group);
})();
