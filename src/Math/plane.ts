import Point from "./point";
import Vector3 from "./vector3";

class Plane {
  location: Vector3;
  direction1: Vector3;
  direction2: Vector3;
  constructor(location: Vector3, direction1: Vector3, direction2: Vector3) {
    if (Vector3.areParallel(direction1, direction2)) {
      throw new Error(
        "The two directional vectors of the plane are parallel. This is not allowed!"
      );
    }
    this.location = location;
    this.direction1 = direction1;
    this.direction2 = direction2;
  }

  /**
   * Will calculate the position of a point based
   * on given t and s values
   * @param t The number to set for t
   * @param s The number to set for s
   * @returns The newly calculated point
   */
  getPoint(t: number, s: number): Point {
    let x = this.location.x + t * this.direction1.x + s * this.direction2.x;
    let y = this.location.y + t * this.direction1.y + s * this.direction2.y;
    let z = this.location.z + t * this.direction1.z + s * this.direction2.z;
    return new Point(x, y, z);
  }
}

export default Plane;
