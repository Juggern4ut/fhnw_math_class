import Point from "../src/Math/point";
import Vector3 from "../src/Math/vector3";

describe("Point tests", () => {
  it("should declare a point", () => {
    const A: Point = new Point();
    expect(A.x).toBe(0);
    expect(A.y).toBe(0);
    expect(A.z).toBe(0);
  });

  it("should create a location vector", () => {
    const A: Point = new Point(10, 5, -2);
    const v: Vector3 = A.toLocationVector();
    expect(v.getValues()).toEqual([10, 5, -2]);
  });

  it("should create a vector from two points", () => {
    const A: Point = new Point(5, 4, 0);
    const B: Point = new Point(10, 3, 1);
    const v: Vector3 = Point.getVector(A, B);
    expect(v.getValues()).toEqual([5, -1, 1]);
  });
});
