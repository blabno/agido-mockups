(function ()
{
    function updateChildren(item, config)
    {
        var text = item.find(".text")[0];
        var tape = item.find(".tape")[0];
        var card = item.find(".card")[0];
        text.setText(item.getText());
        //noinspection JSUnresolvedFunction
        text.setFontFamily(item.getFontFamily());
        //noinspection JSUnresolvedFunction
        text.setFontStyle(item.getFontStyle());
        //noinspection JSUnresolvedFunction
        text.setFontSize(item.getFontSize());
        //noinspection JSUnresolvedFunction
        text.setFill(config.color);
        card.setWidth(text.getWidth());
        card.setHeight(text.getHeight());
        tape.setAttr("x", (card.getWidth() - tape.getWidth()) / 2);
        //noinspection JSUnresolvedFunction
        item.setRotationDeg(3);
    }

    Kinetic.Comment = function (config)
    {
        this.____init(config);
    };
    Kinetic.Comment.prototype = {
        ____init: function (config)
        {
            Kinetic.Group.call(this, config);
            this.className = "Comment";
            this.add(new Kinetic.Rect(AgidoMockups.extend(config, {name: "card", x: 0, y: 10, draggable: false, fill: 'yellow', stroke: null})));
            this.add(new Kinetic.Rect(AgidoMockups.extend(config,
                    {name: "tape", rotationDeg: -1, width: 50, height: 20, draggable: false, fill: 'red', stroke: null})));
            this.add(new Kinetic.Text(AgidoMockups.extend(config,
                    {name: "text", x: 0, y: 10, padding: 30, draggable: false, fill: config.color, stroke: null})));
            var propertyChangeListener = function (event)
            {
                if (event.newVal != event.oldVal) {
                    updateChildren(this, config);
                }
            };
            this.on("fontFamilyChange", propertyChangeListener);
            this.on("fontSizeChange", propertyChangeListener);
            this.on("fontStyleChange", propertyChangeListener);
            this.on("textChange", propertyChangeListener);
            updateChildren(this, config);
        },
        toObject: function ()
        {
            return Kinetic.Node.prototype.toObject.call(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Comment, Kinetic.Group);
    Kinetic.Factory.addGetterSetter(Kinetic.Comment, 'fontFamily', "Arial");
    Kinetic.Factory.addGetterSetter(Kinetic.Comment, 'fontSize', 18);
    Kinetic.Factory.addGetterSetter(Kinetic.Comment, 'fontStyle', "normal");
    Kinetic.Factory.addGetterSetter(Kinetic.Comment, 'text', "Comment");
})();