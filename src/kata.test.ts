import { describe, expect, test, it } from "@jest/globals";
import { add } from "./kata";

describe("add", () => {
  it("should return 0 when input is empty", () => {
    expect(add("")).toBe(0);
  });

  it("should return 1 when input is 1", () => {
    expect(add("1")).toBe(1);
  });

  it("should return 3 when input is 1,2", () => {
    expect(add("1,2")).toBe(3);
  });

  it("should return 6 when input is 1,2,3", () => {
    expect(add("1,2,3")).toBe(6);
  });

  it("should return 6 when input is 1\n2,3", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should return 3 when input is //;\n1;2", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
