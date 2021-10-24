import { saveRotation } from "./history.js";
import { LAYER_MAP, getCubiesFromLayer } from "./layers.js";
import { coordinateTransform } from "./coordinateTransform.js";
import { updateCubieElement } from "./generateCubies.js";

let canRotate = true;

export const rotationSpeed = 300;

export function rotateLayer(layer, orientation, options) {
    if (!canRotate) {
        return;
    }
    canRotate = false;
    if (!options || options.save) saveRotation([layer, orientation]);
    const speed = options?.speed || rotationSpeed;
    const angle = orientation == "+" ? 90 : -90;
    const cubies = getCubiesFromLayer(layer);
    const axis = LAYER_MAP[layer][0];
    const newRotation = ` rotate${axis.toUpperCase()}(${angle}deg)`;
    for (const cubie of cubies) {
        $("#rotationLayer").append($(`#${cubie.id}`));
    }
    $("#rotationLayer")
        .css("transition-duration", `${speed}ms`)
        .css("transform", newRotation);
    setTimeout(() => {
        $("#rotationLayer")
            .css("transition-duration", `0ms`)
            .css("transform", "");
        for (const cubie of cubies) {
            cubie.rotation = newRotation + cubie.rotation;
            const trafo = coordinateTransform[layer][orientation];
            cubie.coords = trafo(cubie.coords);
            updateCubieElement(cubie);
            $("#cubeContainer").append($(`#${cubie.id}`));
        }
        canRotate = true;
    }, speed);
}
