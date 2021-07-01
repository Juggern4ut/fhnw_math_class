import Vector3 from "../src/Math/vector3";
import Plane from "../src/Math/plane";

describe("plane tests", () => {
  it("should throw when creating a plane with parallel direction vectors", () => {
    
    const loc: Vector3 = new Vector3(1, 3, 5);
    const dir1: Vector3 = new Vector3(1, -3, 2);
    const dir2: Vector3 = new Vector3(-2, 6, -4);
    expect(() => new Plane(loc, dir1, dir2)).toThrow();
  });

  it("should calculate points from a plane", () => {
    const plane: Plane = new Plane(
      new Vector3(4, 2, 1),
      new Vector3(-1, 3, -1),
      new Vector3(3, -1, 3)
    );

    expect(plane.getPoint(1, 4).getValues()).toEqual([15, 1, 12]);
    expect(plane.getPoint(-3, 5).getValues()).toEqual([22, -12, 19]);
  });
});
