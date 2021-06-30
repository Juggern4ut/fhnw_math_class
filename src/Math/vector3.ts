import Point from "./point";

class Vector3 {
  x: number;
  y: number;
  z: number;

  /**
   * Will create a new vector handling 3 coordinates
   * @param x The x value of the vector
   * @param y The y value of the vector
   * @param z The z value of the vector
   */
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Create a new vector using the same values as a given vector
   * @param v The vector to clone
   * @returns A new vector with the same values as v
   */
  static clone(v: Vector3): Vector3 {
    return new Vector3(v.x, v.y, v.z);
  }

  /**
   * KREUZPRODUKT / VEKTORPRODUKT
   * Will take two vectors and calculate the cross product
   * @param v1 The first vector of the cross product
   * @param v2 The second vector of the cross product
   * @returns The new vector based on the cross product
   */
  static cross(v1: Vector3, v2: Vector3): Vector3 {
    let x = v1.y * v2.z - v1.z * v2.y;
    let y = v1.z * v2.x - v1.x * v2.z;
    let z = v1.x * v2.y - v1.y * v2.x;
    return new Vector3(x, y, z);
  }

  /**
   * SKALARPRODUKT
   * Will return the dot product of two given vectors
   * @param v1 First vector
   * @param v2 Second vector
   * @returns The calculated dot product
   */
  static dot(v1: Vector3, v2: Vector3): number {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  /**
   * SPATPRODUKT
   * Will calculate the triple-product of the given vectors
   * @param v1 First vector
   * @param v2 Second vector
   * @param v3 Thrid vector
   * @returns The calculated triple product
   */
  static tripleProduct(v1: Vector3, v2: Vector3, v3: Vector3): number {
    const cross = Vector3.cross(v1, v2);
    const dot = Vector3.dot(cross, v3);
    return dot;
  }

  /**
   * Will calculate the normalized version of a vector
   * and return it as a new vector
   * @param v The vector to normalize
   * @returns A new vector that has been normalized
   */
  static normalize(v: Vector3): Vector3 {
    const norm = Vector3.clone(v);
    const factor = 1 / v.getMagnitude();
    norm.multiply(factor);
    return norm;
  }

  /**
   * Will add two vectors together and return a new one
   * @param v1 First vector
   * @param v2 Second vector
   * @returns A new result vector
   */
  static add(v1: Vector3, v2: Vector3): Vector3 {
    let x = v1.x + v2.x;
    let y = v1.y + v2.y;
    let z = v1.z + v2.z;
    return new Vector3(x, y, z);
  }

  /**
   * Will check if two vectors are parallel and return
   * true or false based on the result
   * @param v1 First vector
   * @param v2 Second vector
   * @returns True if both vectors are parallel
   */
  static areParallel(v1: Vector3, v2: Vector3): boolean {
    const factor = v2.x / v1.x;
    return v1.y * factor === v2.y && v1.z * factor === v2.z;
  }

  /**
   * SKALARMULTIPLIKATION
   * Will multiply a given number to the vector
   * @param n The number to multiply with
   * @returns The now updated vector
   */
  multiply(n: number): Vector3 {
    this.x = this.x * n;
    this.y = this.y * n;
    this.z = this.z * n;
    return this;
  }

  /**
   * Will calculate the magnitude of the vecotr and return it
   * @returns The magnitude of the vector
   */
  getMagnitude(): number {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
  }

  /**
   * Will return all the values of the vector in a numbers Array
   * @returns The values as an array
   */
  getValues(): number[] {
    return [this.x, this.y, this.z];
  }

  /**
   * Will convert a vector to a point
   * @returns The new point
   */
  toPoint(): Point {
    return new Point(this.x, this.y, this.z);
  }
}

export default Vector3;
