import undici from 'undici';

export default function fetchur(...args: any[]) {
  // @ts-ignore
  return undici.fetch(...args)
}