
export const PI = 3.14159;
export const E = 2.71828;

export function circleArea(radius) {
    return PI * radius * radius;
}

export function circleCircumference(radius) {
    return 2 * PI * radius;
}

export function naturalLogarithm(x) {
    return Math.log(x) / Math.log(E);
}
