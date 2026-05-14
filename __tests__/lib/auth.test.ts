import { describe, it, expect, beforeEach, jest } from '@jest/globals'

// Import the functions to test
import { hashPassword, verifyPassword, generateToken } from '@/lib/auth'

describe('Auth Utilities', () => {
  describe('hashPassword', () => {
    it('should hash a password', async () => {
      const password = 'testpassword123'
      const hash = await hashPassword(password)
      
      expect(hash).toBeDefined()
      expect(typeof hash).toBe('string')
      expect(hash.length).toBeGreaterThan(0)
      expect(hash).not.toBe(password) // Should not be plaintext
    })

    it('should produce different hashes for the same password', async () => {
      const password = 'testpassword123'
      const hash1 = await hashPassword(password)
      const hash2 = await hashPassword(password)
      
      expect(hash1).not.toBe(hash2) // bcrypt includes salt, so hashes differ
    })
  })

  describe('verifyPassword', () => {
    it('should verify a correct password', async () => {
      const password = 'testpassword123'
      const hash = await hashPassword(password)
      const isValid = await verifyPassword(password, hash)
      
      expect(isValid).toBe(true)
    })

    it('should reject an incorrect password', async () => {
      const password = 'testpassword123'
      const hash = await hashPassword(password)
      const isValid = await verifyPassword('wrongpassword', hash)
      
      expect(isValid).toBe(false)
    })
  })

  describe('generateToken', () => {
    it('should generate a JWT token', () => {
      const userId = 'test-user-id'
      const token = generateToken(userId)
      
      expect(token).toBeDefined()
      expect(typeof token).toBe('string')
      expect(token.split('.').length).toBe(3) // JWT has 3 parts
    })

    it('should generate tokens with valid JWT structure', () => {
      const token = generateToken('user-123')
      const parts = token.split('.')
      
      expect(parts.length).toBe(3)
      // Verify header is valid base64
      expect(() => Buffer.from(parts[0], 'base64').toString()).not.toThrow()
      // Verify payload is valid base64
      expect(() => Buffer.from(parts[1], 'base64').toString()).not.toThrow()
    })
  })
})
