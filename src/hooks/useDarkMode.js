import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
  const [useDarkMode, setDarkMode] = useLocalStorage(
    "darkModeEnabled",
    initialValue
  );

  return [useDarkMode, setDarkMode];
}
