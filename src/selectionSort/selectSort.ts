export function selectionSort<T = number> (list: T[] ) {
  const copyList = new Set(list);
  const sortedList = new Set<T>();

  if( typeof list[0] === 'number')  {
    while (copyList.size > 0) {
      let minor = Math.min(...copyList as unknown as number[]);
      sortedList.add(minor as unknown as T);
      copyList.delete(minor as unknown as T);
    }
  
    return [...sortedList]
  }
}
