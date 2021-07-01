import Point from "./point";
import Vector3 from "./vector3";

class Line {
  location: Vector3;
  direction: Vector3;

  constructor(location: Vector3, direction: Vector3) {
    this.location = location;
    this.direction = direction;
  }

  /**
   * Will check if an array of given points is
   * located on the line and return an array of booleans.
   * @param point The point to validate
   * @returns true if point is on line
   */
  crossesPoints(points: Point[]): boolean[] {
    let results: boolean[] = [];
    points.forEach((p, i) => {
      results[i] = this.crossesPoint(p);
    });
    return results;
  }

  /**
   * Will check if a point is located on the
   * line and return true if so.
   * @param point The point to validate
   * @returns true if point is on line
   */
  crossesPoint(point: Point): boolean {
    let t: number[] = [];
    t[0] = (point.x - this.location.x) / this.direction.x;
    t[1] = (point.y - this.location.y) / this.direction.y;
    t[2] = (point.z - this.location.z) / this.direction.z;
    return t[0] === t[1] && t[1] === t[2];
  }

  /**
   * Will verify if two lines are equal
   * @param other The other line to compare to
   * @returns true if the lines are equals, false otherwise
   */
  equals(other: Line): boolean {
    const parallel: boolean = Vector3.areParallel(
      this.direction,
      other.direction
    );
    const p: Point = other.location.toPoint();
    const crosses = this.crossesPoints([p])[0];
    return parallel && crosses;
  }

  /**
   * Will convert the line into a human readable form
   * @returns The string to represent the line
   */
  toString(): String {
    return `${this.location.toString()} + t${this.direction.toString()}`;
  }
}

export default Line;
