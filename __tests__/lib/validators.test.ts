import { describe, it, expect, beforeEach } from '@jest/globals'
import { registerSchema, loginSchema } from '@/lib/validators'

describe('Validators - Auth Schemas', () => {
  describe('registerSchema', () => {
    it('should validate correct registration data', () => {
      const data = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should reject invalid email format', () => {
      const data = {
        email: 'invalid-email',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it('should reject password shorter than 8 characters', () => {
      const data = {
        email: 'test@example.com',
        password: 'short',
        firstName: 'John',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it('should reject firstName shorter than 2 characters', () => {
      const data = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'J',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it('should reject missing lastName', () => {
      const data = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: '',
      }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it('should require all fields', () => {
      const data = {
        email: 'test@example.com',
        password: 'password123',
      }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })

  describe('loginSchema', () => {
    it('should validate correct login data', () => {
      const data = {
        email: 'test@example.com',
        password: 'password123',
      }
      const result = loginSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('should reject invalid email format', () => {
      const data = {
        email: 'invalid-email',
        password: 'password123',
      }
      const result = loginSchema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it('should reject empty password', () => {
      const data = {
        email: 'test@example.com',
        password: '',
      }
      const result = loginSchema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it('should reject missing email', () => {
      const data = {
        password: 'password123',
      }
      const result = loginSchema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it('should only require email and password', () => {
      const data = {
        email: 'test@example.com',
        password: 'password123',
        extra: 'field',
      }
      const result = loginSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })
})
