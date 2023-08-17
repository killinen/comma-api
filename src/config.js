export const COMMA_URL_ROOT = 'http://192.168.1.150:3000/';
export const ATHENA_URL_ROOT = 'https://athena.comma.ai/';
export let VIDEO_HOST = process.env.COMMA_VIDEO_CDN;
if (!VIDEO_HOST) {
  VIDEO_HOST = 'https://my-comma-video.azureedge.net';
}
