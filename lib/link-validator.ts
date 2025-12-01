/**
 * 링크 유효성 검증 유틸리티
 * 외부 링크나 존재하지 않는 페이지에 대한 404 체크
 */

// 존재하지 않는 페이지 경로 목록 (404 에러가 발생하는 페이지)
const invalidPaths = [
  '/privacy',
  '/terms',
  '/policy',
  '/faq',
  '/contact',
  '/download',
  '/app',
  '/teacher',
  '/student',
  '/parent',
];

/**
 * 링크가 유효한지 확인하는 함수
 * @param href - 확인할 링크 URL
 * @returns 유효한 링크인지 여부
 */
export function isValidLink(href: string): boolean {
  // 앵커 링크 (#으로 시작)는 항상 유효 (같은 페이지 내 섹션 이동)
  if (href.startsWith('#')) {
    return true;
  }

  // 루트 경로는 유효
  if (href === '/' || href === '') {
    return true;
  }

  // 외부 링크는 준비중으로 처리
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return false;
  }

  // 존재하지 않는 페이지 경로 체크
  if (invalidPaths.some(path => href === path || href.startsWith(path + '/'))) {
    return false;
  }

  // 기본적으로 존재하지 않는 페이지로 간주
  // Next.js app 디렉토리에는 루트 페이지만 존재하므로, 다른 모든 경로는 준비중
  return false;
}

/**
 * 링크 클릭 핸들러
 * @param e - 이벤트 객체
 * @param href - 링크 URL
 * @param onInvalid - 유효하지 않은 링크일 때 실행할 콜백
 * @returns 링크가 유효한지 여부
 */
export function handleLinkClick(
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  href: string,
  onInvalid: () => void
): boolean {
  // 앵커 링크는 기본 동작 허용
  if (href.startsWith('#')) {
    return true;
  }

  // 유효하지 않은 링크인 경우
  if (!isValidLink(href)) {
    e.preventDefault();
    onInvalid();
    return false;
  }

  return true;
}

