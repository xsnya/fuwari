import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "AUNyaの小窝",
	subtitle: "AUNya的碎碎念.",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 355, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/neko-anime.jpg", // 在这里设置你的首页横幅图片;// Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // 在这里设置你的横幅图片位置// Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // 这里可以设置你的横幅图片的作者信息;// Display the credit text of the banner image
			text: "TBNya", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // 这里可以设置是否显示文章目录;// Display the table of contents on the right side of the post
		depth: 2, /// 文章目录默认显示到2级;/ Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// 网站图标
		// Leave this array empty to use the default favicon
		{
		src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		sizes: '512x512',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		LinkPreset.mesite,
		//{
		//	name: "GitHub",
		//	url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
		//	external: true, // Show an external link icon and will open in a new tab
		//},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "AUNya",
	bio: "你好喵~",
	links: [
		//{
		//	name: "Twitter",
		//	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
		///	// You will need to install the corresponding icon set if it's not already included
			//// `pnpm add @iconify-json/<icon-set-name>`
		//	url: "https://twitter.com",
		//},
		//{
		//	name: "Steam",
		//	icon: "fa6-brands:steam",
		//	url: "https://store.steampowered.com",
		//},
		{
			name: "bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/3546708996786634",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/tb-miao",
		},
		{
			name: "weibo",
			icon: "fa6-brands:weibo",
			url: "https://weibo.com/u/8010806053",
		},
		{
			name: "zhihu",
			icon: "fa6-brands:zhihu",
			url: "https://www.zhihu.com/people/gc-74-52",
		},
		{
			name: "RSS",
			icon: "fa6-solid:rss",
			url: "/rss.xml",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
