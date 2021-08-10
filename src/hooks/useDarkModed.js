import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [useDarkMode, setUseDarkMode] = useLocalStorage("darkModeEnabled");

  return [useDarkMode, setUseDarkMode];
}
