import { describe, it, expect, vi } from 'vitest';

import { generateReportData } from './data';

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    // Arrange
    const logger = vi.fn();
    // Act
    //logger.mockImplementation(() => {});
    //logger.mockImplementationOnce(() => {});

    generateReportData(logger);
    // Assert
    expect(logger).toBeCalled();
    //failed, because it called just once
    //expect(logger).toBeCalledTimes(2);
  });
});
