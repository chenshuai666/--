import { sortVersions } from "../版本号排序";
import { test, expect } from "vitest";

test('sortVersions', () => {
    expect(sortVersions(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']))
        .toBe(['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5'])
})