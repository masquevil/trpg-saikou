import type { NpcBlockTypes } from '../hooks/useScenarioParser/types';

const avatars = import.meta.glob<string>('../scenarios/*/avatars/*.{jpg,jpeg,png,gif,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const resolveScenarioAvatar: NpcBlockTypes.ResolveAvatarFn = (
  avatar: string,
  context: { moduleName: string },
) => {
  const { moduleName } = context;
  const value = avatar.trim();
  const path = `../scenarios/${moduleName}/avatars/${value}`;
  const url = avatars[path];
  if (!url) {
    console.warn(`找不到头像文件: ${path}`);
    return value; // fallback到文件名，也许是 URL
  }
  return url;
};
