(function ()
{
    function updateChildren(item, config)
    {
        var label = item.find(".label")[0];
        var outerCircle = item.find(".outerCircle")[0];
        var innerCircle = item.find(".innerCircle")[0];
        //noinspection JSUnresolvedFunction
        var color = true === item.getDisabled() ? '#aaa' : config.color;
        label.setText(item.getText());
        //noinspection JSUnresolvedFunction
        label.setFontFamily(item.getFontFamily());
        //noinspection JSUnresolvedFunction
        label.setFontStyle(item.getFontStyle());
        //noinspection JSUnresolvedFunction
        label.setFontSize(item.getFontSize());
        //noinspection JSUnresolvedFunction
        label.setFill(color);
        var strokeWidth = 1;
        var outerRadius = (label.getHeight() - 2 * strokeWidth) / 4;
        //noinspection JSUnresolvedFunction
        outerCircle.setRadius(outerRadius);
        outerCircle.setAttr("x", outerRadius + strokeWidth);
        outerCircle.setAttr("y", outerRadius * 2 + strokeWidth);
        //noinspection JSUnresolvedFunction
        outerCircle.setStroke(color);

        label.setAttr("x", outerRadius * 3);

        //noinspection JSUnresolvedFunction
        innerCircle.setFill(color);
        //noinspection JSUnresolvedFunction
        if (item.getSelected()) {
            innerCircle.show();
            var innerRadius = outerRadius * .6;
            //noinspection JSUnresolvedFunction
            innerCircle.setRadius(innerRadius);
            innerCircle.setAttr("x", outerRadius + strokeWidth);
            innerCircle.setAttr("y", outerRadius * 2 + strokeWidth);
        } else {
            innerCircle.hide();
        }
    }

    Kinetic.RadioItem = function (config)
    {
        this.____init(config);
    };
    Kinetic.RadioItem.prototype = {
        ____init: function (config)
        {
            Kinetic.Group.call(this, config);
            this.className = "RadioItem";
            this.add(new Kinetic.Text(AgidoMockups.extend(config, {name: "label", x: 0, y: 0, draggable: false, fill: config.color, stroke: null})));
            this.add(new Kinetic.Circle(AgidoMockups.extend(config,
                    {name: "outerCircle", x: 0, y: 0, draggable: false, fill: null, stroke: config.color, strokeWidth: .5})));
            this.add(new Kinetic.Circle(AgidoMockups.extend(config, {name: "innerCircle", x: 0, y: 0, draggable: false, fill: config.color, stroke: null})));
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
            this.on("disabledChange", propertyChangeListener);
            this.on("selectedChange", propertyChangeListener);
            updateChildren(this, config);
        },
        toObject: function ()
        {
            return Kinetic.Node.prototype.toObject.call(this);
        }, getHeight: function ()
        {
            return this.find(".label")[0].getHeight();
        }
    };
    Kinetic.Util.extend(Kinetic.RadioItem, Kinetic.Group);
    Kinetic.Factory.addGetterSetter(Kinetic.RadioItem, 'fontFamily', "Arial");
    Kinetic.Factory.addGetterSetter(Kinetic.RadioItem, 'fontSize', 18);
    Kinetic.Factory.addGetterSetter(Kinetic.RadioItem, 'fontStyle', "normal");
    Kinetic.Factory.addGetterSetter(Kinetic.RadioItem, 'text', "The radio item");
    Kinetic.Factory.addGetterSetter(Kinetic.RadioItem, 'disabled', false);
    Kinetic.Factory.addGetterSetter(Kinetic.RadioItem, 'selected', false);
})();
