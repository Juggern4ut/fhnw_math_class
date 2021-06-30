import Line from "../src/Math/line";
import Point from "../src/Math/point";
import Vector3 from "../src/Math/vector3";

describe("line tests", () => {
  it("should calculate if a point is located on a Line", () => {
    const A0: Vector3 = new Vector3(4, -2, 0);
    const a: Vector3 = new Vector3(3, -3, -2);
    const g: Line = new Line(A0, a);

    const testPoint1 = new Point(1, 1, 2);
    const testPoint2 = new Point(-1, 2, 3);
    expect(g.crossesPoints([testPoint1, testPoint2])).toEqual([true, false]);
  });

  it("should compare two lines", () => {
    const l1: Line = new Line(new Vector3(2, 0, 2), new Vector3(1, 2, 1));
    const l2: Line = new Line(new Vector3(4, 4, 4), new Vector3(-1, -2, -1));
    expect(l1.equals(l2)).toBe(true);
  });
});
