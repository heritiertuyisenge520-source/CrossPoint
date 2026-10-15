import type { MouseEvent } from 'react';
import type { NavigateFunction } from 'react-router-dom';

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function handleSectionClick(
  e: MouseEvent,
  sectionId: string | null,
  pathname: string,
  navigate: NavigateFunction
) {
  e.preventDefault();
  if (!sectionId) {
    navigate('/');
    return;
  }
  if (pathname === '/') {
    scrollToSection(sectionId);
  } else {
    navigate('/', { state: { scrollTo: sectionId } });
  }
}
