import healthStatus from './healthStatus';

test('health > 50 should return healthy', () => {
    expect(healthStatus({ name: 'Mage', health: 90 })).toBe('healthy');
  });
  
  test('health between 15 and 50 should return wounded', () => {
    expect(healthStatus({ name: 'Warrior', health: 30 })).toBe('wounded');
  });
  
  test('health < 15 should return critical', () => {
    expect(healthStatus({ name: 'Rogue', health: 10 })).toBe('critical');
  });