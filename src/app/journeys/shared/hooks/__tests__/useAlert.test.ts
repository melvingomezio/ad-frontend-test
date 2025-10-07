import { renderHook, act } from '@testing-library/react';
import { useAlert } from '../useAlert';

describe('useAlert', () => {
  it('initializes with empty message and not visible', () => {
    const { result } = renderHook(() => useAlert());
    
    expect(result.current.alert.message).toBe('');
    expect(result.current.alert.isVisible).toBe(false);
  });

  it('shows alert with message', () => {
    const { result } = renderHook(() => useAlert());
    
    act(() => {
      result.current.showAlert('Test message');
    });
    
    expect(result.current.alert.message).toBe('Test message');
    expect(result.current.alert.isVisible).toBe(true);
  });

  it('hides alert', () => {
    const { result } = renderHook(() => useAlert());
    
    act(() => {
      result.current.showAlert('Test message');
    });
    
    act(() => {
      result.current.hideAlert();
    });
    
    expect(result.current.alert.message).toBe('Test message');
    expect(result.current.alert.isVisible).toBe(false);
  });
});