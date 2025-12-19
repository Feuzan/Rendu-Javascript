const THEME_KEY = 'theme';
const btn = document.getElementById('colorButton');

function applyTheme(theme) {
	if (theme === 'dark') document.body.classList.add('dark');
	else document.body.classList.remove('dark');
	btn.textContent = theme === 'dark' ? 'Mode sombre' : 'Mode clair';
}
btn.addEventListener('click', () => {
	const isDark = document.body.classList.contains('dark');
	const newTheme = isDark ? 'light' : 'dark';
	applyTheme(newTheme);
});
