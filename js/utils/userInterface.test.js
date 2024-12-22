import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/current-path", "/current-path")).toBe(true);
  });

  it('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/current-path", "/current-path/sub-path")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/current-path", "/different-path")).toBe(false);
  });
});
