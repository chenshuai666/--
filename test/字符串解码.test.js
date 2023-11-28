import { decodeString } from "../字符串解码";
import { expect, test } from 'vitest'

test('decodeString', () => {
    expect(decodeString('3[a2[c]]')).toBe('accaccacc')
})