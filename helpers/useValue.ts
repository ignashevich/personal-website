import { useState } from 'react';

export const useValue = <T = undefined>(defaultValue: T) => {
    const [value, set] = useState<T>();

    return ({get: () => value, set});
}
