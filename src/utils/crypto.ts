import { AES, mode, pad, enc } from "crypto-ts"
const token = () => localStorage.getItem("token")?.slice(0, 16)

export const en = (obj: Object) => {
	// @ts-ignore
	return AES.encrypt(JSON.stringify(obj), enc.Utf8.parse(token()), {
		mode: mode.ECB,
		padding: pad.PKCS7
	}).toString()
}
export const de = (str: string) => {
	// @ts-ignore
	const de = AES.decrypt(str, enc.Utf8.parse(token()), {
		mode: mode.ECB,
		padding: pad.PKCS7
	}).toString(enc.Utf8)
	return de
}
