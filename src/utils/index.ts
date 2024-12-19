export const saveToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  
  export const getFromLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key);
  };
  
  export const clearLocalStorage = () => {
    localStorage.clear();
  };
  