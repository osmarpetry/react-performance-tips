## memo

1. When the props are pure
2. Renders to often
3. Re-renders with the same props
4. Medium to large components

## useMemo

1. Prevent functions to run again ever re-render
2. Use when the comparation can be only shallow

## useCallback

1. To solve shallow problems

### useCallback vs. useMemo
- To understand the difference check React doc. useMemo and shallow compare