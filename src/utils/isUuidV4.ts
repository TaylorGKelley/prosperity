const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export default function isUuidV4(uuid: string): boolean {
	return uuidV4Regex.test(uuid);
}
