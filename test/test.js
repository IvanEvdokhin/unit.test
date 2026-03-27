import { getHealthStatus } from '../src/health.js';

describe('getHealthStatus', () => {
  test('should return "healthy" when health is greater than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "healthy" when health is 100', () => {
    const character = { name: 'Воин', health: 100 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "healthy" when health is 51', () => {
    const character = { name: 'Лучник', health: 51 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "wounded" when health is exactly 50', () => {
    const character = { name: 'Маг', health: 50 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health is 30', () => {
    const character = { name: 'Маг', health: 30 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health is exactly 15', () => {
    const character = { name: 'Маг', health: 15 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "critical" when health is less than 15', () => {
    const character = { name: 'Маг', health: 14 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('should return "critical" when health is 10', () => {
    const character = { name: 'Маг', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('should return "critical" when health is 0', () => {
    const character = { name: 'Маг', health: 0 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('should return "critical" when health is 1', () => {
    const character = { name: 'Маг', health: 1 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('should handle edge cases correctly', () => {
    expect(getHealthStatus({ name: 'Тест', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Тест', health: 51 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Тест', health: 15 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Тест', health: 14 })).toBe('critical');
  });
});