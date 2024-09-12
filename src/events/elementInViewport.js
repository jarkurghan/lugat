export function elementInViewport(element) {
    var top = element.offsetTop;
    var left = element.offsetLeft;
    var width = element.offsetWidth;
    var height = element.offsetHeight;

    while (element.offsetParent) {
        element = element.offsetParent;
        top += element.offsetTop;
        left += element.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        top + height <= window.pageYOffset + window.innerHeight &&
        left + width <= window.pageXOffset + window.innerWidth
    );

    //   return (
    //     top < (window.pageYOffset + window.innerHeight) &&
    //     left < (window.pageXOffset + window.innerWidth) &&
    //     (top + height) > window.pageYOffset &&
    //     (left + width) > window.pageXOffset
    //   );
}
