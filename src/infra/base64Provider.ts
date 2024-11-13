export class Base64Provider {
  base64ToJson(base64: string): Record<string, any> {
    const jsonString = Buffer.from(base64, "base64").toString("utf-8");
    return JSON.parse(jsonString);
  }

  jsonToBase64(json: Record<string, any>): string {
    const jsonString = JSON.stringify(json);
    return Buffer.from(jsonString).toString("base64");
  }
}
