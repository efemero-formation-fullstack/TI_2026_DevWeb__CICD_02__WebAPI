import { describe, it, expect } from "vitest";
import calcService from "../../src/services/calc.service.js";

describe("calcService", () => {
  // ─────────────────────────────────────────────
  // add
  // ─────────────────────────────────────────────
  describe("add", () => {
    // --- integers ---
    it("adds two positive integers", () => {
      expect(calcService.add(2, 3)).toBe(5);
    });

    it("adds two negative integers", () => {
      expect(calcService.add(-4, -6)).toBe(-10);
    });

    it("adds a positive and a negative integer", () => {
      expect(calcService.add(10, -3)).toBe(7);
    });

    it("adds zero to a number", () => {
      expect(calcService.add(0, 42)).toBe(42);
    });

    it("adds two zeros", () => {
      expect(calcService.add(0, 0)).toBe(0);
    });

    // --- floating-point ---
    it("adds two decimal numbers", () => {
      expect(calcService.add(1.5, 2.5)).toBe(4);
    });

    it("rounds the result to 2 decimal places", () => {
      // 0.1 + 0.2 equals ~0.30000000000000004 in IEEE 754
      expect(calcService.add(0.1, 0.2)).toBe(0.3);
    });

    it("rounds down to 2 decimal places when the result has more", () => {
      // 1.126 * 100 = 112.60000...001 => Math.round => 113 => 1.13
      expect(calcService.add(1.126, 0)).toBe(1.13);
    });

    it("returns a value of type number", () => {
      expect(typeof calcService.add(1, 2)).toBe("number");
    });
  });

  // ─────────────────────────────────────────────
  // isEven
  // ─────────────────────────────────────────────
  describe("isEven", () => {
    it.for([
      [0, true],
      [2, true],
      [1000, true],
      [-4, true],
      [1, false],
      [3, false],
      [999, false],
      [-7, false],
    ])("isEven(%i) must be %s", ([n, expected]) => {
      expect(calcService.isEven(n)).toBe(expected);
    });

    it("returns a value of type boolean", () => {
      expect(typeof calcService.isEven(4)).toBe("boolean");
    });
  });
});
