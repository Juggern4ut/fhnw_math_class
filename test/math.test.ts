import Line from "../src/Math/line";
import Point from "../src/Math/point";
import Vector3 from "../src/Math/vector3";

describe("math tests combining several functions", () => {
  it("should calculate the are of a triangle", () => {
    const A: Point = new Point(1, 1);
    const B: Point = new Point(3, 0);
    const C: Point = new Point(5, 4);

    const AB: Vector3 = Point.getVector(A, B);
    const AC: Vector3 = Point.getVector(A, C);

    const cross: Vector3 = Vector3.cross(AB, AC);
    const area: number = cross.getMagnitude() * 0.5;

    expect(area).toBe(5);
  });

  it("should calculate the distance of a point to a line", () => {
    const g: Line = new Line(new Vector3(2, 3, 4), new Vector3(-1, -1, 1));
    const A: Point = new Point(1, 1, 1);
    expect(g.getDistanceToPoint(A)).toBeCloseTo(3.741657);
  });
});
