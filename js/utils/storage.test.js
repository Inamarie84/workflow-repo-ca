import { describe, expect, it, beforeEach } from "vitest";
import { getUsername } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "John Doe" };
    localStorage.setItem("user", JSON.stringify(user));

    expect(getUsername()).toBe("John Doe");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
