import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { saveUser, getUsername, clearStorage } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    // Clear local storage before each test to ensure a clean state
    clearStorage();
  });

  afterEach(() => {
    // Clear local storage after each test to ensure a clean state
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "John Doe" };
    saveUser(user);

    expect(getUsername()).toBe("John Doe");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
