import Vector3 from "./vector3";

class Point {
  x: number;
  y: number;
  z: number;

  /**
   * Will create a new Point and set its coordinates
   * to zero if not defined otherwise
   * @param x The x coordinate
   * @param y The y coordinate
   * @param z The z coordinate
   */
  constructor(x?: number, y?: number, z?: number) {
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
    this.z = z !== undefined ? z : 0;
  }

  /**
   * Will calculate the vector between the two given points
   * @param p1 Point one
   * @param p2 Point two
   * @returns The new Vector connecting this points
   */
  static getVector(p1: Point, p2: Point): Vector3 {
    let x = p2.x - p1.x;
    let y = p2.y - p1.y;
    let z = p2.z - p1.z;
    return new Vector3(x, y, z);
  }

  /**
   * Will return a new vector based on the point and the
   * origin (0|0|0)
   * @returns The calculated locationvector
   */
  toLocationVector(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * Will return all the values of the vector in a numbers Array
   * @returns The values as an array
   */
  getValues(): number[] {
    return [this.x, this.y, this.z];
  }

  /**
   * Will convert the point to a better readable string
   * @returns A String representing the point
   */
  toString(): String {
    return `(${this.x}|${this.y}|${this.z})`;
  }
}

export default Point;
