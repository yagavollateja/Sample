import { useTheme } from "./ThemeContext";
import Sample from './Sample'
export default function Home() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
        <h2>Current Theme: {theme}</h2>

        <button onClick={() => setTheme("dark")}>
            Change Theme
        </button>
        <Sample/>
        </div>
    );
}