import { useMatches } from '@tanstack/react-router';
import { useEffect } from 'react';

export const withTitle = (title: string) => ({
  beforeLoad: () => ({ title }),
});

export function DocumentTitle() {
  const matches = useMatches();
  useEffect(() => {
    const title = [...matches]

      .reverse()

      .find((match) => match.context.title)?.context.title;

    document.title = title ? `${title} · Spencer Gariano` : 'Spencer Gariano';
  }, [matches]);

  return null;
}
