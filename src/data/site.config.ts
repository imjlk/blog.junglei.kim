interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: '김정래', // Site author
	title: '김정래의 블로그', // Site title.
	description: 'Astro 웹 프레임워크를 기반으로 제작된 김정래의 개인 블로그입니다.', // Description to display in the meta tags
	lang: 'ko-KR',
	ogLocale: 'ko_KR',
	shareMessage: '이 글을 공유하기', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
