import { useState } from 'react';

export const useValue = <T = undefined>(defaultValue: T) => {
    const [value, set] = useState<T>(defaultValue);

    return ({get: () => value, set});
}
