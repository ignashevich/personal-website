export class DarkMode {
    static off() {
        // @ts-ignore
        if (window !== 'undefined') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }
    static on() {
        // @ts-ignore
        if (window !== 'undefined') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }
    static isEnabled() {
        // @ts-ignore
        if (window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
    }

}
