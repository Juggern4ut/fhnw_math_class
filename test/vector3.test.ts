import Vector3 from "../src/Math/vector3";

describe("Vector3 Tests", () => {
  it("should create a new vector", () => {
    const v: Vector3 = new Vector3(10, 2, 5.5);
    expect(v.getValues()).toEqual([10, 2, 5.5]);
  });

  it("should convert a vector to a string", () => {
    const v: Vector3 = new Vector3(10, 2, 5.5);
    expect(v.toString()).toEqual("(10|2|5.5)");
  });

  it("should create the cross product of two vectors", () => {
    const v1: Vector3 = new Vector3(10, 2, 5);
    const v2: Vector3 = new Vector3(5, 9, -2);
    const cross = Vector3.cross(v1, v2);
    expect(cross.getValues()).toEqual([-49, 45, 80]);
  });

  it("should add two vectors together", () => {
    const v1: Vector3 = new Vector3(10, 2, 5);
    const v2: Vector3 = new Vector3(5, 9, -2);
    const sum = Vector3.add(v1, v2);
    expect(sum.getValues()).toEqual([15, 11, 3]);
  });

  it("should calculate the dot product of two vectors", () => {
    const v1: Vector3 = new Vector3(-5, 7, -2);
    const v2: Vector3 = new Vector3(0, 19, -5);
    const dot = Vector3.dot(v1, v2);
    expect(dot).toBe(143);
  });

  it("should convert a vector to a point", () => {
    const v: Vector3 = new Vector3(10, 6, -3);
    expect(v.toPoint().getValues()).toEqual([10, 6, -3]);
  });

  it("should calculate if two vectors are parallel", () => {
    const v1: Vector3 = new Vector3(1, -3, 2);
    const v2: Vector3 = new Vector3(-2, 6, -4);
    expect(Vector3.areParallel(v1, v2)).toBe(true);
  });

  it("should calculate the magnitude of a vector", () => {
    const v: Vector3 = new Vector3(5, 5, 10);
    expect(v.getMagnitude()).toBeCloseTo(12.2474, 4);
  });

  it("should normalize a vector", () => {
    const v: Vector3 = new Vector3(3, 3, -3);
    const norm = Vector3.normalize(v);
    expect(norm.getMagnitude()).toBe(1);
  });

  it("should multiply a number to a vector", () => {
    const v: Vector3 = new Vector3(4, 2, 3);
    v.multiply(4);
    expect(v.getValues()).toEqual([16, 8, 12]);
  });

  it("should calculate the triple product", () => {
    const v1: Vector3 = new Vector3(2, -4, -8);
    const v2: Vector3 = new Vector3(6, 1, -3);
    const v3: Vector3 = new Vector3(1, 0, 2);

    expect(Vector3.tripleProduct(v1, v2, v3)).toBe(72);
  });
});
