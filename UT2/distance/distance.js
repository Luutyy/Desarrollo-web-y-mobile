const distance = (
    {x : x1, y: y1}, {x: x2, y:y2},
) => {
    const {pow, sqrt} = Math;
    return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
}
distance({x:5, y:6})