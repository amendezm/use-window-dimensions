"use strict";
exports.__esModule = true;
exports.useScreenDimensions = void 0;
var react_1 = require("react");
var useScreenDimensions = function () {
    var _a = (0, react_1.useState)(0), width = _a[0], setWidth = _a[1];
    var _b = (0, react_1.useState)(0), height = _b[0], setHeight = _b[1];
    var updateDimensions = function () {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    (0, react_1.useEffect)(function () {
        updateDimensions();
        var resizeListener = window.addEventListener("resize", function () {
            updateDimensions();
        });
        return function () {
            //@ts-ignore
            window.removeEventListener("resize", resizeListener);
        };
    }, []);
    return { width: width, height: height };
};
exports.useScreenDimensions = useScreenDimensions;
