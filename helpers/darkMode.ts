export class DarkMode {
    static off() {
        if (window !== 'undefined') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }
    static on() {
        if (window !== 'undefined') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }
    static isEnabled() {
        if (window !== 'undefined') {
            return localStorage.theme === 'dark';
        }
    }

}
